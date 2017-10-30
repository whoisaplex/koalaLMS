const dater = new Date();
const month = (Number(dater.getMonth()) + 1);
//document.getElementById('date').innerHTML = dater.getFullYear() + '/'+month+'/'+ dater.getDate();
let path = window.location.pathname;
let page = path.split("/").pop();
page = page.replace(/[.].*/, "");

for(let x = 0; x < teachers.length; x++){
  for(let z = 0; z < teachers[x].courses.length; z++){
    //Add courses to the teacher navigation
    if(page === teachers[x].courses[z].name){
      document.getElementById('nav-courses').innerHTML += '<a href="../courses/'+teachers[x].courses[z].name+'.html"><p class="teacher-nav-courses"><i class="fa fa-square-o "></i>'+teachers[x].courses[z].name+'</p></a>';
    }else{
      document.getElementById('nav-courses').innerHTML += '<a href="../courses/'+teachers[x].courses[z].name+'.html"><p><i class="fa fa-square-o"></i>'+teachers[x].courses[z].name+'</p></a>';
    }
  }
}

function teacherAddCode(current){
  let code;
  const parent = current.parentNode;

  if(parent.children[2].value === ''){
    parent.children[2].style.border = 'solid 1px #ce2323';
  }else{
    code = parent.children[2].value;
    document.getElementById('code-holder').style.display = 'block';
    parent.children[2].remove();
    parent.children[2].remove();
    parent.children[1].innerHTML = 'Code: ' + code;
  }
}
