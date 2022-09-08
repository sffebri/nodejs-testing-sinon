const process = require('process');

function main(argv) {
  const command = argv[2];
  switch(command) {
    case 'run-kalkulator':
      require('./lib/index');
      break;
    /*case 'tugas-2':
      require('./lib/stream/1-read');
      break;*/
    /*default:
      console.error(`command ${command} not found`);*/
  }
}

main(process.argv);