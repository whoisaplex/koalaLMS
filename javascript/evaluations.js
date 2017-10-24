
let allEvaluations = [];

let weekly = {
    isDone: false
};
let courses = {
    listCourses: []
};

function makeWeeklyEvaluation(){
    if(weekly.isDone == false){
        let formFill = document.getElementById("weekly-form-fill");
        let formName = document.getElementById("form-title-week");
        formName.textContent = "Utvärdering V.41";
        formFill.style.visibility = "visible";
        formFill.style.animation = "slide-down-formFill 2.0s ease";
        formFill.style.transform = "translateY(0)";
    }
}

function finishWeeklyForm(){
    if(weekly.isDone == false){
        let formFill = document.getElementById("weekly-form-fill");
        let week41 = document.getElementById("week41");
        
        week41.style.backgroundColor = "green";
        formFill.style.animation = "slide-up-formFill 1.0s ease";
        formFill.style.transform = "translateY(-65vh)";
        setTimeout(function x() { formFill.style.visibility = "hidden";} ,1000);
        
        weekly.isDone = true;
    }
}
function makeCourseEvaluation(isClick){
    if(isClick == false){
        let formFill = document.getElementById("course-form-fill");
        formFill.style.visibility = "visible";
        formFill.style.animation = "slide-down-formFill 2.0s ease";
        formFill.style.transform = "translateY(0)";
        isClick = true;
    }
}

function finishCourseForm(courseObject){
    console.log("finishCourseForm " + courseObject);
    if(courseObject.isClickable == false){
        let formFill = document.getElementById("course-form-fill");
        let formOpenButton = document.getElementById(courseObject.id);
        let formName = document.getElementById("form-title");
        formName.textContent = "Utvärdering " + courseObject.name;

        let buttonID = formOpenButton.id;
        courseObject.isClickable = true;
        console.log(buttonID);
        formOpenButton.style.backgroundColor = "green";
    }
}
function sendGreenButton(){
    let formFill = document.getElementById("course-form-fill");
    formFill.style.animation = "slide-up-formFill 1.0s ease";
    formFill.style.transform = "translateY(-65vh)";
    setTimeout(function x() { formFill.style.visibility = "hidden";} ,1000);
    console.log("sendGreenButton");
}

let courseEvaluations = document.getElementById("course-evaluations");

//console.log(evaluateCourse.id);
for(let i=0; i < students[0].all_courses[2].finished.length; i++){
    let newCourseInfo = new Object();
    newCourseInfo.id = "course"+i;
    newCourseInfo.name = students[0].all_courses[2].finished[i].name;
    newCourseInfo.isClickable = false;

    courses.listCourses += newCourseInfo;

    console.log(newCourseInfo);
    let evaluateCourse = document.createElement("div");
    evaluateCourse.id = "course"+i;
    evaluateCourse.className = "courseEvaluation";
    evaluateCourse.innerHTML = students[0].all_courses[2].finished[i].name;
    evaluateCourse.addEventListener("click", function () {makeCourseEvaluation(newCourseInfo.isClickable); });
    evaluateCourse.addEventListener("click", function() { finishCourseForm(newCourseInfo); });
    document.getElementById("send-form-fill-course").addEventListener("click", function() { sendGreenButton(newCourseInfo.name); });
    courseEvaluations.appendChild(evaluateCourse);
    //courseEvaluations.innerHTML += '<div className="courseEvaluation"><h4>Hej</h4></div>';
    console.log("For loopen");
}
//komma åt alla kurser i databasen
console.log(students[0].all_courses[2].finished.length);
