//Question 1
function Q1Yes() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
    document.getElementById("question2").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question2").style.opacity = "1";
}
function Q1No() {
    document.getElementById("question1").style.display = "none";
    document.getElementById("result5").style.display = "block";
    document.getElementById("result5").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result5").style.opacity = "1";
}
//Question 2 - Answer 1
function Q2A1Yes() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("result1").style.display = "block";
    document.getElementById("result1").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result1").style.opacity = "1";
}
//Question 2 - Answer 2
function Q2A2Yes() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "block";
    document.getElementById("question3").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question3").style.opacity = "1";
}
//Question 2 - Answer 3
function Q2A3Yes() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("result2").style.display = "block";
    document.getElementById("result2").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result2").style.opacity = "1";
}
//Question 3 - Answer 1
function Q3A1Yes() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "block";
    document.getElementById("question4").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question4").style.opacity = "1";
}
//Question 3 - Answer 2
function Q3A2Yes() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("result3").style.display = "block";
    document.getElementById("result3").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result3").style.opacity = "1";
}
//Question 4
function Q4Yes() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("result6").style.display = "block";
    document.getElementById("result6").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result6").style.opacity = "1";
}
function Q4No() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "block";
    document.getElementById("question5").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question5").style.opacity = "1";
}
//Question 5
function Q5Yes() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("result4").style.display = "block";
    document.getElementById("result4").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result4").style.opacity = "1";
}
function Q5No() {
    document.getElementById("question5").style.display = "none";
    document.getElementById("result7").style.display = "block";
    document.getElementById("result7").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("result7").style.opacity = "1";
}
//Back To Question 1
function BQ1() {
    document.getElementById("question2").style.display = "none";
    document.getElementById("result5").style.display = "none";    
    document.getElementById("question1").style.display = "block";
    document.getElementById("question1").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question1").style.opacity = "1";
}
//Back To Question 2
function BQ2() {
    document.getElementById("question3").style.display = "none";
    document.getElementById("result1").style.display = "none"; 
    document.getElementById("result2").style.display = "none";     
    document.getElementById("question2").style.display = "block";
    document.getElementById("question2").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question2").style.opacity = "1";
}
//Back To Question 3
function BQ3() {
    document.getElementById("question4").style.display = "none";
    document.getElementById("result3").style.display = "none";    
    document.getElementById("question3").style.display = "block";
    document.getElementById("question3").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question3").style.opacity = "1";
}
//Back To Question 4
function BQ4() {
    document.getElementById("result4").style.display = "none";  
    document.getElementById("result6").style.display = "none";
    document.getElementById("question5").style.display = "none";    
    document.getElementById("question4").style.display = "block";
    document.getElementById("question4").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question4").style.opacity = "1";
}
//Back To Question 5
function BQ5() {
    document.getElementById("result4").style.display = "none";  
    document.getElementById("result7").style.display = "none";   
    document.getElementById("question5").style.display = "block";
    document.getElementById("question5").style.WebkitTransition = 'opacity 3s ease-in-out';
    document.getElementById("question5").style.opacity = "1";
}
