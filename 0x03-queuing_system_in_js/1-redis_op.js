import redis, { createClient } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log("Redis client not connected to the server: ", err);
});

async function setNewSchool(schoolName, value) {
  await client.set(schoolName, value, redis.print);
}

async function displaySchoolValue(schoolName) {
  const value = await client.get(schoolName);

  console.log(value);
}

await displaySchoolValue("ALX");
await setNewSchool("ALXSanFrancisco", "100");
await displaySchoolValue("ALXSanFrancisco");
