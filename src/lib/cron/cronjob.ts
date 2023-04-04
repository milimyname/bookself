import cron from 'node-cron';

export const cronJob = cron.schedule('* * * * *', () => {
	console.log('running a task every minute');
});

cronJob.start();
