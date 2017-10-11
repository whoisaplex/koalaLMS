if(innerWidth <= 769){
  document.getElementById('Home').style.display = 'none';
}else{
  document.getElementById('Home-mobile').style.display = 'none';
}
function changeAttendance(currentAttendance){
  currentAttendance.parentElement.childNodes[1].src = 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-256.png';
}
