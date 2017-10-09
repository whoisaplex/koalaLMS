let loggedInUser = 'Simon';
let users = [{username: 'Simon', password: 'liolios123', full_name: 'Simon Liolios', role: 'student', 
all_upcoming: [{upcoming_exams: [{name: 'Javascript', description: 'Vanilla Javascript', due_date: '2017-12-14'}, {name: 'HTML', description: 'Static websites', due_date: '2018-01-12'}, {name: 'Backend', description: 'Database logic', due_date: '2018-01-30'}, {name: 'Arbetsmetodiker', description: 'Scrum', due_date: '2018-02-14'} ]},
{upcoming_assignments: [{name: 'Javascript', description: 'For loops', due_date: '2017-10-30'}, {name: 'HTML', description: 'HTML5 & CSS3', due_date: '2017-11-06'}, {name: 'Backend', description: 'PHP & MYSQL', due_date: '2017-11-15'}, {name: 'Arbetsmetodiker', description: 'Scrum poker', due_date: '2017-11-27'}]}]}
];

const u_length = users.length;
for(let x = 0; x < u_length; x++){
	if (users[x].username === loggedInUser && users[x].role === 'student') {
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

