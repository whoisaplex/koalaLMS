let currentPage = "Home";
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
