const { description } = require('../../package')
const path = require('path')
const axios = require('axios');
const { loadValueExchange } = require('./utils/value_exchange_dictionary');
const { generateVerbContent } = require('./utils/verb_to_details');
require('dotenv').config();

module.exports = async () => {
  const allVerbs = await loadValueExchange();
  console.log([...allVerbs.map(eachVerb => eachVerb.verb)]);
  return {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'TJ Dictionary Reference',
    description: description,

    head: [
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
      repo: 'https://gitlab.com/edvanta/gomad/thoughtjumper/tj-dictionary',
      branch: 'main',
      docsBranch: 'main',
      editLinks: true,
      docsDir: 'docs/src/',
      editLinkText: 'Help us improve this page!',
      lastUpdated: 'Last Updated',
      nav: [
        {
          text: 'Guide',
          link: '/guide/'
        },
        {
          text: 'Verbs',
          link: '/verbs/',
        },
        {
          text: 'Reports',
          link: '/reports/'
        },
        {
          text: 'Widgets',
          link: '/widgets/'
        },
        {
          text: 'Brand',
          link: '/brand/'
        },
        {
          text: 'Thought Jumper',
          link: 'https://thoughtjumper-client.netlify.app/'
        }
      ],
      sidebar: {
        '/guide/': [
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '',
              'using-dictionary',
              'thoughts',
              'thought-map',
              'quests',
              'use-cases',
              'faqs',
            ]
          }
        ],
        '/verbs/': [
          {
            title: 'Verbs',
            collapsable: false,
            children: [
              '',
              'VISITED',
              ...allVerbs.map(eachVerb => [`/verbs/${eachVerb.verb}/`, eachVerb.verb]),
            ]
          }
        ],
        '/reports/': [
          {
            title: 'Guide',
            collapsable: false,
            children: [
              '',
              'events-view'
            ]
          }
        ],
        '/widgets/': [
          {
            title: 'Widgets',
            collapsable: false,
            children: [
              '',
              '3d-viewer',
              'library',
              'explore_mini',
              'forcegraph',
              'notes',
              'Search',
              'info_items',
              'wolframalpha'
            ]
          }
        ],
      }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
      '@vuepress/plugin-back-to-top',
      '@vuepress/plugin-medium-zoom',
      ["vuepress-plugin-tags", {
        type: 'rainbow',
        selector: '.page .content__default h1',
        rainbows: [
          {
            color: '#42b983',
            border: '1px solid #e2faef',
            backgroundColor: '#f0faf5',
          },
          {
            color: '#42b983',
            border: '1px solid #e2faef',
            backgroundColor: '#f0faf5',
          }
        ]
      }],
    ],

    async additionalPages() {
      const content = await axios.get('https://raw.githubusercontent.com/vuejs/vuepress/master/CHANGELOG.md');

      // console.log({ allVerbs });
      let toReturn = [];
      allVerbs.forEach((verb) => {
        toReturn.push({
          path: `/verbs/${verb.verb}/`,
          content: generateVerbContent(verb),
        });
      });
      return toReturn;
    },
  }
}
