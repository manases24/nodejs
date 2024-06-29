import { envs } from "./config/envs.config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

// Function anonima
(() => {
  main();
})();

function main() {
  const server = new Server({ port: envs.PORT, routes: AppRoutes.routes });
  server.start();
}
