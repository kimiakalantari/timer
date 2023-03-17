const alarmTimes = process.argv.slice(2).sort((a, b) => a - b);

// Function to beep
const beep = () => {
  process.stdout.write('\x07');
};

// Set alarms
for (let alarm of alarmTimes) {
  if (alarm > 0 && !isNaN(alarm)) {
    setTimeout(() => {
      beep();
      console.log(`Alarm at ${alarm} seconds`);
    }, alarm * 1000);
  }
}