function makeGroup(){

  let studenters = document.getElementById('studentHolder').children;
  let groups = 5;
  let group = [];
  if(studenters.length % groups){
    //Uneven
    const extras = studenters.length % groups;
    const peoplePerGroup = ((studenters.length - extras) / groups);
    for(let i = 0; i < groups; i++){
      //let TempGroup = [];
      let tempDiv = document.createElement('div');
      tempDiv.className = 'teacherStudentGroup';
      tempDiv.id = 'group' + i;
      tempDiv.innerHTML += '<p>Group ' + (i+1) + ':</p>';
      for(let y = 0; y < peoplePerGroup; y++){
        tempDiv.children[0].innerHTML += ' ' + studenters[0].children[0].innerHTML;
        studenters[0].remove();
        console.log(tempDiv);
      }
      document.getElementById('groupHolder').appendChild(tempDiv);
    }
    for(let z = 0; z < extras; z++){
      document.getElementById('group' + z).children[0].innerHTML += ' ' + studenters[0].children[0].innerHTML;
      //group[z].push(studenters[0]);
      studenters[0].remove();
    }
    console.log(group);

  }else{
    //even
    const peoplePerGroup = (users.length / groups);
    for(let i = 0; i < groups; i++){
      let TempGroup = [];
      for(let y = 0; y < peoplePerGroup; y++){
        TempGroup.push(users[0]);
        users.shift();
      }
      group[i] = (TempGroup);
    }
    console.log(group);
  }

}
