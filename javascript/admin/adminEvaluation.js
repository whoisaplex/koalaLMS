let x = 0;

for(let i=0; i<courses.length; i++){

    let tempDiv = document.createElement('div');
        tempDiv.className = "grid-style-box";
        tempDiv.id = "TeacherEvaluationsCourse"+i;

    let courseTitle = '<div class="evaluation-list-course-title-box"><p class="evaluation-list-course-title">'+courses[i].course_title+'</p><p><button class="attendance-button" onclick="addNewEvaluation('+courses[i].course_id
+');" >Add Evaluation</button></p></div><div class="teacherEvaluationsBox" id="teacherEvaluationContainer'+i+'"></div>';


        tempDiv.innerHTML = courseTitle;
        document.getElementById('evaluationsList').appendChild(tempDiv);

    let noOfEvaluation = 0;


    for(let y = 0; y < evaluations.length; y++){

        if(courses[i].course_id == evaluations[y].course_id){

            noOfEvaluation++;
            let evaluationContent = 
                '<div id="evaluation-title-box-'+evaluations[y].evaluation_id+'" class="evaluation-title-box teacherEvaluations"><div><i class="fa fa-caret-right" aria-hidden="true"></i></div><div id="evaluation-title-'+evaluations[y].evaluation_id+'" class="evaluation-title">'+evaluations[y].evaluation_title+'</div><div onclick="editEvaluation('+evaluations[y].evaluation_id+','+evaluations[y].course_id+');"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div onclick="deleteEvaluation('+evaluations[y].evaluation_id+','+evaluations[y].course_id+');"><i class="fa fa-trash-o" aria-hidden="true"></i></div></div>';

            let content = '';
            document.getElementById('teacherEvaluationContainer'+i).innerHTML += evaluationContent;


        }


    }

     if(noOfEvaluation === 0){
        let noEvaluationFound = '<div><div class="no-evaluations-found" id="no-evaluations-found-'+i+'" style="grid-template-columns: 0px">No evaluation found. Create a new One!</div></div>';
         document.getElementById('teacherEvaluationContainer'+i).innerHTML += noEvaluationFound;

    }

}



   
   $(document).ready(function() {
    var maxInputField           = 20;
    var wrapper                 = $(".input-field-container");
    var add_button              = $("#add-evaluation-question-btn");
    
   
       
       
    $(add_button).click(function(e){
        e.preventDefault();
        if(x < maxInputField){
             x++;
            $(wrapper).append('<div><label class="evaluation-title evaluation-title-in-lytbox" for="title"></label><input type="text" id="question_'+x+'" name="question_'+x+'"/><a href="#" class="delete">Delete</a></div>'); 
             
        } else {
          alert('You Reached the limits of questions');
        }
    });
       
   

    $(wrapper).on("click",".delete", function(e){
        e.preventDefault(); $(this).parent('div').remove(); x--;
    }); 
    
   
    
            
    $("#add-evaluation").click(function(e){
        e.preventDefault();
       
        let clearToAdd = checkInputFieldsAndAdd(x);
        if(clearToAdd === 1){
            //Adding new evaluaion object in evaluation  array of objects
            let newEvaluationId = filterInt(evaluations.length+1);
            let evaluationToEdit = filterInt(document.getElementById('evaluation-to-edit').value);
            
            // newCourseId = 0;
            let newCourseId = filterInt(document.getElementById("evaluation-for-course").value);
           
            let evaluationTitle = $("#evaluation-title").val();
            let evaluationDivNumber = filterInt(newCourseId-1);
            
            let newEvaluationObject = {evaluation_id:newEvaluationId, course_id:newCourseId, evaluation_title:evaluationTitle};
            
            
            if(evaluationToEdit>0){
                $('#evaluation-title-'+evaluationToEdit).html(evaluationTitle);
                //editTitleinObject(evaluationToEdit,evaluationTitle)
                 
            } else {
               //add evaluation here
                evaluations.push(newEvaluationObject);
                addQuestionToEvaluationObject(x,newEvaluationId);
                addEvaluationToDiv(newEvaluationId, evaluationTitle,evaluationDivNumber, newCourseId);    
            } 
             
            
            
            closeEvaluationOverlay();
           
          
            
        } else {
            $("#evaluation-dropdown-error").css("display","block");
            $('<h3>Evaluation Title or Questions can not be empty.</h3>').appendTo('#evaluation-dropdown-error');
        }
    });
    
   
       
    
});

function editEvaluation(evaluationId, courseId){
    document.getElementById('admin-evaluation-overlay').style.display = 'block';
    document.getElementById('admin-evaluation-dropdown').style.display = 'block';
    //$('.evaluation-div').find('input:text').val('');
    //$('*[class^="delete"]').parent('div').remove();
    //document.getElementById("evaluation-for-course").value = courseId;
     $(".input-field-container").contents().remove();
   
    document.getElementById('add-edit-title').innerHTML += "Edit ";
   
    document.getElementById('add-edit-button').innerHTML += "Edit";
    
    let evaluationTitle = getEvaluationTitle(evaluationId);
    document.getElementById('evaluation-title').value = evaluationTitle;
    let evaluationQuestions = getEvaluationQuestions(evaluationId);
    if(evaluationQuestions.length >0){
        for(let y=0; y<evaluationQuestions.length; y++){
            let questionNumber = y+1;
            let questionText = evaluationQuestions[y].question;
            $(".input-field-container").append('<div><label class="evaluation-title evaluation-title-in-lytbox" for="title"></label><input type="text" id="question_'+questionNumber+'" name="question_'+questionNumber+'" value="'+questionText+'"/><a href="#" class="delete">Delete</a></div>'); 
        }    
    }
    
    document.getElementById('evaluation-to-edit').value = evaluationId;
    document.getElementById('evaluation-for-course').value = courseId;
    
    
}

