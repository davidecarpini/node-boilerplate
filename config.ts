import convict from 'convict';

export default convict({
  server: {
    port: {
      format: 'port',
      default: 3000,
      env: 'SERVER_PORT'
    }
  }
});
