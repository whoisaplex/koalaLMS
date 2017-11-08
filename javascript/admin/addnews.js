function addNews(){
    let title = document.getElementById("news-title-input");
    let author = document.getElementById("news-author-input");
    let text = document.getElementById("news-text-input");
    let currentNewsBox = document.getElementById("current-news");
    
    if(title.value.length === 0){
        title.style.animation = "validationFeedback 0.8s ease";
        setTimeout(function(){title.style.animation = ""}, 800);}
    if(author.value.length === 0){
        author.style.animation = "validationFeedback 0.8s ease";
        setTimeout(function(){author.style.animation = ""}, 800);}
    if(text.value.length === 0){
        text.style.animation = "validationFeedback 0.8s ease";
        setTimeout(function(){text.style.animation = ""}, 800);}
    if(title.value && author.value && text.value){
        let newNews = document.createElement("div");//"<div class='news-box' onclick='editNews(this)'> <i class='fa fa-wrench' aria-hidden='true'></i>updating website 24/7</div>"; 
        let iClass = document.createElement("i");
        let pClass = document.createElement("p");

        pClass.innerHTML = title.value;
        iClass.setAttribute("class","fa fa-wrench");
        iClass.setAttribute("aria-hidden", "true");
        pClass.setAttribute("class", "titleNews");

        newNews.className = "news-box";
        newNews.appendChild(iClass);//"<i class='fa fa-wrench' aria-hidden='true'></i>";
        newNews.appendChild(pClass);
        //newNews.appendChild += text.value;
        document.getElementById("current-news").appendChild(newNews);
        title.value = "";
        author.value = "";
        text.value = "";
    }
}