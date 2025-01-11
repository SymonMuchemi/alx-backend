import { createClient, print } from "redis";

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log("Redis client not connected to the server: ", err);
});

async function setNewSchool(schoolName, value) {
  client.SET(schoolName, value, print);
}

async function displaySchoolValue(schoolName) {
  client.GET(schoolName, (err, value) => {
    console.log(value);
  });
}

await displaySchoolValue("ALX");
await setNewSchool("ALXSanFrancisco", "100");
await displaySchoolValue("ALXSanFrancisco");
