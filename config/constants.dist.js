export default {
  mongoConfig: {
    username: 'username',
    password: 'password',
    host: 'host_address',
    port: 27017,
    database: 'database_name',
  },
  emailConfig: {
    service: '126',
    username: 'email_username',
    password: 'email_password',
  },
  supportAuth: true,
  tokenSecret: 'jwt-secret',
};
