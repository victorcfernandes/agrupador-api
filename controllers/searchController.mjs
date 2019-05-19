import express from "express";
import Group from "../models/Group";

const router = express.Router();

router.get("/search", async ({ query }, res) => {
  const data = Group.getByLatLng(query);

  res.json(data);
});

export default router;
