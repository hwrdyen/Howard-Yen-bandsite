const showncomment_database = [
    {author: "Connor Walton", timestamp: "02/17/2021", comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."},
    {author: "Emilie Beach", timestamp: "01/09/2021", comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."},
    {author: "Miles Acosta", timestamp: "12/20/2020", comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."}
]

let conversation__record = document.querySelector(".conversation__record");
//console.log(showncomment_database.length);
function displayComment(comment_data) {
    let comment__card = document.createElement("div");
    comment__card.classList.add("comment__card");
    conversation__record.appendChild(comment__card);
    
    let comment__profileimg = document.createElement("img");
    comment__profileimg.classList.add("comment__profileimg");
    comment__card.appendChild(comment__profileimg);

    let comment__content = document.createElement("div");
    comment__content.classList.add("comment__content");
    comment__card.appendChild(comment__content);

    let comment__author = document.createElement("span");
    let comment__timestamp = document.createElement("span");
    let comment__comment = document.createElement("span");
    comment__author.classList.add("comment__author");
    comment__timestamp.classList.add("comment__timestamp");
    comment__comment.classList.add("comment__comment");
    comment__author.innerText = comment_data.author;
    comment__timestamp.innerText = comment_data.timestamp;
    comment__comment.innerText = comment_data.comment;
    comment__content.appendChild(comment__author);
    comment__content.appendChild(comment__timestamp);
    comment__content.appendChild(comment__comment);
}

for (let i = 0; i<showncomment_database.length; i++) {
    displayComment(showncomment_database[i]); //build the comment__card for three default comments
}

let submit__button = document.querySelector("#submit__button");
let form = document.querySelector("form");
submit__button.addEventListener('click', (event) => {
    event.preventDefault();
    /* create an Empty object to store comment information */
    let showncomment_data = {};
    /* get name from the Form */
    let submit_name = document.getElementById("name").value;
    /* get comment from the Form */
    let submit_comment = document.getElementById("comment").value;
    /* get Timestamp */
    var date = new Date();
    var submit_timestamp = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
    
    showncomment_data["author"] = submit_name
    showncomment_data["timestamp"] = submit_timestamp;
    showncomment_data["comment"] = submit_comment;
    showncomment_database.unshift(showncomment_data);
    //console.log(showncomment_database);
    form.reset();
    let conversation__record = document.querySelector(".conversation__record");
    conversation__record.replaceChildren();
    for (let i = 0; i<showncomment_database.length; i++) {
        displayComment(showncomment_database[i]);
    }
})
