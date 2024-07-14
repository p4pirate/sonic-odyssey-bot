require('colors');

function displayHeader() {
  process.stdout.write('\x1Bc');
  console.log('========================================'.cyan);
  console.log('=           Sonic Odyssey BOT          ='.cyan);
  console.log('=              Created by PIRATE       ='.cyan);
  console.log('= https://t.me/crypto_airdrop_pirates  ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = {
  displayHeader,
};
