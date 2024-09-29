import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Léonard",
  description: "Mon blog d'ingénierie",
  head: [['link', {rel : 'icon', href: '/logo/leooz.png'}]],
  themeConfig: {
    logo: '/logo/leooz.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'home', link: '/' },
      // { text: 'partipark', link: '/partipark/' },
      // { text: 'diacter', link: '/diacter/' },
      // { text: 'projet mod 3d', link: '/projet-mod-3d/' },
      // { text: 'reddit tiktok story', link: '/reddit-tiktok-story/' },
      // { text: 'vinted discord bot', link: '/vinted-discord-bot/' },
      // { text: 'iot games', link: '/iot-games/' }
    ],

    sidebar: {
      '/partipark/': [
        { text: 'Introduction', link: '/partipark/' },
        { text: 'Technologies utilisées', link: '/partipark/technologies' },
        { text: 'Challenges', link: '/partipark/challenges' },
        { text: 'Fonctionnalités', link: '/partipark/fonctionnalites' },
        { text: 'Apprentissages', link: '/partipark/apprentissages' }
      ],
      '/diacter/': [
        { text: 'Introduction', link: '/diacter/' },
        { text: 'Technologies utilisées', link: '/diacter/technologies' },
        { text: 'Challenges', link: '/diacter/challenges' },
        { text: 'Fonctionnalités', link: '/diacter/fonctionnalites' },
        { text: 'Apprentissages', link: '/diacter/apprentissages' }
      ],
      '/ppcc/': [
        { text: 'Introduction', link: '/ppcc/' },
        { text: 'Technologies utilisées', link: '/ppcc/technologies' },
        { text: 'Challenges', link: '/ppcc/challenges' },
        { text: 'Fonctionnalités', link: '/ppcc/fonctionnalites' },
        { text: 'Apprentissages', link: '/ppcc/apprentissages' }
      ],
      '/projet-mod-3d/': [
        { text: 'Introduction', link: '/projet-mod-3d/' },
        { text: 'Technologies utilisées', link: '/projet-mod-3d/technologies' },
        { text: 'Challenges', link: '/projet-mod-3d/challenges' },
        { text: 'Fonctionnalités', link: '/projet-mod-3d/fonctionnalites' },
        { text: 'Apprentissages', link: '/projet-mod-3d/apprentissages' }
      ],
      '/reddit-tiktok-story/': [
        { text: 'Introduction', link: '/reddit-tiktok-story/' },
        { text: 'Technologies utilisées', link: '/reddit-tiktok-story/technologies' },
        { text: 'Challenges', link: '/reddit-tiktok-story/challenges' },
        { text: 'Fonctionnalités', link: '/reddit-tiktok-story/fonctionnalites' },
        { text: 'Apprentissages', link: '/reddit-tiktok-story/apprentissages' }
      ],
      '/vinted-discord-bot/': [
        { text: 'Introduction', link: '/vinted-discord-bot/' },
        { text: 'Technologies Utilisées', link: '/vinted-discord-bot/technologies' },
        { text: 'Challenges', link: '/vinted-discord-bot/challenges' },
        { text: 'Fonctionnalités', link: '/vinted-discord-bot/fonctionnalites' },
        { text: 'Apprentissages', link: '/vinted-discord-bot/apprentissages' }
      ],
      '/iot-games/': [
        { text: 'Introduction', link: '/iot-games/' },
        { text: 'Technologies Utilisées', link: '/iot-games/technologies' },
        { text: 'Challenges', link: '/iot-games/challenges' },
        { text: 'Fonctionnalités', link: '/iot-games/fonctionnalites' },
        { text: 'Apprentissages', link: '/iot-games/apprentissages' }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/leooz' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/leonardcorre/' }
    ]
  }
})

