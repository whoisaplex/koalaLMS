let currentPage = "Home";
let mobileNavActive = false;
let pages = ['Home', 'Courses','Upcoming'];
for(let countPages = 0; countPages < pages.length; countPages++){
  if(pages[countPages] === currentPage){
    document.getElementById(currentPage).style.display = 'flex';
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
