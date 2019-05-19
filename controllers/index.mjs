import express from 'express';
import path from 'path';
import { loadFiles } from '../helpers/Loader';

/* eslint-disable-next-line */
const metaUrl = import.meta.url;

const dirname = path.dirname(new URL(metaUrl).pathname);
const router = loadFiles(express.Router(), path.resolve(dirname));

export default router;
