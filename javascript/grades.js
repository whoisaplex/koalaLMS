const u_lengthhh = students.length;
for(let x = 0; x < u_lengthhh; x++){
	if(students[x].username === logged_in_user && students[x].role === 'student'){
	   //Adding finished courses to the html
	        for(let c= 0; c < students[x].all_finished_courses.length; c++){
	     let temp_course = students[x].all_finished_courses[c];
	     document.getElementById('finished-coursess').innerHTML += '<div class="grid-style-box courses-box"><h2>'+temp_course.name
	      +'</h2><h3>Avarage grade: '+temp_course.average_grade+' Tempo: '+temp_course.tempo+'</h3><hr><p>Assignment: '+temp_course.assignment1+'</p><p>Grade: '+temp_course.grade1+'</p><p>Assignment: '+temp_course.assignment2+'</p><p>Grade: '+temp_course.grade2+'</p><p>Assignment: '
	      +temp_course.assignment3+'</p><p>Grade: '+temp_course.grade3+'</p></div>';

 	}
}
}
