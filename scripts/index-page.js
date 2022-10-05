let conversation__record = document.querySelector(".conversation__record");

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

    /* content title (author and timestamp) */
    let content_title = document.createElement("div");
    content_title.classList.add("comment__content--title");
    comment__content.appendChild(content_title);

    let comment__author = document.createElement("span");
    let comment__timestamp = document.createElement("span");
    let comment__comment = document.createElement("span");
    comment__author.classList.add("comment__author");
    comment__timestamp.classList.add("comment__timestamp");
    comment__comment.classList.add("comment__comment");
    comment__author.innerText = comment_data.name;
    //convert epoch time to yymmdd
    var epochstamp = comment_data.timestamp;
    var timestamp = new Date(epochstamp);
    var timestamp_year = timestamp.getFullYear();
    var timestamp_month = ("00" + (timestamp.getMonth() + 1)).slice(-2);
    var timestamp_date = ("00" + timestamp.getDate()).slice(-2);
    comment__timestamp.innerText = (timestamp_month + "/" + timestamp_date + "/" + timestamp_year);
    comment__comment.innerText = comment_data.comment;

    /* author and timestamp added into content_title */
    /* content_title is added into comment_content */
    content_title.appendChild(comment__author);
    content_title.appendChild(comment__timestamp);
    /* comment added into comment_content */
    comment__content.appendChild(comment__comment);
}

let api_key = undefined;

function GetRegister() {
    if (api_key === undefined) {
        return axios.get("https://project-1-api.herokuapp.com/register").then((response) => {
            api_key = response.data.api_key;
            return Promise.resolve(api_key);
        })
    }
    else {
        return Promise.resolve(api_key);
    }
}

GetRegister();

function GetComments() {
    GetRegister().then((api_key) => {
        return axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`).then((element) => {
            var comments_info = element.data;
            comments_info.sort(function(x, y){
                return y.timestamp - x.timestamp;
            })
            comments_info.forEach((e) => {
                displayComment(e);
            })
        })
    })
}

GetComments();

function PostComment(comment_author, comment_comment) {
    GetRegister().then((api_key) => {
        axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${api_key}`, {
            name: comment_author,
            comment: comment_comment
        }).then((response) => {
            GetComments();
        })
    })
}

let submit__button = document.querySelector("#submit__button");
let form = document.querySelector("form");
submit__button.addEventListener('click', (event) => {
    event.preventDefault();
    /* get name from the Form */
    let submit_name = document.getElementById("name").value;
    /* get comment from the Form */
    let submit_comment = document.getElementById("comment").value;
    if (submit_name != "" && submit_comment != "") {
        let comment_author = document.getElementById("name");
        comment_author.classList.remove("inputredborder");
        let comment_comment = document.getElementById("comment");
        comment_comment.classList.remove("inputredborder");
        let conversation__record = document.querySelector(".conversation__record");
        conversation__record.replaceChildren();
        PostComment(submit_name, submit_comment);

    } else {
        if (submit_name === "") {
            let comment_author = document.getElementById("name");
            comment_author.classList.add("inputredborder");
        }
        else if (submit_comment === "") {
            let comment_comment = document.getElementById("comment");
            comment_comment.classList.add("inputredborder");
        }
        else {
            let comment_author = document.getElementById("name");
            comment_author.classList.add("inputredborder");
            let comment_comment = document.getElementById("comment");
            comment_comment.classList.add("inputredborder");
        }          
    }

    form.reset();
})