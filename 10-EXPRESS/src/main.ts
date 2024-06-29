import { envs } from "./config/envs.config";
import { Server } from "./presentation/server";

// Function anonima
(() => {
  main();
})();

function main() {
  const server = new Server({ port: envs.PORT });
  server.start();
}
