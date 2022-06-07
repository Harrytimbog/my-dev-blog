const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'harrie',
        mongodb_password: '0WPQTtlaSNMs22iH',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-blog'
      },
    };
  }

  return {
    env: {
      mongodb_username: 'harrie',
      mongodb_password: '0WPQTtlaSNMs22iH',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-blog'
    },
  };
};