function getEvaluationQuestions(evaluationId){
    let questions = new Array();
    for(let j=0; j<evaluationQuestions.length; j++){
        if(evaluationQuestions[j].evaluation_id === evaluationId){
           questionObject =  {question_id : evaluationQuestions[j].question_id, evaluation_id:evaluationQuestions[j].evaluation_id, question:evaluationQuestions[j].question };
           questions.push(questionObject);
        }
    }
    
    return questions;
}

function getEvaluationTitle(evaluationId){
    let evaluationTitle = "";
    for(let i=0; i<evaluations.length; i++){
        if(evaluations[i].evaluation_id === evaluationId){
            evaluationTitle = evaluations[i].evaluation_title;
        }
    }
    return evaluationTitle;
}


   
  function addEvaluationToDiv(newEvaluationId, evaluationTitle, divNumber, courseId){

      /*if(document.getElementById("evaluation-to-edit").value != ""){
          
      }*/

      let newEvaluationToHTML = '<div id="evaluation-title-box-'+newEvaluationId+'" class="evaluation-title-box teacherEvaluations"><div><i class="fa fa-caret-right" aria-hidden="true"></i></div><div class="evaluation-title">'+evaluationTitle+'</div><div onclick="editEvaluation('+newEvaluationId+','+courseId+');"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div onclick="deleteEvaluation('+newEvaluationId+','+courseId+');"><i class="fa fa-trash-o" aria-hidden="true"></i></div></div>';

      document.getElementById('teacherEvaluationContainer'+divNumber).innerHTML += newEvaluationToHTML;

      if (document.getElementById('no-evaluations-found-'+divNumber)){
          document.getElementById('no-evaluations-found-'+divNumber).remove();
      }

  }


  function deleteEvaluation( evaluationId, courseId){
      
      let evaluationContainerDivNumber = courseId-1;
      let index = evaluationId-1;
      if(evaluations.splice(index)){ // delete evaluation
        document.getElementById('evaluation-title-box-'+evaluationId).remove();
      }



      for(let j=0; j<evaluationQuestions.length; j++){
          if(evaluationQuestions[j].evaluation_id === evaluationId){
             evaluationQuestions.splice(j); 
          }
      }

      let noEvaluationForThisCourse = 1;
      for(let i=0; i<evaluations.length; i++){
          if(courseId === evaluations[i].course_id){
            noEvaluationForThisCourse = 0;   
          }
      }
      if(noEvaluationForThisCourse === 1){ // add no evaluation found div if there is no evaluation for a course
          let noEValuationHtml = '<div class="no-evaluations-found" id="no-evaluations-found-'+courseId+'" style="grid-template-columns: 0px">No evaluation found. Create a new One!</div>';

          document.getElementById('teacherEvaluationContainer'+evaluationContainerDivNumber).innerHTML += noEValuationHtml;
      }
  }

  function addQuestionToEvaluationObject(totalQuestions, evaluationId){
      let initialQuestionId =  parseInt(evaluationQuestions.length+1);
      let objToPush = {};
      let questionToAdd = "";
      for(let i=1; i<=totalQuestions; i++){
          questionToAdd = $('#question_'+i).val();
          objToPush =  {question_id : initialQuestionId, evaluation_id:evaluationId, question:questionToAdd};
          evaluationQuestions.push(objToPush);
          initialQuestionId++;
      }

  }

  function checkInputFieldsAndAdd(totalQuestions){
    
    let questionIsEmpty = 0;
    for(let i=1; i<=totalQuestions; i++){
        if($('#question_'+i).val() === ""){
            questionIsEmpty = 1;    
        }
    }

    if(questionIsEmpty === 1){
        return 0;
    }else if($("#evaluation-title").val()===''){
        return 0;
    } else {
        return 1;
    }

  }

  
    function addNewEvaluation(courseId){
        document.getElementById('admin-evaluation-overlay').style.display = 'block';
        document.getElementById('admin-evaluation-dropdown').style.display = 'block';
        $('.evaluation-div').find('input:text').val('');
        $('*[class^="delete"]').parent('div').remove();
        document.getElementById("evaluation-for-course").value = courseId;
        document.getElementById('add-edit-title').innerHTML += "Add ";

        document.getElementById('add-edit-button').innerHTML += "Add";


    }


    function closeEvaluationOverlay(){

        $("#add-edit-title").contents().remove();
        $("#add-edit-button").contents().remove();
        document.getElementById('admin-evaluation-overlay').style.display = 'none';
        document.getElementById('admin-evaluation-dropdown').style.display = 'none';
        document.getElementById('evaluation-dropdown-error').style.display = 'none';

    }


let filterInt = function(value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

