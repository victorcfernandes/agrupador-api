import express from "express";
import Group from "../models/Group";

const router = express.Router();

router.get("/search", async ({ query }, res) => {
  const data = await Group.getByLatLng(query);
  console.log(data);

  res.json(data);
});

export default router;
