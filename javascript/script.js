
// Getting Current Full Year in the footer section //

let year = new Date();
let updateYear = year.getFullYear();
document.getElementById("year").innerHTML = updateYear;

// Questions, options and correct options array inside which different object exists based on indexing //

let questionsdetails = [

    {Question : "HTML Stands For?", a:"Hyper Tool Text Language", b:"Hyper Text Markup Language", c:"Hyper Text Typing Language", d:"Hyperlinks Text Makeup Language", correct: "b"},
    {Question : "The Web is based on?", a:"Information", b:"Images", c:"Text", d:"HTML", correct: "d"},
    {Question : "CSS in web-development is used for?", a:"Changing Text", b:"DOM Changes", c:"BOM Changes", d:"Styling", correct: "d"},
    {Question : "2+3 = ", a:"5", b:"9", c:"6", d:"11", correct: "a"},
    {Question : "8/2 = ", a:"5", b:"4", c:"9", d:"7", correct: "b"},
    {Question : "React is a?", a:"Library", b:"Language", c:"Framework", d:"Both a and c", correct: "d"},
    {Question : "5+8 = ", a:"17", b:"15", c:"12", d:"13", correct: "d"},
    {Question : "11+40 = ", a:"61", b:"57", c:"51", d:"18", correct: "c"},
    {Question : "50-37 = ", a:"17", b:"15", c:"12", d:"13", correct: "d"},
    {Question : "5x15 = ", a:"65", b:"75", c:"80", d:"60", correct: "b"},
    {Question : "5x10 = ", a:"30", b:"40", c:"50", d:"60", correct: "c"},

]

// Start view of online exam page (Instructions) //

document.getElementById("answers").style.display = "none";
document.getElementById("quesdiv").style.display = "none";
document.getElementById("timeheaddiv").style.display = "none";
document.getElementById("result").style.display = "none";

// Global Scope Variables //

let z = 0;
let questionn0 = 1;
let index = 0;
let time = 60;
let question;
let checked;
let valofchecked;
let attemptedQuestion = 0;
let result = 0;
let wrong = 0;
let score = 0;
document.getElementById("timeremain").innerHTML = time;
let length = questionsdetails.length;

// Start Quiz Button Functionality After Reading Instructions //

const startquiz = () => {

    document.getElementById("startbtn").style.display = "none"; 
    document.getElementById("timeheaddiv").style.display = "block";
    document.getElementById("instruction").style.display = "none";
    document.getElementById("quesdiv").style.display = "block";
    start();
    setTimer();

}

// Function for uploading questions //

function start () {

    if (index == length-1){
        resetchecks();
        document.getElementById("nxtbtn").value = "Submit";
        question = questionsdetails[index];
        document.getElementById("questionno").innerHTML = questionn0;
        document.getElementById("question").innerHTML = question.Question;
        document.getElementById("opt1").innerHTML = question.a;
        document.getElementById("opt2").innerHTML = question.b;
        document.getElementById("opt3").innerHTML = question.c;
        document.getElementById("opt4").innerHTML = question.d;
    }

    else if (index == 0){
        resetchecks();
        document.getElementById("prebtn").setAttribute("disabled","");
        document.getElementById("prebtn").style.backgroundColor = "gray";
        document.getElementById("nxtbtn").style.backgroundColor = "#34495e";
        question = questionsdetails[index];
        document.getElementById("questionno").innerHTML = questionn0;
        document.getElementById("question").innerHTML = question.Question;
        document.getElementById("opt1").innerHTML = question.a;
        document.getElementById("opt2").innerHTML = question.b;
        document.getElementById("opt3").innerHTML = question.c;
        document.getElementById("opt4").innerHTML = question.d;
    }

    else {
        resetchecks();
        document.getElementById("prebtn").removeAttribute("disabled");
        document.getElementById("prebtn").style.backgroundColor = "#34495e";
        document.getElementById("nxtbtn").value = "Next";
        question = questionsdetails[index];
        document.getElementById("questionno").innerHTML = questionn0;
        document.getElementById("question").innerHTML = question.Question;
        document.getElementById("opt1").innerHTML = question.a;
        document.getElementById("opt2").innerHTML = question.b;
        document.getElementById("opt3").innerHTML = question.c;
        document.getElementById("opt4").innerHTML = question.d;
    }

} 

