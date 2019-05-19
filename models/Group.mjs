import { getConnection } from '../helpers/Knex';

// fundão
// -22.863445, -43.226824
const getByLatLng = async ({
  lat = -22.863445,
  lng = -43.226824,
  radius = 1,
  offset = 0,
  limit = 10,
}) => {
  const knex = getConnection();
  // radius of the earth in KM
  const EARTH_RADIUS = 6371;

  // https://en.wikipedia.org/wiki/Haversine_formula
  const formula = `(${EARTH_RADIUS} * ACOS(COS(RADIANS(?)) * COS(RADIANS(lat)) * COS(RADIANS(lng)-RADIANS(?)) + SIN(RADIANS(?)) * SIN(RADIANS(lat))))`;

  const select = knex.raw(`${formula} AS distance`, [lat, lng, lat]);

  // We need this to respect the ONLY_FULL_GROUP_BY rule
  const fields = ['id', 'name', 'link', 'description', 'lat', 'lng'];

  const baseQuery = knex
    .select(fields)
    .select(select)
    .table('groups')
    .havingRaw(`${formula} < ?`, [lat, lng, lat, radius])
    .groupBy(fields);

  const groupCount = await knex.count('* as count').from(baseQuery.clone().as('groups_searched'));

  const groups = await baseQuery.offset(parseInt(offset, 10)).limit(parseInt(limit, 10));

  return {
    count: groupCount[0].count,
    data: groups,
  };
};

const create = async ({
  name, description, link, lat, lng,
}) => {
  const knex = getConnection();
  const data = await knex('groups').returning(['id', 'name', 'link']).insert({
    name, description, link, lat, lng,
  });

  return data;
};

export default {
  getByLatLng,
  create,
};
