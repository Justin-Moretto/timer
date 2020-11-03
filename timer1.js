const timers = process.argv.slice(2);

for (const timer of timers) {
  if (!isNaN(timer) && timer >= 0) {
    setTimeout(() => process.stdout.write('beep'), timer * 1000);
  }
}

//process.stdout.write('\x07') not producing sound for me in vagrant or vsCode (I'm on Linux)