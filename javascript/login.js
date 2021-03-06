window.onload = hideLoginOption;

// Get the modal
let url = document.URL;
let studentUrl = url.replace("/index.html", "/html/Student/home/Index.html");
let teacherUrl = studentUrl.replace("/Student/", "/teacher/");
let adminUrl = studentUrl.replace("/Student/", "/admin/");
let logOutUrl = sessionStorage.getItem('logOutUrl')
let modal = document.getElementById('userRegistration');

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {

    if (event.target.className == "modal") {
       event.target.style.display = "none";
    }
}

function populateStorage(loginUserName) {
    sessionStorage.setItem('userName', loginUserName);
    sessionStorage.setItem('logedInStatus', 'YES');
    sessionStorage.setItem('logOutUrl', url);
    return true;
}

function loginFunction(){

    let loginUserName    = document.getElementById("login-userName").value;
    let loginPsw         = document.getElementById("login-psw").value;
   //loop through students
    for(let i=0; i< students.length; i++){
       if(students[i].username === loginUserName && students[i].password === loginPsw ){
            sessionStorage.setItem('loginName', JSON.stringify(userName));
            sessionStorage.setItem('full_name', students[i].full_name);
           if(populateStorage(loginUserName)){
               location.assign(studentUrl);
               $('#login-name-display').append("Logged is as "+loginUserName);
               document.getElementById('logout-btn').style.display='block';
               document.getElementById('register-btn').style.display='none';
               document.getElementById('login-btn').style.display='none';
               document.getElementById('userLogin').style.display='none';
           }
       } else {
            //loop trough teachers
           for(let y=0; y< teachers.length; y++){
              if(teachers[y].username === loginUserName && teachers[y].password === loginPsw ){
                sessionStorage.setItem('loginName', JSON.stringify(userName));
                sessionStorage.setItem('full_name', teachers[y].full_name);
                if(populateStorage(loginUserName)){
                 location.assign(teacherUrl);
                 $('#login-name-display').append("Logged is as "+loginUserName);
                 document.getElementById('logout-btn').style.display='block';
                 document.getElementById('register-btn').style.display='none';
                 document.getElementById('login-btn').style.display='none';
                 document.getElementById('userLogin').style.display='none';
                }
           } else {
              // loop through admins
              for(let z=0; z < admins.length; z++){
                if(admins[z].username === loginUserName && admins[z].password === loginPsw){
                  sessionStorage.setItem('loginName', JSON.stringify(userName));
                  sessionStorage.setItem('full_name', admins[z].full_name);
                  if(populateStorage(loginUserName)){
                  location.assign(adminUrl);
                  $('#login-name-display').append("Logged is as "+loginUserName);
                  document.getElementById('logout-btn').style.display='block';
                  document.getElementById('register-btn').style.display='none';
                  document.getElementById('login-btn').style.display='none';
                  document.getElementById('userLogin').style.display='none';
                  }
                }
                  else {
                    document.getElementById('login-error').innerHTML = "<span class='login-error info-alert warning-info-alert'>User Name / Password is not valid</span>";
                  }
             }
            }
          }
        }
      }
    }

 function hideLoginOption() {
     if( sessionStorage.getItem('logedInStatus') === 'YES'){
          $('#login-name-display').append("Logged is as "+sessionStorage.getItem('userName'));
          document.getElementById('logout-btn').style.display='block';
          document.getElementById('register-btn').style.display='none';
          document.getElementById('login-btn').style.display='none';
          document.getElementById('userLogin').style.display='none';
     }


  }





function logOutUser(){
    sessionStorage.clear();
    sessionStorage.setItem('logedInStatus', 'NO');
    location.assign(logOutUrl);
    document.getElementById('register-btn').style.display='block';
    document.getElementById('login-btn').style.display='block';
    document.getElementById('logout-btn').style.display='none';
    document.getElementById('login-name-display').style.display='none';

}

function signUpFunction() {
    var name        = document.getElementById("name").value;
    var userName    = document.getElementById("userName").value;
    var email       = document.getElementById("email").value;
    var psw         = document.getElementById("psw").value;
    var users = [];
    var object = {name:name, userName:userName, email:email, psw:psw};
    users.push(object);
    modal.style.display = "none";

}
