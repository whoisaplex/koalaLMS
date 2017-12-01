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
    let feedbackObjectFacilities = document.getElementById("facilitiesFeedback");
    let feedbackObjectWebsite = document.getElementById("websiteFeedback");
    let smileyMouth = document.getElementById("mouth-lecture");

    if(daily.isClicked < 1){
        daily.isClicked = 1;
    }/*
    if(daily.isClicked == 1){
        let openFeedbackBox = document.getElementById("open-feedback-text");
        openFeedbackBox.style.animation = "close-box 2.0s ease";
        openFeedbackBox.style.backgroundColor = "yellow";
        openFeedbackBox.innerHTML = "SKICKA";
    }*/

    switch (daily.lecture){
        case 1:
            feedbackObjectLecture.style.backgroundColor = "grey";
            feedbackObjectFacilities.style.backgroundColor = "grey";
            feedbackObjectWebsite.style.backgroundColor = "grey";
            daily.website = 1;
            daily.facilities = 1;
            break;
        case 2:
            feedbackObjectLecture.style.backgroundColor = "red";
            feedbackObjectFacilities.style.backgroundColor = "grey";
            feedbackObjectWebsite.style.backgroundColor = "grey";
            daily.website = 1;
            daily.facilities = 1;
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
    let feedbackObjectLecture = document.getElementById("lectureFeedback");
    let feedbackObjectFacilities = document.getElementById("facilitiesFeedback");
    let feedbackObjectWebsite = document.getElementById("websiteFeedback");
    let smileyMouth = document.getElementById("mouth-website");

    if(daily.isClicked < 1){
        daily.isClicked = 1;
    }/*
    if(daily.isClicked == 1){
        let openFeedbackBox = document.getElementById("open-feedback-text");
        openFeedbackBox.style.animation = "close-box 2.0s ease";
        openFeedbackBox.style.backgroundColor = "yellow";
        openFeedbackBox.innerHTML = "SKICKA";
    }*/

    switch (daily.website){
        case 1:
            feedbackObjectLecture.style.backgroundColor = "grey";
            feedbackObjectFacilities.style.backgroundColor = "grey";
            feedbackObjectWebsite.style.backgroundColor = "grey";
            daily.lecture = 1;
            daily.facilities = 1;
            break;
        case 2:
            feedbackObjectLecture.style.backgroundColor = "grey";
            feedbackObjectFacilities.style.backgroundColor = "grey";
            feedbackObjectWebsite.style.backgroundColor = "yellow";
            daily.lecture = 1;
            daily.facilities = 1;
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
    let feedbackObjectLecture = document.getElementById("lectureFeedback");
    let feedbackObjectFacilities = document.getElementById("facilitiesFeedback");
    let feedbackObjectWebsite = document.getElementById("websiteFeedback");
    let smileyMouth = document.getElementById("mouth-facilities");

    if(daily.isClicked < 1){
        daily.isClicked = 1;
    }/*
    if(daily.isClicked == 1){
        let openFeedbackBox = document.getElementById("open-feedback-text");
        openFeedbackBox.style.animation = "close-box 2.0s ease";
        openFeedbackBox.style.backgroundColor = "yellow";
        openFeedbackBox.innerHTML = "SKICKA";
    }*/

    switch (daily.facilities){
        case 1:
            feedbackObjectLecture.style.backgroundColor = "grey";
            feedbackObjectFacilities.style.backgroundColor = "grey";
            feedbackObjectWebsite.style.backgroundColor = "grey";
            daily.lecture = 1;
            daily.website = 1;
            break;
        case 2:
            feedbackObjectLecture.style.backgroundColor = "grey";
            feedbackObjectFacilities.style.backgroundColor = "green";
            feedbackObjectWebsite.style.backgroundColor = "grey";
            daily.lecture = 1;
            daily.website = 1;
            break;
    }
}
function openDailyDropdown(){
    let darkOverlay = document.getElementById("evaluation-dark-overlay");
    let dailyDropdown = document.getElementById("daily-evaluation-dropdown");

    //show daily dropdown evaluation
    darkOverlay.style.display = "block";
    dailyDropdown.style.display = "block";
}
function closeDailyDropdown(){
    let darkOverlay = document.getElementById("evaluation-dark-overlay");
    let dailyDropdown = document.getElementById("daily-evaluation-dropdown");
    let wednesday41 = document.getElementById("wednesday41");
    if(daily.isClicked === 1){
        wednesday41.style.backgroundColor = "green";
        wednesday41.style.pointerEvents = "none";
        //show daily dropdown evaluation
        darkOverlay.style.display = "none";
        dailyDropdown.style.display = "none";
    }
    else{
        let dailyDropownError = document.getElementById("evaluation-dropdown-error");
        dailyDropownError.style.display = "grid";
    }
}
function crossCloseDailyDropdown(){
    let darkOverlay = document.getElementById("evaluation-dark-overlay");
    let dailyDropdown = document.getElementById("daily-evaluation-dropdown");
    let dailyDropownError = document.getElementById("evaluation-dropdown-error");

    //show daily dropdown evaluation
    darkOverlay.style.display = "none";
    dailyDropdown.style.display = "none";
    dailyDropownError.style.display = "none";
}