import { serverHttp2 } from "./http2";

serverHttp2.listen(3300, () => {
  console.log(`Server running on port 3300`);
});
