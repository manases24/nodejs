import { Server } from "./presentation/server";

// Function anonima
(() => {
  main();
})();

function main() {
  Server.start();
}
