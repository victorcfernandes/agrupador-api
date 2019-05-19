import express from 'express';
import Group from '../models/Group';

const router = express.Router();

router.post('/groups/new', async ({ body }, res) => {
  const data = await Group.create(body);

  res.json(data);
});

export default router;
