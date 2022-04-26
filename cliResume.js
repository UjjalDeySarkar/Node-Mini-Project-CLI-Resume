var inquirer = require('inquirer');
const cp = require('child_process')

function displayDetails(){
    inquirer
  .prompt([
    {
        type:'list',
        name: 'Selection',
        choices: ['About', 'Skills', 'Projects', 'Academics']
    }
  ])
  .then((choices) => {
    // Use user feedback for... whatever!!
    if(choices.Selection == 'About'){
        console.log('About Ujjal')
        displayNext()
    }else if(choices.Selection == 'Skills'){
        console.log('C, C#, Java, Python, JS, Node')
        displayNext()
    }else if(choices.Selection == 'Projects'){
        console.log(`1. Hotel Management in C#,
2. Payroll System in C#`)
        cp.execSync('open -a "Google Chrome" https://github.com/UjjalDeySarkar') // for mac
        displayNext()

    }else if(choices.Selection == 'Academics'){
        console.log('BCA, MCA')
        displayNext()
    }
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function displayNext(){
    inquirer
  .prompt([
    {
        type:'list',
        name: 'goBack',
        choices: ['Back','Exit']
    }
  ])
  .then((choices) => {
    // Use user feedback for... whatever!!
    if(choices.goBack == 'Back'){
        displayDetails()
    }else if(choices.goBack == 'Exit'){
        console.log("Program Exit")
    }
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

displayDetails()