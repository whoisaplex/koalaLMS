let loggedinUser = 'alexander';
const u_lengthhh = users.length;
for(let x = 0; x < u_lengthhh; x++){
    console.log(users[x].all_finished_courses);
if(users[x].username === loggedinUser && users[x].role === 'student'){
   //Adding finished courses to the html
        for(let c= 0; c < users[x].all_finished_courses[0].finished_courses.length; c++){
     let temp_course = users[x].all_finished_courses[0].finished_courses[c];
     document.getElementById('finished-coursess').innerHTML += '<div><h4>'+temp_course.name
      +'</h4><div><p>Avarage grade: '+temp_course.average_grade+'</p><p>Tempo: '+temp_course.tempo+'</p><p>Assignment1: '+temp_course.assignment1+'</p><p>Grade: '+temp_course.grade1+'</p><p>Assignment2: '+temp_course.assignment2+'</p><p>Grade: '+temp_course.grade2+'</p><p>Assignment3: '
      +temp_course.assignment3+'</p><p>Grade: '+temp_course.grade3+'</p></div></div>';
   }
 }
}