/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Manta Network',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'What is Manta?',
          id: 'Introduction',
        },
        {
          type: 'category',
          label: 'Core Concepts',
          items: [
            'concepts/ZKP',
            'concepts/zkAsset',
            'concepts/zkAddress',
            'concepts/TrustedSetup',
            'concepts/proofID',
          ],
        },
        {
          type: 'category',
          label: 'Research',
          items: [
            'learn/Talks',
            'learn/PrivatePayment',
            'learn/Spec',
            'learn/Papers',
          ],
        },
        'manta/Ecosystem'
      ]
    },
    {
      type: 'category',
      label: 'Calamari Network',
      collapsible: false,
      items: [
        {
          type: 'doc',
          label: 'What is Calamari?',
          id: 'calamari/Overview',
        },
        {
          type: 'category',
          label: '🐙 Calamari Token (KMA)',
          items: [
            {
              type: "autogenerated",
              dirName: 'calamari/KMA',
            },
            'calamari/CrowdloanClaim',
          ],
        },
        'calamari/Governance',
        'calamari/Partnership',
      ],
    },
    {
      type: 'category',
      label: 'Product Guides',
      collapsible: false,
      items: [
        'guides/MantaSigner',
        {
          type: 'category',
          label: 'MantaPay',
          items: [
            'guides/MantaPay',
            {
              type: 'category',
              label: 'Bridge',
              items: [
                'guides/DolphinBridge',
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Staking',
          items: [
            {
              type: 'category',
              label: 'KMA Staking',
              items: [
                'calamari/Staking/Overview',
                'calamari/Staking/Rewards',
                'calamari/Staking/Rules',
                {
                  type: "category",
                  label: 'Delegation',
                  items: [
                    'calamari/Staking/Delegation/dApp Overview',
                    'calamari/Staking/Delegation/HowTo Delegate'
                  ],
                },
                'calamari/Staking/StakingFAQ',
              ],
            },
            {
              type: 'category',
              label: 'MANTA Staking',
              items: [
                'guides/staking/MANTA/Overview',
              ],
            }
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Develop on Manta',
          items: [
            'guides/TrustedSetup',
          ]
        },
        {
          type: 'category',
          label: 'Develop on Calamari',
          items: [
            {
              type: 'category',
              label: 'Integration with Calamari',
              items: [
                'calamari/DevelopOnDolphin',
                'calamari/SDK',
                'guides/XcmOnboarding',
              ]
            },
            {
              type: "category",
              label: 'Collation',
              items: [
                'calamari/Staking/Collation/Overview',
                'calamari/Staking/Collation/Requirements',
                {
                  type: "category",
                  label: 'SetupAndRun',
                  items: [
                    'calamari/Staking/Collation/SetupAndRun/installation',
                    'calamari/Staking/Collation/SetupAndRun/configuration',
                    'calamari/Staking/Collation/SetupAndRun/running',
                    'calamari/Staking/Collation/SetupAndRun/sync',
                    'calamari/Staking/Collation/SetupAndRun/keys',
                    'calamari/Staking/Collation/SetupAndRun/bond',
                  ],
                },
                'calamari/Staking/Collation/Maintenance',
                'calamari/Staking/Collation/Reduce Bond',
                'calamari/Staking/Collation/Unbond',
                'calamari/Staking/Collation/CollatorFAQ',
                'calamari/Staking/Early Collator Program',
              ],
            },
          ]
        }
      ]
    }
  ]
};
