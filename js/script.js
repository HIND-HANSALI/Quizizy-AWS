// stepper JS
let question_count=0;

// const stepperItem = document.querySelector(".stepper__item");
let step2 =document.querySelector(".step-2");



//getting all required elements

let start_btn = document.querySelector(".start_btn");
let info_box = document.querySelector(".info_box");
// const exit_btn = info_box.querySelector(".buttons .quit");
// const continue_btn = info_box.querySelector(".buttons .continue");
let quiz_box = document.querySelector(".quiz_box");
let result_box = document.querySelector(".result_box");

let timeCount=document.querySelector(".timer_sec");



// if startQuiz button clicked

function test(){
    console.log('hhh');
}
// start_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo"); //show info box
//     console.log('hind');
// }

// if continue button is clicked
// continue_btn.onclick = ()=>{
//     info_box.classList.add("activeInfo");
// }
function Continue(){
    console.log('hhh');
   
    // document.getElementById("myDIV").style.display = "none";
    info_box.style.display = "none";
    quiz_box.style.display = "block";
    showQuetions(0);
    counterQuestion(1);
    timerQuiz(15);
    
    step2.classList.add('circle-acitve');

}


// getting questions and options from array
function showQuetions(index){
    let question_text = document.querySelector(".question_text");
    let option_list = document.querySelector(".option_list");
    // counterQuestion(1);

    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';

    let option_tag='<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';

    question_text.innerHTML=question_tag ;
    option_list.innerHTML=option_tag;
    // let option_tag = '<div class="option"><span>'+ questions[0].options[0] +'</span></div>'

//    proooob
    // let option=option_list.querySelectorAll(".option");


    // set onclick attribute to all options
    // for(let i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)");
    // }


}
// if user clicked on option
// function optionSelected(answer){
//     console.log("hiii selected option");
//     let userAnswer = answer.textContent;
//     // let correctAnswer = questions[question_count].answer;//correct answer from array
//     console.log(userAnswer );

// }

// fct if next button clicked
function Next(){
    console.log('nexxxt');
    if(question_count < questions.length - 1){ //if question count is less than total question length
        question_count++; //increment the question_count value
        
    showQuetions(question_count); //calling showQestions function
    counterQuestion(question_count+1);//passing numb of question value to counterQuestion
    clearInterval(counter);
    timerQuiz(15);
    }else{
        console.log("Questions completed");

    }
}







function counterQuestion(index){
    //creating a new span tag and passing the question number and total question
    const total_ques_counter = document.querySelector(".total_question");
   
    let totalQueCounTag = '<p><strong>'+ index +' of '+ questions.length +' </strong> Questions</p>';


    total_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
let counter;
function timerQuiz(time){
    counter=setInterval(timer,1000);
    function timer(){
        timeCount.textContent= time;
        // time--;
    }
}