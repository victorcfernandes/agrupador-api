import knex from "knex";
import knexConfig from "../knexfile";

const memoize = func => {
  const cache = {};
  return (funcParam = "default") => {
    const idx = JSON.stringify(funcParam);
    if (!(idx in cache)) {
      cache[idx] = func(funcParam);
    }
    return cache[idx];
  };
};

const connect = () => {
  const connection = knex(knexConfig[process.env.NODE_ENV]);
  console.log(`Connected to database ${process.env.NODE_ENV}...`);
  return connection;
};

export const getConnection = memoize(connect);

export default { getConnection };
