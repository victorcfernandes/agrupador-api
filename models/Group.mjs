import { getConnection } from "../helpers/Knex";

// fundão
//-22.863445, -43.226824
const getByLatLng = async ({
  lat = -22.863445,
  lng = -43.226824,
  radius = 1,
  offset = 0,
  limit = 10
}) => {
  const knex = getConnection();
  // radius of the earth in KM
  const EARTH_RADIUS = 6371;

  const select = knex.raw(
    `(${EARTH_RADIUS} * ACOS(COS(RADIANS(?)) * COS(RADIANS(lat)) * COS(RADIANS(lng)-RADIANS(?)) + SIN(RADIANS(?)) *SIN(RADIANS(lat)))) AS distance`,
    [lat, lng, lat]
  );

  // We need this to respect the ONLY_FULL_GROUP_BY rule
  const fields = ["id", "name", "link", "description", "lat", "lng"];

  const baseQuery = knex
    .select(fields)
    .select(select)
    .table("groups")
    .having("distance", "<", radius)
    .groupBy(fields);

  const groupCount = await knex.count("* as count").from(baseQuery.clone().as("groups_searched"));

  const groups = await baseQuery.offset(parseInt(offset, 10)).limit(parseInt(limit, 10));

  return {
    count: groupCount[0].count,
    data: groups
  };
};

export default {
  getByLatLng
};
