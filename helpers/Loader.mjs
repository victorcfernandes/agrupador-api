import fileSystem from "fs";

export const loadFiles = (router, path) => {
  fileSystem.readdirSync(path).forEach(async file => {
    if (file === "index.mjs") return;
    const routeModule = await import(`${path}/${file}`);
    router.use("/", routeModule.default);
  });
  return router;
};

export default {
  loadFiles
};
