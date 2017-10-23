let path = window.location.pathname;
let page = path.split("/").pop();
page = page.replace(/[.].*/, "");
page = page.charAt(0).toUpperCase() + page.slice(1);


console.log(page);
for(let i = 0; i < students.length; i++){
  if(students[i].username === 'alexander'){
  for(let z = 0; z < 1; z++){
      for(let x = 0; x < students[i].all_courses[0].ongoing.length; x++){
        if(students[i].all_courses[0].ongoing[x].name === page){
            document.getElementById('hubba').innerHTML = '<h2>'+students[i].all_courses[0].ongoing[x].name+'</h2><h3>Tempo: '+students[i].all_courses[0].ongoing[x].tempo+' Teacher: '+students[i].all_courses[0].ongoing[x].teacher+'</h3><hr><h4>Description</h4><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><h5><a href="#">Read full description</a></h5>';
        }
      }
      for(let x = 0; x < students[i].all_courses[1].upcoming.length; x++){
        if(students[i].all_courses[1].upcoming[x].name === page){
          document.getElementById('hubba').innerHTML = '<h2>'+students[i].all_courses[1].upcoming[x].name+'</h2><h3>Tempo: '+students[i].all_courses[1].upcoming[x].tempo+' Teacher: '+students[i].all_courses[1].upcoming[x].teacher+'</h3><hr><h4>Description</h4><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><h5><a href="#">Read full description</a></h5>';
        }
      }
    }
  }
}

/*
const u_lengthh = users.length;
for(let x = 0; x < u_lengthh; x++){
  if(users[x].username === logged_in_user && users[x].role === 'student'){
    //Adding ongoing courses to the html
    for(let a = 0; a < users[x].all_courses[0].ongoing.length; a++){
      let temp_course = users[x].all_courses[0].ongoing[a];
      document.getElementById('ongoing-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name+'</h4><div style="display:none;"><p>Tempo: '+temp_course.tempo+'</p><p>Description: '+temp_course.description+'</p></div></div>';
    }
    //Adding upcoming courses to the html
    for(let b = 0; b < users[x].all_courses[1].upcoming.length; b++){
      let temp_course = users[x].all_courses[1].upcoming[b];
      document.getElementById('upcoming-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name+'</h4><div style="display:none;"><p>Tempo: '+temp_course.tempo+'</p><p>Description: '+temp_course.description+'</p></div></div>';
    }
    //Adding finished courses to the html
    for(let c = 0; c < users[x].all_courses[2].finished.length; c++){
      let temp_course = users[x].all_courses[2].finished[c];
      document.getElementById('finished-courses').innerHTML += '<div><h4 onclick="toggle_course(this)" style="cursor:pointer">'+temp_course.name+'</h4><div style="display:none;"><p>Tempo: '+temp_course.tempo+'</p><p>Description: '+temp_course.description+'</p><p>Grade: '+temp_course.grade+'</p></div></div>';
    }
  }
}
*/


//Shows/Hides course content on click
function toggle_course(current){
  if(current.parentElement.childNodes[1].style.display === 'none'){
    current.parentElement.childNodes[1].style.display = 'block';
  }else{
    current.parentElement.childNodes[1].style.display = 'none';
  }
}
