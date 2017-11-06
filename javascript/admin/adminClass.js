document.getElementById('createClassInput').addEventListener('keypress', function(e){
  let key = e.which || e.keyCode;
  if(key === 13){
    if(this.value === ''){
      
    }else{
      this.style.display = 'none';
      document.getElementById('createClassButton').style.display = 'block';
    }
  }
});

function addStudentClass(current){
  let ClassValue = document.getElementById('classSelector').value;
  current.parentNode.remove();
}

function addClass(current){
  current.style.display = 'none';
  current.parentNode.children[0].style.display = 'block';
}
