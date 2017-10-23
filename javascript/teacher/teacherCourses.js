let pathCourses = window.location.pathname;
let pageCourses = path.split("/").pop();
pageCourses = pageCourses.replace(/[.].*/, "");
document.getElementById('teacherCourseName').innerHTML = pageCourses;
for(let x = 0; x < teachers.length; x++){
  for(let z = 0; z < teachers[x].courses.length; z++){
    if(teachers[x].courses[z].name === pageCourses){
      for(let y = 0; y < teachers[x].courses[z].assignments.length; y++){
        document.getElementById('teacherAssignmentsBox').innerHTML += '<div><p class="teacherAssignmentName">'+teachers[x].courses[z].assignments[y].name+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div>';
      }
      for(let y = 0; y < teachers[x].courses[z].examinations.length; y++){
        document.getElementById('teacherExaminationsBox').innerHTML += '<div><p class="teacherAssignmentName">'+teachers[x].courses[z].examinations[y].name+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div>';
      }
    }
  }
}




function editAssignment(currentAssignment){
  currentAssignment.parentNode.childNodes[0].innerHTML = 'HTML5';
}
function deleteAssignment(currentAssignment){
  document.getElementById('teacher-dark-overlay').style.display = 'block';
  document.getElementById('teacher-delete-dropdown').style.display = 'block';
  document.getElementById('delete').addEventListener("click", function(){
    currentAssignment.parentNode.remove();
    document.getElementById('teacher-dark-overlay').style.display = 'none';
    document.getElementById('teacher-delete-dropdown').style.display = 'none';
  });
  document.getElementById('cancel').addEventListener("click", function(){
    document.getElementById('teacher-dark-overlay').style.display = 'none';
    document.getElementById('teacher-delete-dropdown').style.display = 'none';
  });
}

function addAssignment(){
  document.getElementById('teacher-dark-overlay').style.display = 'block';
  document.getElementById('teacher-assignment-dropdown').style.display = 'block';
}
function closeAssignmentBox(){
  document.getElementById('teacher-dark-overlay').style.display = 'none';
  document.getElementById('teacher-assignment-dropdown').style.display = 'none';
  document.getElementById('assignment-dropdown-error').style.display = 'none';
}
function addAssignmentConfirm(){
  if(document.getElementById('addAssignmentTitle').value != ''){
    document.getElementById('teacherAssignmentsBox').innerHTML += '<div><p class="teacherAssignmentName">'+document.getElementById('addAssignmentTitle').value+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div>';
    document.getElementById('addAssignmentTitle').value = '';
    closeAssignmentBox();
  }else{
    document.getElementById('assignment-dropdown-error').style.display = 'grid';
  }
}

function addExamination(){
  document.getElementById('teacher-dark-overlay').style.display = 'block';
  document.getElementById('teacher-examination-dropdown').style.display = 'block';
}
function closeExaminationBox(){
  document.getElementById('teacher-dark-overlay').style.display = 'none';
  document.getElementById('teacher-examination-dropdown').style.display = 'none';
  document.getElementById('examination-dropdown-error').style.display = 'none';
}
function addExaminationConfirm(){
  if(document.getElementById('addExaminationTitle').value != ''){
    document.getElementById('teacherExaminationsBox').innerHTML += '<div><p class="teacherAssignmentName">'+document.getElementById('addExaminationTitle').value+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div>';
    document.getElementById('addExaminationTitle').value = '';
    closeExaminationBox();
  }else{
    document.getElementById('examination-dropdown-error').style.display = 'grid';
  }
}
