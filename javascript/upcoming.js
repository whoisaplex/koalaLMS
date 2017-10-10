const u_length = users.length;
for(let x = 0; x < u_length; x++){
	if (users[x].username === logged_in_user && users[x].role === 'student') {
		for(let a = 0; a < users[x].all_upcoming[0].upcoming_exams.length; a++ ){
			let temp_exam = users[x].all_upcoming[0].upcoming_exams[a];
			document.getElementById('exams').innerHTML += '<div class="small-box-li"><h4 onclick="toggle_course(this)" style="cursor:pointer">'+ temp_exam.due_date + " - " + temp_exam.name + '</h4><p>' + temp_exam.description + '</p></div>'
		}
		for(let b = 0; b < users[x].all_upcoming[1].upcoming_assignments.length; b++){
			let temp_assignment = users[x].all_upcoming[1].upcoming_assignments[b];
			document.getElementById('assignments').innerHTML += '<div class="small-box-li"><h4 onclick="toggle_course(this)" style="cursor:pointer">'+ temp_assignment.due_date + " - " + temp_assignment.name + '</h4><p>' + temp_assignment.description + '</p></div>'
		}
	}
}
function toggle_course(current){
  if(current.parentElement.childNodes[1].style.display === 'none'){
    current.parentElement.childNodes[1].style.display = 'block';
  }else{
    current.parentElement.childNodes[1].style.display = 'none';
  }
}