// Get value of marked radio button for calculating result functionality //

function getresult () {

    let getInputFields = document.getElementsByClassName("inputcom");
    let converttoArr = Array.from(getInputFields);
    converttoArr.forEach(function(input){
        checked = input.checked;

        if(checked){

            valofchecked = input.value;
            attemptedQuestion = attemptedQuestion + 1; 
            return;

        }

    });

}

// Calculate Result (Correct, Wrong and Marks) Function //

function showresult () {

    question = questionsdetails[index];
    if (valofchecked == question.correct){

        checked = true;
        result += 1;
        score += 5;
        valofchecked = '';
        return;

    }

    else {

        checked = false;

    }

    if (checked == false){

       wrong += 1;
       return;
    }

    else{

        wrong += 1;

    }

}

// Reset Radio Button Checks For Next Question Function //

function resetchecks () {

        let getInputFields = document.getElementsByClassName("inputcom");
        let converttoArr = Array.from(getInputFields);
        converttoArr.forEach(function(input){
           input.checked = false;
        });

}

// Result Page 

function resultpg () {

    time = 0;
    document.getElementById("quesdiv").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("resulttotalmarks").innerHTML = 5*length;
    document.getElementById("resulttotalquestion").innerHTML = length;
    document.getElementById("resultattempt").innerHTML = attemptedQuestion;
    document.getElementById("resultcorrect").innerHTML = result;
    document.getElementById("resultwrong").innerHTML = wrong;
    document.getElementById("resultmarksget").innerHTML = score;
    document.getElementById("resultmarkstotal").innerHTML = 5*length;

}

// Move Next Button Functionality //

const movenext = () => {

    getresult();
    showresult();
    time = 60;
    questionn0 = questionn0 + 1;
    index = index + 1;

    if (index == length){

        time = 0;
        resultpg();

    }
    console.log(attemptedQuestion);
    console.log(result);
    console.log(wrong);
    console.log(checked);

    start();

}

// Move Previous Button Functionality //
 
const moveprevious = () => {

    questionn0 = questionn0 - 1;

    if (attemptedQuestion == 0 && index == 1){

        attemptedQuestion = 0;
    }

    else if (attemptedQuestion == 0){

        attemptedQuestion = 0;

    }

    else{

    attemptedQuestion -= 1;

    }

    if (checked == true){

        result -= 1;
        score -= 5;
    }

    else {
        
        wrong -= 1;
    
    }

    console.log(attemptedQuestion);
    console.log(result);
    console.log(wrong);
    console.log(checked);
    index = index - 1;
    start();

}

// Timer Control Function //

function setTimer () {

    let c = setInterval(function (){
        
        if (index == length && time == 0) {
            getresult();
            showresult();
            resultpg();
            clearInterval(c);
            return;

        }

        if (index == length - 1 && time == 0) {

            getresult();
            showresult();
            resultpg();
            clearInterval(c);
            return;

        }

        else if (time == 0){

            getresult();
            showresult();
            console.log (attemptedQuestion);
            console.log (result);
            console.log (wrong);
            console.log (checked);
            questionn0 = questionn0 + 1;
            index = index + 1;
            time = 60;
            start ();
            return;

        }

        else{

        time = time - 1;
        document.getElementById("timeremain").innerHTML = time;

        }

    },1000);

}

// Show Correct Answers Button Functionality

let txt;

const correctans = () => {

    document.getElementById("decresult").style.display = "none";
    document.getElementById("correctansbtn").style.display = "none";
    document.getElementById("answers").style.display = "block";

    for (let v=0; v<length ; v++){

        console.log(v);
        let qu = questionsdetails[v];
        txt = v + 1 + " " + ":" + " " + "Option" + " " + "'" + qu.correct+ "'" + "<br>";
        document.getElementById("ansshow").innerHTML += txt;

    }

}


