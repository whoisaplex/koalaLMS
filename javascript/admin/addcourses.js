
var addCourses = document.getElementById('addCourses');
var coursesList = document.getElementById('courses');
// Div submit event
addCourses.addEventListener('submit', addItem);
// Delete event
coursesList.addEventListener('click', removeItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var courseName = document.getElementById('courseName').value;
  //reset value
  
  document.getElementById('addCourses').reset();
  
  // Create new li element
  var li = document.createElement('li');
  li.className = 'list'; // Add class to li
  li.appendChild(document.createTextNode(courseName)); // Add/append text node with input value

  // Create del button element
  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete'; // Add classes to del button
  deleteBtn.id = 'effect';
  deleteBtn.appendChild(document.createTextNode('Delete'));// Append text node
  li.appendChild(deleteBtn); // Append button to li
  coursesList.appendChild(li); // Append li to list
  document.getElementById('effect').style.background = '#e74c3c';
  for(var i = 0; i < effect.length; i++){
    effect[i].style.background = '#e74c3c';
    }
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      coursesList.removeChild(li);
    }
  }
} 

function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value))) 
        return 0; 
    else if(parseInt(value) > max) 
        return 20; 
    else return value;
}
