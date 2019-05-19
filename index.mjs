import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import controllers from './controllers/index';

// API server
const app = express();
const port = 3001;

app.use(helmet());

app.use(cors());

app.use(bodyParser.json());

// Loading all controller files
app.use(controllers);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`app listening on port ${port}!`));
