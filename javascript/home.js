let currentAttendanceBox;

if(innerWidth <= 769){
  document.getElementById('Home').style.display = 'none';
  document.getElementById('nav-wrapper').style.display = 'none';
}else{
  document.getElementById('Home-mobile').style.display = 'none';
}
function changeAttendance(currentAttendance){
  if(document.getElementById('attendance-dropdown').style.display === 'none' || document.getElementById('attendance-dropdown').style.display === ''){
    document.getElementById('attendance-dropdown').style.display = 'block';
    document.getElementById('attendance-dark-overlay').style.display = 'block';
    currentAttendanceBox = currentAttendance;
  }else{
    document.getElementById('attendance-dropdown').style.display = 'none';
  }
}

function submitCodeAttendance(){
  let code = "222EEE";
  let codeInput = document.getElementById('attendance-dropdown-input').value;
  if(codeInput === code){
    currentAttendanceBox.parentElement.childNodes[1].src = 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-256.png';
    document.getElementById('attendance-dropdown').style.display = 'none';
    document.getElementById('attendance-dark-overlay').style.display = 'none';
    document.getElementById('attendance-dropdown-input').value = '';
  }else{
    document.getElementById('attendance-dropdown-error').style.display = 'grid';
  }
}

function closeAttendanceDropdown(){
  document.getElementById('attendance-dropdown').style.display = 'none';
  document.getElementById('attendance-dark-overlay').style.display = 'none';
  document.getElementById('attendance-dropdown-error').style.display = 'none';
  document.getElementById('attendance-dropdown-input').value = '';

}
