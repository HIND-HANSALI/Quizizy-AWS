//getting all required elements

const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
// const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");

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
    // counterQuestion(1);


}
let question_count=0;

// getting questions and options from array
function showQuetions(index){
    const question_text = document.querySelector(".question_text");
    const option = document.querySelector(".option_list");
    // counterQuestion(1);

    let question_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';

    let option_tag='<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    question_text.innerHTML=question_tag ;
    option.innerHTML=option_tag;
    // let option_tag = '<div class="option"><span>'+ questions[0].options[0] +'</span></div>'

    const next_btn = document.querySelector("footer .next_btn");

}
// fct if next button clicked
function Next(){
    console.log('nexxxt');
    if(question_count < questions.length - 1){ //if question count is less than total question length
        question_count++; //increment the question_count value
        counterQuestion(question_count+1);//passing numb of question value to counterQuestion
       
        
        showQuetions(question_count); //calling showQestions function
    }else{
        console.log("Questions completed");

    }
}
function counterQuestion(index){
    //creating a new span tag and passing the question number and total question
    const bottom_ques_counter = document.querySelector(".total_question");
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}