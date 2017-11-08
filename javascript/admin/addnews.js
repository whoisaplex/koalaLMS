function addNews(){
    let title = document.getElementById("news-title-input");
    let author = document.getElementById("news-author-input");
    let text = document.getElementById("news-text-input");
    let clear = false;

    if(!title.value)
        alert("must write value in title");
    if(!author.value)
        alert("must write value in title");
    if(!text.value)
        alert("must write value in title");
    if(title.value && author.value && text.value)
        alert("all clear");
}