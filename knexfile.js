module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./mydb.sqlite"
    },
    debug: true
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: "./mydb.sqlite"
    }
  }
};
