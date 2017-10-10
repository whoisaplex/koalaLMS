// Get the modal
let modal = document.getElementById('userRegistration');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Get the login Modal

var loginModal = document.getElementById('userLogin');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
        modal.style.display = "none";
    }
}

function populateStorage(loginUserName) {
    sessionStorage.setItem('userName', loginUserName);
    sessionStorage.setItem('logedInStatus', 'YES');
    return true;
}

function loginFunction(){

    var loginUserName    = document.getElementById("login-userName").value;
    var loginPsw         = document.getElementById("login-psw").value;

    /*var users =
        [
                {name:'Nasimul Huq',userName:"nasim", email:'nasimjibs@gmail.com',psw:"nhyyhn123"},
                {name:'Masudul Hasan', userName:"masud", email:'sample@gmail.com',psw:"123"}
        ];
*/

    for(var i=0; i< users.length; i++){

       if(users[i].username === loginUserName && users[i].password === loginPsw ){
            //sessionStorage.setItem('loginName', JSON.stringify(userName));
           if(populateStorage(loginUserName)){
                location.assign("file:///C:/Users/Alexander/Documents/Programmerings%20projekt/GruppKoala/koalaLMS/html/Student/Index.html");
               console.log(sessionStorage);
                $('#login-name-display').append("Logged is as "+loginUserName);
               document.getElementById('logout-btn').style.display='block';
               document.getElementById('register-btn').style.display='none';
               document.getElementById('login-btn').style.display='none';
               document.getElementById('userLogin').style.display='none';
           }
       } else {

       }
     }



}

function logOutUser(){
    localStorage.clear();
    localStorage.setItem('logedInStatus', 'NO');
    location.assign("file:///C:/Users/Alexander/Documents/Programmerings%20projekt/GruppKoala/koalaLMS/Index.html");
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
