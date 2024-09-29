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
        { text: 'introduction', link: '/partipark/' },
        { text: 'technologies utilisées', link: '/partipark/technologies' },
        { text: 'challenges', link: '/partipark/challenges' },
        { text: 'fonctionnalités', link: '/partipark/fonctionnalites' },
        { text: 'apprentissages', link: '/partipark/apprentissages' }
      ],
      '/diacter/': [
        { text: 'introduction', link: '/diacter/' },
        { text: 'technologies utilisées', link: '/diacter/technologies' },
        { text: 'challenges', link: '/diacter/challenges' },
        { text: 'fonctionnalités', link: '/diacter/fonctionnalites' },
        { text: 'apprentissages', link: '/diacter/apprentissages' }
      ],
      '/ppcc/': [
        { text: 'introduction', link: '/ppcc/' },
        { text: 'technologies utilisées', link: '/ppcc/technologies' },
        { text: 'challenges', link: '/ppcc/challenges' },
        { text: 'fonctionnalités', link: '/ppcc/fonctionnalites' },
        { text: 'apprentissages', link: '/ppcc/apprentissages' }
      ],
      '/projet-mod-3d/': [
        { text: 'introduction', link: '/projet-mod-3d/' },
        { text: 'technologies utilisées', link: '/projet-mod-3d/technologies' },
        { text: 'challenges', link: '/projet-mod-3d/challenges' },
        { text: 'fonctionnalités', link: '/projet-mod-3d/fonctionnalites' },
        { text: 'apprentissages', link: '/projet-mod-3d/apprentissages' }
      ],
      '/reddit-tiktok-story/': [
        { text: 'introduction', link: '/reddit-tiktok-story/' },
        { text: 'technologies utilisées', link: '/reddit-tiktok-story/technologies' },
        { text: 'challenges', link: '/reddit-tiktok-story/challenges' },
        { text: 'fonctionnalités', link: '/reddit-tiktok-story/fonctionnalites' },
        { text: 'apprentissages', link: '/reddit-tiktok-story/apprentissages' }
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

