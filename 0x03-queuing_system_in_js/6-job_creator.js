#!/usr/bin/node
/**
 * Create a job
 */
import { createQueue } from 'kue';

const queue = createQueue();
const jobData = { phoneNumber: '+2347123456789', message: 'Verify your identification' };

const job = queue
  .create('push_notification_code', jobData)
  .save((err) => {
    if (!err) console.log(`Notification job created: ${job.id}`);
  });

job.on('complete', (result) => { /* eslint-disable-line no-unused-vars */
  console.log('Notification job completed');
});

job.on('failed', (err) => { /* eslint-disable-line no-unused-vars */
  console.log('Notification job failed');
});
