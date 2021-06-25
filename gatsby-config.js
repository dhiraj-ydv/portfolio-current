module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://dhirajyadav.ninja/`,
    // Your Name
    name: 'Dhiraj Yadav',
    // Main Site Title
    title: `Dhiraj Yadav`,
    // Description that goes under your name in main bio
    description: `Learning Web Developer . Programmer.`,
    // Optional: Twitter account handle
    author: `@DhirajY841`,
    // Optional: Github account URL
    github: `https://github.com/dhiraj-ydv`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/dhirajyadav08/`,
    // Content of the About Me section
    about: `Hi I am Dhiraj Yadav, a 19 year old Web developer. I am currently a B.C.A. at Manipal University Jaipur.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'SignUpPage',
        description:
          'A signUpPage built using mailchimp API',
        link: 'https://hellodhiraj-signup.herokuapp.com/',
      },
      {
        name: 'WeatherApp',
        description:
          'A weatherApp built using openWeatherMap API',
        link: 'https://hellodhiraj-weatherapp.herokuapp.com/',
      },
      {
        name: 'ToDoList',
        description:
          'A toDoList built using EJS',
        link: 'https://hellodhiraj-todolist-v1.herokuapp.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Podar GPS Nawalgarh, December 2017 - February 2020',
        description: '10th Board, - 2018',
        link: 'http://www.gpspodar.in/',
      },
      {
        name: 'Gyanodaya Public School Dadiya',
        description: '12th Board, 2018 - 2020',
        link: 'http://www.gyanodayaschooldadiya.com/',
      },
      {
        name: 'Manipal University Jaipur',
        description: 'BCA, 2020 - 2023(Expected)',
        link: 'https://jaipur.manipal.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), HTML5, Node.js, Express.js, CSS, SASS, Bootstrap, jQuery',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Heroku, Version Control, API design, Inkscape',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
