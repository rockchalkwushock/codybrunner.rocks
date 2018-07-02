// Native
const { resolve } = require('path')

const { dependencies } = require('./package.json')

// Get Major.Minor
// NOTE: Setup 0-3 for Exact version, switch to 1-3 when add ^x.x.x back.
const gatsbyVersion = dependencies.gatsby.substr(0, 3)
const styledVersion = dependencies['styled-components'].substr(1, 3)
// Get current year.
const year = new Date().getFullYear()

module.exports = {
  plugins: [
    // 'gatsby-plugin-canonical-urls',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_ID}`,
        anonymize: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'codybrunner.me',
        short_name: 'Cody Brunner',
        description: 'Web Development Portfolio and Resume for Cody Brunner',
        start_url: '/',
        lang: 'en-US',
        orientation: 'any',
        background_color: '#7a9eb1',
        theme_color: '#ffe1b6',
        display: 'standalone',
        icon: 'src/assets/favicon.png'
      }
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#ffe1b6',
        showSpinner: false
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://codybrunner.me',
        sitemap: 'https://codybrunner.me/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/lib/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${resolve(__dirname, './src/img')}`
      }
    },
    'gatsby-transformer-sharp'
  ],
  siteMetadata: {
    about:
      'Hello my name is Cody and I am a full stack developer living in Portland, Oregon. I am currently a student of the PDX Code Guild Full Stack Python based web development boot camp and will be completing the program in September. I have 2 years of experience working with JavaScript technologies such as React, Redux, and Node.',
    author: 'Cody Brunner',
    business: [
      {
        className: 'fas, envelope',
        href: 'mailto:rockchalkwushock@icloud.com',
        label: 'Email'
      },
      {
        className: 'fas, file-pdf',
        href: 'https://www.dropbox.com/s/ydagcln6p0sk513/Resume.docx?dl=1',
        label: 'Resume'
      }
    ],
    contacts: [
      {
        className: 'fab, github',
        href: 'https://github.com/rockchalkwushock',
        label: 'Github'
      },
      {
        className: 'fab, instagram',
        href: 'https://www.instagram.com/rockchalkwushock',
        label: 'Instagram'
      },
      {
        className: 'fab, linkedin',
        href: 'https://www.linkedin.com/in/cody-brunner',
        label: 'LinkedIn'
      },
      {
        className: 'fab, medium-m',
        href: 'https://medium.com/@RockChalkDev',
        label: 'Medium'
      },
      {
        className: 'fab, twitter',
        href: 'https://twitter.com/RockChalkDev',
        label: 'Twitter'
      },
      {
        className: 'fab, youtube',
        href: 'https://www.youtube.com/channel/UCZgBTMhX7jZTkbm7Fpv2bWw',
        label: 'Youtube'
      }
    ],
    copyright: `© 2017-${year} Cody Brunner`,
    description: 'Web Development Portfolio and Resume for Cody Brunner',
    education: [
      {
        id: 'pdx',
        location: 'PDX Code Guild',
        name: 'Full Stack Web Development Boot Camp',
        dates: 'June - September 2018'
      },
      {
        id: 'watc',
        location: 'Wichita Area Technical College',
        name: 'A.A.S in Robotic Technology',
        dates: 'August 2013 - May 2015'
      },
      {
        id: 'kwu',
        location: 'Kansas Wesleyan University',
        name: 'B.A. Criminal Justice, B.A. Sociology',
        dates: 'August 2008 - May 2011'
      }
    ],
    experience: [
      {
        id: 'bothofus',
        company: 'BøthofUs',
        role: 'Frontend Developer',
        dates: 'March - May 2018',
        desc:
          "Worked as a freelance frontend developer working on the beta-release of Mate.org. The project made use of VueJS and Apollo GraphQL, requiring me to learn a new framework overnight. I successfuly implemented the project's test suite and continuous integration as well as cleaned up the build process."
      }
    ],
    googleVerify: 'qNDU-jTYxpCxdkBdyG_M6GK1x6rDgtPQ-37chsjf0Uk',
    keywords:
      'Cody Brunner, Full-Stack JavaScript Developer, Portland, Oregon, web-development, tech blog, Node.js, React.js, Apollo/GraphQL',
    lang: 'en',
    links: {
      creativeCommons: {
        href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
        text: 'All Rights Reserved.'
      },
      gatsby: {
        href: 'https://gatsbyjs.org',
        text: `Powered by Gatsby ${gatsbyVersion}`
      },
      now: {
        href: 'https://zeit.co/now',
        text: 'Hosted on Now'
      },
      src: {
        href: 'https://github.com/rockchalkwushock/codybrunner.me'
      },
      styled: {
        href: 'https://www.styled-components.com',
        text: `Styled with Styled-Components ${styledVersion}`
      }
    },
    menu: [
      {
        id: 1,
        href: '/',
        text: 'Home'
      },
      {
        id: 2,
        href: '#about',
        text: 'About'
      },
      {
        id: 3,
        href: 'https://codybrunner.blog',
        text: 'Blog'
      },
      {
        id: 4,
        href: '#experience',
        text: 'Experience'
      },
      {
        id: 5,
        href: '#education',
        text: 'Education'
      },
      {
        id: 6,
        href: '#projects',
        text: 'Projects'
      },
      {
        id: 7,
        href: '#skills',
        text: 'Skills'
      },
      {
        id: 8,
        href: '#contact',
        text: 'Contact'
      }
    ],
    projects: [
      {
        desc: 'Personal & Technology blog written in GatsbyJS.',
        href: 'https://codybrunner.blog',
        id: 'codybrunner.blog',
        name: 'codybrunner.blog',
        src: 'https://github.com/rockchalkwushock/codybrunner.blog'
      },
      {
        desc: 'Authentication package for MicroJS framework.',
        href: 'https://www.npmjs.com/package/microauth-vkontakte',
        id: 'microauth-vkontakte',
        name: 'microauth-vkontakte',
        src: 'https://github.com/microauth/microauth-vkontakte'
      },
      {
        desc:
          'Package/Tutorial for learning how to write open source software.',
        href: 'https://www.npmjs.com/package/how-to-open-source',
        id: 'how-to-open-source',
        name: 'how-to-open-source',
        src: 'https://github.com/rockchalkwushock/how-to-open-source'
      },
      {
        desc:
          'Assisted in the rebuild of this non-profit webpage through a hackathon.',
        href: 'https://highfivesfoundation.org/',
        id: 'h5s',
        name: 'High Fives Foundation Website',
        src: 'https://github.com/HighFivesFoundation/website'
      },
      {
        desc:
          'Photography Business Website for Masha Eltsova written in NextJS.',
        href: 'https://mashaeltsovaphotography.com',
        id: 'mashaeltsova',
        name: 'Masha Eltsova Photography',
        src: 'https://github.com/rockchalkwushock/mashaeltsova-photography'
      },
      {
        desc:
          'My personal website & web development portfolio written in GatsbyJS.',
        href: 'https://codybrunner.me',
        id: 'codybrunner.me',
        name: 'codybrunner.me',
        src: 'https://github.com/rockchalkwushock/codybrunner.me'
      },
      {
        desc:
          'Simple weather app built using ReactJS, Apollo GraphQL, & APIXU API.',
        href: 'https://the-rising-sun.now.sh/',
        id: 'rising-sun',
        name: 'the-rising-sun',
        src: 'https://github.com/rockchalkwushock/react-weather-app'
      }
    ],
    skills: [
      'HTML5',
      'CSS3',
      'ES6 JavaScript',
      'Git',
      'Node',
      'MongoDB',
      'PostgreSQL',
      'ExpressJS',
      'ReactJS + Redux',
      'VueJS',
      'Python',
      'Elixir'
    ],
    siteUrl: 'https://codybrunner.me',
    title: 'Cody Brunner - Full-Stack JavaScript Developer'
  }
}
