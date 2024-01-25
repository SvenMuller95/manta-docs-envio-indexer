import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useEventListener } from './useEventListener'

declare global {
  interface WindowEventMap {
    'local-storage': CustomEvent
  }
}

type SetValue<T> = Dispatch<SetStateAction<T>>

const IS_SERVER = typeof window === 'undefined'

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working
    if (IS_SERVER) {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (parseJSON(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key])

  // State to store our value
  // Pass initial value to support hydration server-client
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useCallback(value => {
    // Prevent build error "window is undefined" but keeps working
    if (IS_SERVER) {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`,
      )
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(readValue()) : value

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue))

      // Save state
      setStoredValue(newValue)

      // We dispatch a custom event so every similar useLocalStorage hook is notified
      window.dispatchEvent(new StorageEvent('local-storage', { key }))
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error)
    }
  }, [])

  useEffect(() => {
    setStoredValue(readValue())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  const handleStorageChange = useCallback(
    (event: Event) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return
      }
      setStoredValue(readValue())
    },
    [key, readValue],
  );

  // this only works for other documents, not the current one
  useEventListener(window.document, 'storage', handleStorageChange)

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener(window.document, 'local-storage', handleStorageChange)

  return [storedValue, setValue]
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '')
  } catch {
    console.warn('parsing error on', { value })
    return undefined
  }
}