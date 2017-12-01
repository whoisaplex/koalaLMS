let newsHolder;

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

        //create DOM elements for new news div
        let newNews = document.createElement("div");
        let pClassTitle = document.createElement("p");
        let pClassAuthor = document.createElement("p");
        let pClassText = document.createElement("p");
        let pClassEdit = document.createElement("p");
        let pClassTrash = document.createElement("p");
        let iClassEdit = document.createElement("i");
        let iClassTrash = document.createElement("i");

        pClassTitle.innerHTML = title.value;
        pClassAuthor.innerHTML = author.value;
        pClassText.innerHTML = text.value;
        pClassEdit.setAttribute("class", "adminNewsEdit");
        pClassTrash.setAttribute("class", "adminNewsTrash");

        iClassEdit.setAttribute("class","fa fa-pencil-square-o");
        iClassEdit.setAttribute("aria-hidden", "true");
        iClassTrash.setAttribute("class","fa fa-trash-o");
        iClassTrash.setAttribute("aria-hidden", "true");
        pClassTitle.setAttribute("class", "titleNews");

        pClassEdit.setAttribute("onclick", "editAddedNews(this)");
        pClassEdit.appendChild(iClassEdit);
        pClassTrash.setAttribute("onclick", "trashNews(this)");
        pClassTrash.appendChild(iClassTrash);

        pClassAuthor.setAttribute("class", "authorNews");
        pClassText.setAttribute("class", "textNews");

        newNews.className = "news-box";
        newNews.appendChild(pClassTitle);
        newNews.appendChild(pClassAuthor);
        newNews.appendChild(pClassText);
        newNews.appendChild(pClassEdit);
        newNews.appendChild(pClassTrash);

        console.log(newNews);

        document.getElementById("current-news").appendChild(newNews);
        title.value = "";
        author.value = "";
        text.value = "";
    }
}
function editNews(elementEdit){
    document.getElementById("news-submit-input").value = "Update News";
    document.getElementById("news-submit-input").removeAttribute("onclick");
    document.getElementById("news-submit-input").setAttribute("onclick", "updateNews()");

    elementEdit.parentNode.style.backgroundColor = "grey";
    document.getElementById("news-title-input").value = elementEdit.parentNode.childNodes[1].innerHTML;
    document.getElementById("news-author-input").value = elementEdit.parentNode.childNodes[3].innerHTML;
    document.getElementById("news-text-input").value = elementEdit.parentNode.childNodes[5].innerHTML;
    newsHolder = elementEdit.parentNode;
}
//for news that are added through website because of different child nodes length 
function editAddedNews(elementEdit){
    document.getElementById("news-submit-input").value = "Update News";
    document.getElementById("news-submit-input").removeAttribute("onclick");
    document.getElementById("news-submit-input").setAttribute("onclick", "updateAddedNews()");

    elementEdit.parentNode.style.backgroundColor = "grey";
    document.getElementById("news-title-input").value = elementEdit.parentNode.childNodes[0].innerHTML;
    document.getElementById("news-author-input").value = elementEdit.parentNode.childNodes[1].innerHTML;
    document.getElementById("news-text-input").value = elementEdit.parentNode.childNodes[2].innerHTML;
    newsHolder = elementEdit.parentNode;
}
function trashNews(elementTrash){
    elementTrash.parentNode.parentNode.removeChild(elementTrash.parentNode);
}
function updateNews(newsDiv){
    document.getElementById("news-submit-input").value = "Submit";
    document.getElementById("news-submit-input").setAttribute("onclick", "addNews()");
    let newsBoxArray = document.getElementsByClassName("news-box");
    for(let i=0; i < newsBoxArray.length; i++)
        newsBoxArray[i].style.backgroundColor = "#006ABF";

    newsHolder.childNodes[1].innerHTML = document.getElementById("news-title-input").value;
    newsHolder.childNodes[3].innerHTML = document.getElementById("news-author-input").value;
    newsHolder.childNodes[5].innerHTML = document.getElementById("news-text-input").value;
    console.log(newsHolder);

    //clear "Add News" input boxes
    document.getElementById("news-title-input").value = "";
    document.getElementById("news-author-input").value = "";
    document.getElementById("news-text-input").value = "";
}

//for news that are added through website because of different child nodes length
function updateAddedNews(newsDiv){
    document.getElementById("news-submit-input").value = "Submit";
    document.getElementById("news-submit-input").setAttribute("onclick", "addNews()");
    let newsBoxArray = document.getElementsByClassName("news-box");
    for(let i=0; i < newsBoxArray.length; i++)
        newsBoxArray[i].style.backgroundColor = "#006ABF";

    newsHolder.childNodes[0].innerHTML = document.getElementById("news-title-input").value;
    newsHolder.childNodes[1].innerHTML = document.getElementById("news-author-input").value;
    newsHolder.childNodes[2].innerHTML = document.getElementById("news-text-input").value;
    console.log(newsHolder);

    //clear "Add News" input boxes
    document.getElementById("news-title-input").value = "";
    document.getElementById("news-author-input").value = "";
    document.getElementById("news-text-input").value = "";
}