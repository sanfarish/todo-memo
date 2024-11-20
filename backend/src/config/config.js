module.exports = {
  "development": {
    "username": process.env.DEV_DB_USERNAME,
    "password": process.env.DEV_DB_PASSWORD,
    "database": process.env.DEV_DB_NAME,
    "host": process.env.DEV_DB_HOSTNAME,
    "dialect": "mysql",
    "logging": false,
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "todo_memo",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false,
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "todo_memo",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "logging": true,
  }
}