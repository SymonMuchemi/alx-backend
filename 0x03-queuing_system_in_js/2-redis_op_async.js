import { createClient, print } from "redis";
import { promisify } from 'util';

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (err) => {
  console.log("Redis client not connected to the server: ", err);
});

const getAsync = promisify(client.GET).bind(client);

function setNewSchool(schoolName, value) {
  client.SET(schoolName, value, print);
}

async function displaySchoolValue(schoolName) {
  try {
    const value = await getAsync(schoolName);

    console.log(value);
  } catch (error) {
    console.log(`Error retrieving value: ${error}`);
  }
}

displaySchoolValue("ALX");
setNewSchool("ALXSanFrancisco", "100");
await displaySchoolValue("ALXSanFrancisco");
