let logged_in_user = 'alexander';

const u_lengthh = userss.length;
for(let x = 0; x < u_lengthh; x++){
  if(userss[x].username === logged_in_user && userss[x].role === 'student'){
    //Adding ongoing courses to the html
    for(let a = 0; a < userss[x].all_courses[0].ongoing.length; a++){
      let temp_course = userss[x].all_courses[0].ongoing[a];
      document.getElementById('ongoing-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name+'</h4><div style="display:none;"><p>Tempo: '+temp_course.tempo+'</p><p>Description: '+temp_course.description+'</p></div></div>';
    }
    //Adding upcoming courses to the html
    for(let b = 0; b < userss[x].all_courses[1].upcoming.length; b++){
      let temp_course = userss[x].all_courses[1].upcoming[b];
      document.getElementById('upcoming-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name+'</h4><div style="display:none;"><p>Tempo: '+temp_course.tempo+'</p><p>Description: '+temp_course.description+'</p></div></div>';
    }
    //Adding finished courses to the html
    for(let c = 0; c < userss[x].all_courses[2].finished.length; c++){
      let temp_course = userss[x].all_courses[2].finished[c];
      document.getElementById('finished-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name+'</h4><div style="display:none;"><p>Tempo: '+temp_course.tempo+'</p><p>Description: '+temp_course.description+'</p><p>Grade: '+temp_course.grade+'</p></div></div>';
    }
  }
}



//Shows/Hides course content on click
function toggle_course(current){
  if(current.parentElement.childNodes[1].style.display === 'none'){
    current.parentElement.childNodes[1].style.display = 'block';
  }else{
    current.parentElement.childNodes[1].style.display = 'none';
  }
}
