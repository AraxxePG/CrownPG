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
SCRIPT BY REXXA

Pembuat Script : ${chalk.green('@RexxaASP')} - ${chalk.blue('https://RexxaASP.co.id')}
`);

    const auth = rs.question('[•_•] Tempel Kode Auth Lu di sini babi anjing : ');
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
            
            console.log(chalk.green(`\r[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.red(`Tropi : ${trophy}`)} | ${chalk.red(`MahKota : ${crown}`)}`));
            
        } else if (result == 'BANNED') {
            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Banned !`));
            break;
        }
    }
    

})();