let loggedinUser = 'alexander';
const u_lengthhh = students.length;
for(let x = 0; x < u_lengthhh; x++){
    //console.log(students[x].all_finished_courses);
if(students[x].username === loggedinUser && students[x].role === 'students'){
   //Adding finished courses to the html
        for(let c= 0; c < students[x].all_finished_courses.length; c++){
     let temp_course = students[x].all_finished_courses[c];
     document.getElementById('finished-coursess').innerHTML += '<h2>'+temp_course.name
      +'</h2><h3>Avarage grade: '+temp_course.average_grade+'<p>Tempo: '+temp_course.tempo+'</p></h3><hr><p>Assignment: '+temp_course.assignment1+'</p><p>Grade: '+temp_course.grade1+'</p><p>Assignment: '+temp_course.assignment2+'</p><p>Grade: '+temp_course.grade2+'</p><p>Assignment: '
      +temp_course.assignment3+'</p><p>Grade: '+temp_course.grade3+'</p>';
   }
 }
}