/*
let history =  {
    dailyHistory: dailyArray[],

};*/

let daily = {
    objectHTML: document.getElementById("lectureFeedback"),
    date: "idag",
    lecture: 1,
    website: 1,
    facilities: 1,
    isClicked: 0
};


function inputLectureFeedback(){
    if(daily.lecture < 2){
        daily.lecture++;
    }else{
        daily.lecture = 1;
    }

    console.log("Daily lecture feedback is: ", daily.lecture);
    let feedbackObjectLecture = document.getElementById("lectureFeedback");
    let smileyMouth = document.getElementById("mouth-lecture");

    if(daily.isClicked < 1){
        daily.isClicked = 1;
    }
    if(daily.isClicked == 1){
        let openFeedbackBox = document.getElementById("open-feedback-text");
        openFeedbackBox.style.animation = "close-box 2.0s ease";
        openFeedbackBox.style.backgroundColor = "yellow";
        openFeedbackBox.innerHTML = "SKICKA";
    }

    switch (daily.lecture){
        case 1:
            feedbackObjectLecture.style.animation = "decreaseOpacity 2.0s ease";
            feedbackObjectLecture.style.opacity = "1";
            //smileyMouth.style.translateY ="1vh";
            break;
        case 2:
            feedbackObjectLecture.style.animation = "increaseOpacity 2.0s ease";
            feedbackObjectLecture.style.opacity = "0.7";
            break;
    }
}

function inputWebsiteFeedback(){
    if(daily.website < 2){
        daily.website++;
    }else{
        daily.website = 1;
    }

    console.log("Daily website feedback is: ", daily.website);
    let feedbackObjectLecture = document.getElementById("websiteFeedback");
    let smileyMouth = document.getElementById("mouth-website");

    if(daily.isClicked < 1){
        daily.isClicked = 1;
    }
    if(daily.isClicked == 1){
        let openFeedbackBox = document.getElementById("open-feedback-text");
        openFeedbackBox.style.animation = "close-box 2.0s ease";
        openFeedbackBox.style.backgroundColor = "yellow";
        openFeedbackBox.innerHTML = "SKICKA";
    }

    switch (daily.website){
        case 1:
            feedbackObjectLecture.style.animation = "decreaseOpacity 1.0s ease";
            feedbackObjectLecture.style.opacity = "1";
            //smileyMouth.style.translateY ="1vh";
            break;
        case 2:
            feedbackObjectLecture.style.animation = "increaseOpacity 1.0s ease";
            feedbackObjectLecture.style.opacity = "0.7";
            break;
    }
}
function inputFacilitiesFeedback(){
    if(daily.facilities < 2){
        daily.facilities++;
    }else{
        daily.facilities = 1;
    }

    console.log("Daily facilities feedback is: ", daily.facilities);
    let feedbackObjectLecture = document.getElementById("facilitiesFeedback");
    let smileyMouth = document.getElementById("mouth-facilities");

    if(daily.isClicked < 1){
        daily.isClicked = 1;
    }
    if(daily.isClicked == 1){
        let openFeedbackBox = document.getElementById("open-feedback-text");
        openFeedbackBox.style.animation = "close-box 2.0s ease";
        openFeedbackBox.style.backgroundColor = "yellow";
        openFeedbackBox.innerHTML = "SKICKA";
    }

    switch (daily.facilities){
        case 1:
            feedbackObjectLecture.style.animation = "decreaseOpacity 1.0s ease";
            feedbackObjectLecture.style.opacity = "1";
            //smileyMouth.style.translateY ="1vh";
            break;
        case 2:
            feedbackObjectLecture.style.animation = "increaseOpacity 1.0s ease";
            feedbackObjectLecture.style.opacity = "0.7";
            break;
    }
}

function openFeedback(){
    let feedbackArea = document.getElementById("feedback");
    let openFeedbackBox = document.getElementById("open-feedback-text");

    feedbackArea.style.animation = "slide-in 2.0s ease-in-out";
    feedbackArea.style.transform = "translateX(200px)";
    openFeedbackBox.addEventListener("mouseover", function(){
        openFeedbackBox.style.backgroundColor = "red";
    });
    if(daily.isClicked == 0){
        openFeedbackBox.style.animation = "onclick-color-changeRed 0.2s ease";
        openFeedbackBox.addEventListener("mouseover", function(){
            openFeedbackBox.style.backgroundColor = "#E4EA0B";
        });
        openFeedbackBox.addEventListener("mouseout", function(){
            openFeedbackBox.style.backgroundColor = "yellow";
        });
    }
    if(daily.isClicked == 1){
        openFeedbackBox.style.animation = "onclick-color-changeYellow 0.2s ease";
        daily.isClicked = 2;
        console.log("gulllllish");
    }
    if(daily.isClicked == 2){
        console.log("HEEJ");
        feedbackArea.style.animation = "slide-out 6.0s ease-in";
        feedbackArea.style.transform = "translateX(-60vw)"; 

        openFeedbackBox.style.animation = "feedback-done 2.0s ease-out";
        openFeedbackBox.style.backgroundColor = "green";
        document.getElementById("wednesday41").style.backgroundColor = "green";
    }
}