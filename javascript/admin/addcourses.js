let pathCourses = window.location.pathname;
let pageCourses = pathCourses.split("/").pop();
pageCourses = pageCourses.replace(/[.].*/, "");
document.getElementById('teacherCourseName').innerHTML = pageCourses;

updateClass();
document.getElementById('createClassInput').addEventListener('keypress', function(e){
  let key = e.which || e.keyCode;
  if(key === 13){
    if(this.value === ''){

    }else{
      this.style.display = 'none';
      document.getElementById('createClassButton').style.display = 'block';
      document.getElementById('classHolder').innerHTML += '<div class="adminClass"><p><i class="fa fa-users" aria-hidden="true"></i></p><h3>'+this.value+'</h3></div>';
      updateClass();
    }
  }
});


function updateClass(){
  document.getElementById('classSelector').innerHTML = '';
  for(let i = 0; i < document.getElementById('classHolder').children.length; i++){
    document.getElementById('classSelector').innerHTML += '<option>'+document.getElementById('classHolder').children[i].children[1].innerHTML+'</option>'
  }
}

function addStudentClass(current){
  let ClassValue = document.getElementById('classSelector').value;
  current.parentNode.remove();
}

function addClass(current){
  current.style.display = 'none';
  current.parentNode.children[0].style.display = 'block';
}
