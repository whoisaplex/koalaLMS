let currentPage = "Home";
let mobileNavActive = false;
let pages = ['Home', 'Courses','Upcoming'];
for(let countPages = 0; countPages < pages.length; countPages++){
  if(pages[countPages] === currentPage){
    document.getElementById(currentPage).style.display = 'flex';
  }else{
    document.getElementById(pages[countPages]).style.display = 'none';
  }
}


function changeContent(ho){
  let xxx = ho.innerHTML;
  xxx = xxx.replace(/[\<].*[\>]/, "");
  currentPage = xxx;
  for(let countPages = 0; countPages < pages.length; countPages++){
    if(pages[countPages] === currentPage){
      document.getElementById(currentPage).style.display = 'flex';
    }else{
      document.getElementById(pages[countPages]).style.display = 'none';
    }
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
