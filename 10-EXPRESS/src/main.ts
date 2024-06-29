import { Server } from "./presentation/server";

// Function anonima
(() => {
  main();
})();

function main() {
  const server = new Server();
  server.start();
}
