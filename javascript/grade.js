let logged_in_user = 'masud';
let finished_courses = [{finished: [{name: 'Java', assignment: 'Made a project using Java', tempo: '100%', grade: 'A'}, 
			{name: 'C++', assignment: 'Made a project using C++', tempo: '100%', grade: "B"}]}]
let users = [{username: 'masud', password: 'hasan123', full_name: 'Masudul Hasan', role: 'student',
			all_courses: finished_courses}];
//const u_length = users.length;
for(let x = 0; x < users.length; x++){
if(users[x].username === logged_in_user && users[x].role === 'student'){
    //Adding finished courses to the html
		for(let c= 0; c < users[x].all_courses[0].finished.length; c++){
      let temp_course = users[x].all_courses[0].finished[c];
      document.getElementById('finished-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name
	  +'</h4><div><p>Tempo: '+temp_course.tempo+'</p><p>Assignment: '+temp_course.assignment+'</p><p>Grade: '+temp_course.grade
	  +'</p></div></div>';
    }
  }
}
//Shows course content on click
function toggle_course(current){
  if(current.parentElement.childNodes[1].style.display === 'none'){
    current.parentElement.childNodes[1].style.display = 'block';
  }else{
    current.parentElement.childNodes[1].style.display = 'none';
  }
}
