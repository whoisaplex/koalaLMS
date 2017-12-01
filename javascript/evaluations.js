let allEvaluations = [];

let weekly = {
	isDone: false
};
let coursess = {
	listCourses: []
};

function makeWeeklyEvaluation() {
	if (weekly.isDone == false) {
		const circleArray = document.getElementsByClassName("evaluate-scale-circle");
		for (let i = 0; i < circleArray.length; i++) {
			circleArray[i].style.backgroundColor = "grey";
		}
		let formFill = document.getElementById("weekly-form-fill");
		let formName = document.getElementById("form-title-week");
		formName.textContent = "Evaluation week 41";
		formFill.style.visibility = "visible";
		formFill.style.animation = "slide-down-formFill 2.0s ease";
		formFill.style.transform = "translateY(0)";
	}
}

function finishWeeklyForm() {
	if (weekly.isDone == false) {
		let formFill = document.getElementById("weekly-form-fill");
		let week41 = document.getElementById("week41");

		week41.style.backgroundColor = "green";
		formFill.style.animation = "slide-up-formFill 1.0s ease";
		formFill.style.transform = "translateY(-65vh)";
		setTimeout(function x() {
			formFill.style.visibility = "hidden";
		}, 1000);

		weekly.isDone = true;
	}
}

function makeCourseEvaluation(isClick) {
	if (isClick == false) {
		const circleArray = document.getElementsByClassName("evaluate-scale-circle");
		for (let i = 0; i < circleArray.length; i++) {
			circleArray[i].style.backgroundColor = "grey";
		}

		//reset the form before making new one.
		document.getElementById("course-lecture-feedback").value = "";
		document.getElementById("course-communication-feedback").value = "";
		document.getElementById("course-goodBad-feedback").value = "";

		//show the form for the user.
		let formFill = document.getElementById("course-form-fill");
		formFill.style.visibility = "visible";
		formFill.style.animation = "slide-down-formFill 2.0s ease";
		formFill.style.transform = "translateY(0)";
		isClick = true;
	}
}

function finishCourseForm(courseObject) {
	if (courseObject.isClickable == false) {
		let formFill = document.getElementById("course-form-fill");
		let formOpenButton = document.getElementById(courseObject.id);
		let formName = document.getElementById("form-title");
		formName.textContent = "Evaluation " + courseObject.name;

		let buttonID = formOpenButton.id;
		courseObject.isClickable = true;
		formOpenButton.style.backgroundColor = "green";
	}
}

function sendGreenButton() {
	let formFill = document.getElementById("course-form-fill");
	formFill.style.animation = "slide-up-formFill 1.0s ease";
	formFill.style.transform = "translateY(-65vh)";
	setTimeout(function x() {
		formFill.style.visibility = "hidden";
	}, 1000);
}

let courseEvaluations = document.getElementById("course-evaluations");

//console.log(evaluateCourse.id);
for (let i = 0; i < students[0].all_courses[2].finished.length; i++) {
	let newCourseInfo = new Object();
	newCourseInfo.id = "course" + i;
	newCourseInfo.name = students[0].all_courses[2].finished[i].name;
	newCourseInfo.isClickable = false;

	coursess.listCourses += newCourseInfo;

	let evaluateCourse = document.createElement("div");
	evaluateCourse.id = "course" + i;
	evaluateCourse.className = "courseEvaluation";
	evaluateCourse.innerHTML = students[0].all_courses[2].finished[i].name;
	evaluateCourse.addEventListener("click", function() {
		makeCourseEvaluation(newCourseInfo.isClickable);
	});
	evaluateCourse.addEventListener("click", function() {
		finishCourseForm(newCourseInfo);
	});
	document.getElementById("send-form-fill-course").addEventListener("click", function() {
		sendGreenButton(newCourseInfo.name);
	});
	document.getElementById("send-form-fill-course-two").addEventListener("click", function() {
		sendGreenButton(newCourseInfo.name);
	});
	courseEvaluations.appendChild(evaluateCourse);
}

function evaluateCircle(circle) {
	const circleArray = document.getElementsByClassName("evaluate-scale-circle");

	switch (circle.id) {
		case "evaluate-scale-circle-1":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-1")
					circleArray[i].style.backgroundColor = "#FF0C00";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-2":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-2")
					circleArray[i].style.backgroundColor = "#E8700C";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-3":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-3")
					circleArray[i].style.backgroundColor = "#FFC700";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-4":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-4")
					circleArray[i].style.backgroundColor = "#B6E800";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-5":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-5")
					circleArray[i].style.backgroundColor = "#11FF37";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-week-1":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-week-1")
					circleArray[i].style.backgroundColor = "#FF0C00";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-week-2":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-week-2")
					circleArray[i].style.backgroundColor = "#E8700C";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-week-3":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-week-3")
					circleArray[i].style.backgroundColor = "#FFC700";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-week-4":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-week-4")
					circleArray[i].style.backgroundColor = "#B6E800";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
		case "evaluate-scale-circle-week-5":
			for (let i = 0; i < circleArray.length; i++) {
				if (circleArray[i].id == "evaluate-scale-circle-week-5")
					circleArray[i].style.backgroundColor = "#11FF37";
				else
					circleArray[i].style.backgroundColor = "grey";
			}
			break;
	}
}