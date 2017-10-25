const u_length = students.length;
for(let x = 0; x < u_length; x++){
	if (students[x].username === logged_in_user && students[x].role === 'student') {
		for(let a = 0; a < students[x].all_upcoming[0].upcoming_exams.length; a++ ){
			let temp_exam = students[x].all_upcoming[0].upcoming_exams[a];
			document.getElementById('exams').innerHTML += '<h3>'+ temp_exam.due_date + " - " + temp_exam.name + '</h3><p>' + temp_exam.description + '</p>'
		}
		for(let b = 0; b < students[x].all_upcoming[1].upcoming_assignments.length; b++){
			let temp_assignment = students[x].all_upcoming[1].upcoming_assignments[b];
			document.getElementById('assignments').innerHTML += '<h3>'+ temp_assignment.due_date + " - " + temp_assignment.name + '</h3><p>' + temp_assignment.description + '</p>'
		}
	}
}
