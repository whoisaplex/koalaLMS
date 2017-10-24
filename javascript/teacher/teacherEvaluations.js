for(let x = 0; x < teachers[0].courses.length; x++){
  let tempDiv = document.createElement('div');
  tempDiv.className = "grid-style-box";
  tempDiv.id = "TeacherEvaluationsCourse"+x;
  let tempH2 = '<h2>'+teachers[0].courses[x].name+'</h2><div class="teacherEvaluationsBox" id="teacherEvaluationContainer'+x+'"></div>';
  tempDiv.innerHTML = tempH2;
  document.getElementById('teacherEvaluationsContent').appendChild(tempDiv);
  for(let y = 0; y < teachers[0].courses[x].evaluations.length; y++){
    let evaluationContent = '<div><div class="teacherEvaluations" onclick="toggleEvaluations(this)"><p class="teacherAssignmentEdit"><i class="fa fa-list-ul"></i></p><p class="teacherAssignmentName">'+teachers[0].courses[x].evaluations[y].name+'</p></div><div style="display:none" id="data'+x+""+y+'"></div></div>';
    document.getElementById('teacherEvaluationContainer'+x).innerHTML += evaluationContent;

    for(let z = 0; z < teachers[0].courses[x].evaluations[y].data.length; z++){
      let dataContent = '<div class="teacherEvaluationsData"><p class="teacherAssignmentEdit"><i class="fa fa-user-circle-o"></i></p><p class="teacherAssignmentName">'+teachers[0].courses[x].evaluations[y].data[z].name+'</p><p class="teacherAssignmentEdit" onclick="editStudentAssignment(this)"><i class="fa fa-file-text"></i></p></div>';
      document.getElementById('data'+x+""+y).innerHTML += dataContent;
    }
  }
}


function toggleEvaluations(currentEvaluation){
  if(currentEvaluation.parentNode.childNodes[1].style.display != 'block'){
    currentEvaluation.parentNode.childNodes[1].style.display = 'block';
  }else{
    currentEvaluation.parentNode.childNodes[1].style.display = 'none';
  }
}
