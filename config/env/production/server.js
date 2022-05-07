module.exports = ({ env }) => ({
  proxy: true,
  url: env('https://portfolio-gatsby-api.herokuapp.com/'),
  app: { 
    keys: env.array('APP_KEYS')
  },
})