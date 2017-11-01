let pathCourses = window.location.pathname;
let pageCourses = path.split("/").pop();
pageCourses = pageCourses.replace(/[.].*/, "");
document.getElementById('teacherCourseName').innerHTML = pageCourses;
document.getElementById('teacherAddGroup').addEventListener('keypress', function(e){
  let key = e.which || e.keyCode;
  if(key === 13){
    let divTemp = document.createElement('div');
    divTemp.className = 'teacherStudentGroup';
    divTemp.innerHTML = '<p>'+this.value+'</p><p  onclick="removeGroup(this)"><i class="fa fa-trash-o trashColor" aria-hidden="true"></i></p>';
    document.getElementById('groupHolder').append(divTemp);
    this.value = '';
    this.style.display = 'none';
    document.getElementById('teacherButtonAdd').style.display = 'block';
  }
});

for(let x = 0; x < teachers.length; x++){
  for(let z = 0; z < teachers[x].courses.length; z++){
    if(teachers[x].courses[z].name === pageCourses){
      for(let y = 0; y < teachers[x].courses[z].assignments.length; y++){
        document.getElementById('teacherAssignmentsBox').innerHTML += '<div><div><p class="teacherAssignmentName" onclick="toggleAssignments(this)">'+teachers[x].courses[z].assignments[y].name+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div><div style="display:none" id="assignments'+y+'"></div></div>';
        for(let y2 = 0; y2 < teachers[x].courses[z].assignments[y].files.length; y2++){
          let tempDiv = document.createElement('div');
          tempDiv.innerHTML = '<p class="teacherAssignmentEdit"><i class="fa fa-user-circle-o"></i></p><p class="teacherAssignmentName">'+teachers[x].courses[z].assignments[y].files[y2].studentName+'</p><p class="teacherAssignmentEdit" onclick="editStudentAssignment(this)"><i class="fa fa-pencil-square-o"></i></p>';
          document.getElementById('assignments'+y).appendChild(tempDiv);
        }
      }
      for(let y = 0; y < teachers[x].courses[z].examinations.length; y++){
        document.getElementById('teacherExaminationsBox').innerHTML += '<div><div><p class="teacherAssignmentName" onclick="toggleAssignments(this)">'+teachers[x].courses[z].examinations[y].name+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div><div style="display:none" id="examinations'+y+'"></div></div>';
        for(let y2 = 0; y2 < teachers[x].courses[z].examinations[y].files.length; y2++){
          let tempDiv = document.createElement('div');
          tempDiv.innerHTML = '<p class="teacherAssignmentEdit"><i class="fa fa-user-circle-o"></i></p><p class="teacherAssignmentName">'+teachers[x].courses[z].examinations[y].files[y2].studentName+'</p><p class="teacherAssignmentEdit" onclick="editStudentAssignment(this)"><i class="fa fa-pencil-square-o"></i></p>';
          document.getElementById('examinations'+y).appendChild(tempDiv);
        }
      }
    }
  }
}
const pTag = document.getElementsByTagName('p');
for(let i = 0; i < pTag.length; i++){
  if(pTag[i].innerHTML.replace(/[\<].*[\>]/, "") === pageCourses){
    pTag[i].style.background = '#32374a';
    pTag[i].style.borderRight = 'solid 3px orange';
    pTag[i].parentNode.parentNode.parentNode.children[0].style.display = 'block';
  }else{
    //console.log(pTag[i].innerHTML);
  }
}

function editAssignment(currentAssignment){
  currentAssignment.parentNode.childNodes[0].innerHTML = 'Yeeeo';
}
function editStudentAssignment(currentStudent){
  document.getElementById('teacher-dark-overlay').style.display = 'block';
  document.getElementById('teacher-setGrade-dropdown').style.display = 'block';
  document.getElementById('teacher-setGrade-text').innerHTML = 'Setting Grade: ' + currentStudent.parentNode.childNodes[1].innerHTML;
}
document.getElementById('setGrade').onclick = function(){
  document.getElementById('teacher-dark-overlay').style.display = 'none';
  document.getElementById('teacher-setGrade-dropdown').style.display = 'none';
}

function toggleAssignments(currentAssigment){
  if(currentAssigment.parentNode.parentNode.childNodes[1].style.display != 'block'){
    currentAssigment.parentNode.parentNode.childNodes[1].style.display = 'block';
  }else{
    currentAssigment.parentNode.parentNode.childNodes[1].style.display = 'none'
  }
}


function deleteAssignment(currentAssignment){
  document.getElementById('teacher-dark-overlay').style.display = 'block';
  document.getElementById('teacher-delete-dropdown').style.display = 'block';
  document.getElementById('delete').onclick = function(){
    currentAssignment.parentNode.parentNode.childNodes[1].remove();
    currentAssignment.parentNode.remove();
    document.getElementById('teacher-dark-overlay').style.display = 'none';
    document.getElementById('teacher-delete-dropdown').style.display = 'none';
  };
  document.getElementById('cancel').onclick = function(){
    document.getElementById('teacher-dark-overlay').style.display = 'none';
    document.getElementById('teacher-delete-dropdown').style.display = 'none';
  };
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
function closeSetGradeBox(){
  document.getElementById('teacher-dark-overlay').style.display = 'none';
  document.getElementById('teacher-setGrade-dropdown').style.display = 'none';
}

function addAssignmentConfirm(){
  if(document.getElementById('addAssignmentTitle').value != ''){
    document.getElementById('teacherAssignmentsBox').innerHTML += '<div><div><p class="teacherAssignmentName">'+document.getElementById('addAssignmentTitle').value+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div><div></div></div>';
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
    document.getElementById('teacherExaminationsBox').innerHTML += '<div><div><p class="teacherAssignmentName">'+document.getElementById('addExaminationTitle').value+'</p><p class="teacherAssignmentEdit" onclick="editAssignment(this)"><i class="fa fa-pencil-square-o"></i></p><p class="teacherAssignmentTrash" onclick="deleteAssignment(this)"><i class="fa fa-trash-o"></i></p></div><div></div></div>';
    document.getElementById('addExaminationTitle').value = '';
    closeExaminationBox();
  }else{
    document.getElementById('examination-dropdown-error').style.display = 'grid';
  }
}

function toggleGroupAssignment(current){
  if(current.id === ''){

  }else{
    if(current.children[0].innerHTML === 'Individual Assignment'){
      //Hide group
      document.getElementById('groupShow').style.display = 'none';
      for(let i = 0; i < current.parentNode.children.length; i++){
        console.log(current.parentNode.children[i].id = 'deselected');
      }
    }else{
      //show groups
      document.getElementById('groupShow').style.display = 'grid';
      for(let i = 0; i < current.parentNode.children.length; i++){
        console.log(current.parentNode.children[i].id = 'deselected');
      }
    }
      current.id = '';
  }
}

function addGroup(current){
  current.style.display = 'none';
  document.getElementById('teacherAddGroup').style.display = 'block';
  document.getElementById('teacherAddGroup').autofocus = true;

}

function removeGroup(current){
  current.parentNode.remove();
}

function openGroups(current){
  if(current.parentNode.children[1].style.display === 'block'){
      current.parentNode.children[1].style.display = 'none';
  }else{
      current.parentNode.children[1].style.display = 'block';
      for(let x = 0; x < document.getElementById('groupHolder').children.length; x++){
        current.parentNode.children[1].innerHTML += '<li onclick="assignStudentGroup(this)">'+document.getElementById('groupHolder').children[x].children[0].innerHTML+'</li>';
      }
    }
}

function assignStudentGroup(current){
  current.parentNode.parentNode.remove();
}
