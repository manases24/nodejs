import { envs } from "./config/plugins/envs.plugin";
import { Server } from "./presentation/server";

// Function anonima
(() => {
  main();
})();

function main() {
  // Server.start();
  console.log(envs);
}
