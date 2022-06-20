const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

const GoStumble = (auth) => new Promise((resolve, reject) => {

    fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log(`      
_
   / \   _ __ __ ___  ____  _____
  / _ \ | '__/ _` \ \/ /\ \/ / _ \
 / ___ \| | | (_| |>  <  >  <  __/
/_/   \_\_|  \__,_/_/\_\/_/\_\___|

Pembuat Script : ${chalk.green('@AraxxePG')} - ${chalk.blue('https://araxxepg.github.id')}
`);

    const auth = rs.question('[☠️] Paste Your Token/Auth Code : ');
    console.log('');

    while (true) {

        const result = await GoStumble(auth);
        if (!result) {

            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
            
            console.log(chalk.blue(`\r[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} • Country : ${country} | ${chalk.pink(`Trophy : ${trophy}`)} | ${chalk.pink(`Crown : ${crown}`)}`));
            
        } else if (result == 'BANNED') {
            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Ur Account Is disable LOL XDDD`));
            break;
        }
    }
    

})();