let isProd = process.env.NODE_ENV === 'production';

module.exports = {
  REST_ENDPOINT: JSON.stringify('https://techcrunch.com/wp-json/wp/v2'),
  POSTS_PER_PAGE: JSON.stringify(9),
  GA_TRACKING_ID: JSON.stringify(isProd ? 'UA-1860302-27' : 'XXX'),
  REQUEST_CACHE_MAX: JSON.stringify(150)
};
