let path = window.location.pathname;
let page = path.split("/").pop();
page = page.replace(/[.].*/, "");
page = page.charAt(0).toUpperCase() + page.slice(1);

//Display Courses information
for(let i = 0; i < students.length; i++){
  if(students[i].username === window.sessionStorage.getItem('userName')){
  for(let z = 0; z < 1; z++){
      for(let x = 0; x < students[i].all_courses[0].ongoing.length; x++){
        if(students[i].all_courses[0].ongoing[x].name === page){
            document.getElementById('courseBox').innerHTML = '<h2 class="course-box-courseText">'+students[i].all_courses[0].ongoing[x].name+'</h2><h3 class="course-box-courseTeacher">Teacher: '+students[i].all_courses[0].ongoing[x].teacher+'</h3><hr>'+students[i].all_courses[0].ongoing[x].description+'<h5><a href="#">Read full description</a></h5>';
        }
      }
      for(let x = 0; x < students[i].all_courses[1].upcoming.length; x++){
        if(students[i].all_courses[1].upcoming[x].name === page){
          document.getElementById('courseBox').innerHTML = '<h2 class="course-box-courseText">'+students[i].all_courses[1].upcoming[x].name+'</h2><h3 class="course-box-courseTeacher">Teacher: '+students[i].all_courses[1].upcoming[x].teacher+'</h3><hr>'+students[i].all_courses[1].upcoming[x].description+'<h5><a href="#">Read full description</a></h5>';
        }
      }
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
