let logged_in_user = 'alexander';
let userss = [{username: 'alexander', password: 'dahlberg123', full_name: 'Alexander Dahlberg', role: 'student',
 all_courses: [{ongoing: [{name: 'HTML', description: 'This is the HTML description', tempo: '100%'}, {name: 'CSS', description: 'This is the CSS description', tempo: '50%'}, {name: 'Javascript', description: 'This is the Javascript description', tempo: '100%'}]},
 {upcoming: [{name: 'Swedish', description: 'This is the Swedish description', tempo: '30%'}, {name: 'English', description: 'This is the English description', tempo: '100%'}]},
 {finished: [{name: 'Java', description: 'This is the Java description', tempo: '100%', grade: 'A'}, {name: 'C++', description: 'This is the C++ description', tempo: '100%', grade: 'C'}]}]}
];
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



//Shows course content on click
function toggle_course(current){
  if(current.parentElement.childNodes[1].style.display === 'none'){
    current.parentElement.childNodes[1].style.display = 'block';
  }else{
    current.parentElement.childNodes[1].style.display = 'none';
  }
}
