import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

const listener = (message) => console.log(message);

client.SUBSCRIBE('ALX channel');

client.on('message', (channel, message) => {
  if (channel === 'ALX channel') {
    if (message === 'KILL_SERVER') {
      client.UNSUBSCRIBE();
      client.QUIT();
    }
    listener(message);
  }
});
