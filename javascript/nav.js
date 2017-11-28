let currentPage = "Home";
let mobileNavActive = false;
let logged_in_user = window.sessionStorage.getItem('userName');

document.getElementById('user-Name').innerHTML = sessionStorage.getItem('full_name');


function toggleCourses(){
  if(document.getElementById('nav-courses').style.display === 'none'){
    document.getElementById('nav-courses').style.display = 'block';
  }else{
    document.getElementById('nav-courses').style.display = 'none';
  }
}

function toggleOngoing(){
  if(document.getElementById('nav-ongoing-courses').style.display === 'none'){
    document.getElementById('nav-ongoing-courses').style.display = 'block';
    document.getElementById('nav-ongoing-courses-arrow').classList = 'fa fa-chevron-down';
    document.getElementById('nav-ongoing-courses-text').style.background = '#2E3344';
  }else{
    document.getElementById('nav-ongoing-courses').style.display = 'none';
    document.getElementById('nav-ongoing-courses-arrow').classList = 'fa fa-chevron-right';
    document.getElementById('nav-ongoing-courses-text').style.background = 'none';
  }
}

function toggleUpcoming(){
  if(document.getElementById('nav-upcoming-courses').style.display === 'none'){
    document.getElementById('nav-upcoming-courses').style.display = 'block';
    document.getElementById('nav-upcoming-courses-arrow').classList = 'fa fa-chevron-down';
    document.getElementById('nav-upcoming-courses-text').style.background = '#2E3344';
  }else{
    document.getElementById('nav-upcoming-courses').style.display = 'none';
    document.getElementById('nav-upcoming-courses-arrow').classList = 'fa fa-chevron-right';
    document.getElementById('nav-upcoming-courses-arrow').style.background = '';
    document.getElementById('nav-upcoming-courses-text').style.background = 'none';
  }
}





let pages = ['Home', 'Courses','Upcoming', 'Grades'];
for(let countPages = 0; countPages < pages.length; countPages++){
  if(pages[countPages] === currentPage){
    //document.getElementById(currentPage).style.display = 'grid';
    //document.getElementById('nav-menu').childNodes[1].style.background = '#2e3344';
    //document.getElementById('nav-menu').childNodes[1].style.borderRight = 'solid 4px orange';
  }else{
    //document.getElementById(pages[countPages]).style.display = 'none';
  }
}



function changeContent(currentNavP){
  document.getElementById('Home-mobile').style.display = 'none';
  let currentPName = currentNavP.innerHTML;
  currentPName = currentPName.replace(/[\<].*[\>]/, "");
  currentPage = currentPName;
  for(let countPages = 0; countPages < pages.length; countPages++){
    if(pages[countPages] === currentPage){
      if(currentPage != 'Home'){
        document.getElementById(currentPage).style.display = 'grid';
      }else{
        if(innerWidth <= 769){
          document.getElementById('Home-mobile').style.display = "grid";
        }else{
          document.getElementById(currentPage).style.display = 'grid';
        }
      }

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
