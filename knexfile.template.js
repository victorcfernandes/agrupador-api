module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "",
      password: "",
      database: "agrupador"
    },
    debug: true
  },
  production: {
    client: "pg",
    connection: {
      host: "",
      user: "",
      password: "",
      database: "agrupador"
    }
  }
};
