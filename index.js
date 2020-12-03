const realine_sync= require('readline-sync');
const chalk = require('chalk');

/**
 * Quiz On Indian cricket.
 */
console.log(chalk.bgBlue("\nWelcome to cricket Quiz\n"))
console.log(chalk.red("\nPress ^C to Exit"))
function quiz(question,n){

    /**
     * Inputs And Decorators
     */
    var qno = n+1;
    var random = Math.floor((Math.random() * 3) + 0);
    console.log(chalk.magenta("______________________________________________"))
  
    console.log(chalk.blue("Q"+ qno +". " +question.que + "  "));
    // Random Arrangement Of Ans.
    var formArr=[];

    if(random === 1){
        formArr[0]=question.right
        formArr[1]=question.wrong2
        formArr[2]=question.wrong3
        formArr[3]=question.wrong1
    }
    else if (random === 2){
            formArr[0]=question.wrong2
            formArr[1]=question.right
            formArr[2]=question.wrong3
            formArr[3]=question.wrong1
        }
    else if (random===3){
        formArr[0]=question.wrong2
        formArr[1]=question.wrong3
        formArr[2]=question.right
        formArr[3]=question.wrong1
        }
    else{
        formArr[0]=question.wrong2
        formArr[1]=question.wrong3
        formArr[2]=question.wrong1
        formArr[3]=question.right  
        }    

    
    
    for(var i=0 ;i<4;i++){
        console.log(i + " " +chalk.green(formArr[i]));
    }
    /**
     * Input
     */
    var ans = realine_sync.question("Choose The Correct Option : ");
    // Decision
    if(formArr[ans] === questions_ans[n].right){
        console.log(chalk.bgGreen("\nRight Answer ") + "\nCurrent Score : " +chalk.red(++score) +"\n" );
    }
    else{
        console.log(chalk.bgRed("\nWrong Answer \n"));
    }
}

//  Created Score Card 

Highest_score=[
    {
        Name:"Abhishek",
        score:"5"
    }
]

var score=0;

questions_ans=[
    {
        que:"who all are part of INDIA SQUAD?",
        wrong1:"Rohit and Bhuvi",
        wrong2:"Pant, ishan, and surya .",
        wrong3:"Indian team is weakest ?",
        right:"kl,Iyer,Manish,Shikar,Deepak."
    },
    {
        que:"How many runs completed by Cpt Virat In Int odi?",
        wrong1:"11000",
        wrong2:"10000 ",
        wrong3:"11520*",
        right:"12040"
    }
    ,
    {
        que:"Jadeja and Pandya recorded the Highest ever 6th wicket partnership in Indo-Aussies Odis in the 3rd match how many runs did they add together ?",
        wrong1:"160",
        wrong2:"158",
        wrong3:"170",
        right:"150",
    },
    {
        que:"Who dismissed Virat in all three match?",
        wrong1:"Mitchell starc",
        wrong2:"Adam zumpa.",
        wrong3:"Pat cummins",
        right:"Josh Hazlewood"
    }
    ,
    {
        que:"Who scored the most runs in the last test  played? ",
        wrong1:"T Head",
        wrong2:"V Kohli",
        wrong3:"U Kawaja",
        right:"Cheteshwar Pujra."
    }
];

for(var i=0 ;i<5;i++){
    n=i;
    quiz(questions_ans[i],n);
}
if (score >= Highest_score[0].score){
    console.log(chalk.magenta("New Highest Score : " + Highest_score[0].score))    
}
else{
    console.log(chalk.magenta("Total Highest Score : " + Highest_score[0].score))
    console.log(chalk.magenta("Your Highest Score : " + score))
}
