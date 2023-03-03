const CronMasterJob = require("cron-master").CronMasterJob;
const { logData } = require("../controller");
module.exports = new CronMasterJob({
  // Optional. Used to determine when to trigger the 'time-warning'. Fires after
  // the provided number of milliseconds (e.g 2 minutes in the case below) has
  // passed if the job has not called the done callback
  timeThreshold: 2 * 60 * 1000,

  // Optional. Can be used to add useful meta data for a job
  meta: {
    name: "log data into file",
  },

  // Just the usual params that you pass to the "cron" module!
  cronParams: {
    cronTime: "* * * * *",
    onTick: async function (job, done) {
      await logData();
      const now = new Date();
      console.log(`Logging Data at ${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`)
      done(null, "ok");
    },
  },
});
