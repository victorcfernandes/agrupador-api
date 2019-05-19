import express from "express";
import cors from "cors";
import helmet from "helmet";

import controllers from "./controllers/index.mjs";

// API server
const app = express();
const port = 3001;

app.use(helmet());

app.use(cors());

// Loading all controller files
app.use(controllers);

app.listen(port, () => console.log(`app listening on port ${port}!`));
