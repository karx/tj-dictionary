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
      repo: '',
      editLinks: false,
      docsDir: '',
      editLinkText: '',
      lastUpdated: false,
      nav: [
        {
          text: 'Verbs',
          link: '/verbs/',
        },
        {
          text: 'Guide',
          link: '/guide/'
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
          text: 'Thought Jumper',
          link: 'https://thoughtjumper-client.netlify.app/'
        }
      ],
      sidebar: {
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
              'books',
              'explore',
              'forcegraph',
              'notes',
              'wikidata',
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
