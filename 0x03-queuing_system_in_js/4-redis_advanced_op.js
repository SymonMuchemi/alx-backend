import { createClient, print } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log("Redis client not connected to the server: ", err);
});

const KEY = "ALX";

client.MULTI()
  .HSET(KEY, "Portland", 50, print)
  .HSET(KEY, "Seattle", 80, print)
  .HSET(KEY, "New York", 20, print)
  .HSET(KEY, "Bogota", 20, print)
  .HSET(KEY, "Cali", 40, print)
  .HSET(KEY, "Paris", 2, print)
  .EXEC()

client.HGETALL(KEY, (err, hash) => {
  console.log(hash);
})
