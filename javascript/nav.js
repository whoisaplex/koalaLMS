let currentPage = "Home";
let mobileNavActive = false;
let logged_in_user = window.sessionStorage.getItem('userName');

/*let num;
for(let x = 0; x < users.length; x++){
  if(users[x].username === sessionStorage.getItem('userName')){
    num = x;
  }
}
document.getElementById('user-Name').innerHTML = users[num].full_name;
*/

let pages = ['Home', 'Courses','Upcoming', 'Grades'];
for(let countPages = 0; countPages < pages.length; countPages++){
  if(pages[countPages] === currentPage){
    document.getElementById(currentPage).style.display = 'grid';
    document.getElementById('nav-menu').childNodes[1].style.background = '#2e3344';
    document.getElementById('nav-menu').childNodes[1].style.borderRight = 'solid 4px orange';
  }else{
    document.getElementById(pages[countPages]).style.display = 'none';
  }
}


function changeContent(currentNavP){

  let currentPName = currentNavP.innerHTML;
  currentPName = currentPName.replace(/[\<].*[\>]/, "");
  currentPage = currentPName;
  for(let countPages = 0; countPages < pages.length; countPages++){
    if(pages[countPages] === currentPage){
      document.getElementById(currentPage).style.display = 'flex';

    }else{
      document.getElementById(pages[countPages]).style.display = 'none';
    }
    let tempP = document.getElementById('nav-menu').querySelectorAll('p');
    for(let x = 0; x < tempP.length; x++){
      tempP[x].style.background = '';
      tempP[x].style.borderRight = 'none';
    }
    document.getElementById('currentPageHeader').innerHTML = currentPName;
    currentNavP.style.background = '#2e3344';
    currentNavP.style.borderRight = 'solid 4px orange';
  }
}

function toggleNavBar(that){
  if(mobileNavActive === true && self.innerWidth <= 769){
    document.getElementById('www').style.transform = 'translateX(-51vw)';
    mobileNavActive = false;
  }else{
    if(that.id === 'openNav'){
      document.getElementById('www').style.transform = 'translateX(0vw)';
      document.getElementById('www').style.transition = '1s';
      mobileNavActive = true;
    }
  }
}
