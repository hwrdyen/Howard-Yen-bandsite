showinfo_database = [
    {date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco, CA" },
    {date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco, CA" },
    {date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco, CA" },
    {date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco, CA" },
    {date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco, CA" },
    {date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco, CA" }
]

let showsinfo__container = document.querySelector(".showsinfo__container");
function createShowInfoContainer(show_title) {
    let showsinfo__title = document.createElement("h1");
    showsinfo__title.classList.add("showsinfo__title");
    showsinfo__title.classList.add("sectionheader");
    showsinfo__title.innerText = show_title;
    showsinfo__container.appendChild(showsinfo__title);
}

function createShowInfoContent() {
    let showsinfo__content = document.createElement("div");
    showsinfo__content.classList.add("showsinfo__content");
    showsinfo__container.appendChild(showsinfo__content);
}

function appendShowInfoCard__mobile(shows_info) {
    let showsinfo__content = document.querySelector(".showsinfo__content");

    //create shows info card and append into shows info content
    let showsinformation__card = document.createElement("div");
    showsinformation__card.classList.add("shows-information__card");
    showsinfo__content.appendChild(showsinformation__card);

    
    /* mobile version -- add Date, Venue, and Location Titles in every card */
        //append all info into one shows info card
        //DATE Title
        let infocardtitle__date = document.createElement("span");
        infocardtitle__date.classList.add("infocard-title__date--mobile");
        infocardtitle__date.innerText = "DATE";
        showsinformation__card.appendChild(infocardtitle__date);
        //date
        let infocard__date = document.createElement("span");
        infocard__date.classList.add("infocard__date");
        infocard__date.innerText = shows_info["date"];
        showsinformation__card.appendChild(infocard__date);

        //VENUE Title
        let infocardtitle__venue = document.createElement("span");
        infocardtitle__venue.classList.add("infocard-title__venue--mobile");
        infocardtitle__venue.innerText = "VENUE";
        showsinformation__card.appendChild(infocardtitle__venue);

        //venue
        let infocard__venue = document.createElement("span");
        infocard__venue.classList.add("infocard__venue");
        infocard__venue.innerText = shows_info["venue"];
        showsinformation__card.appendChild(infocard__venue);

        //LOCATION Title
        let infocardtitle__location = document.createElement("span");
        infocardtitle__location.classList.add("infocard-title__location--mobile");
        infocardtitle__location.innerText = "LOCATION";
        showsinformation__card.appendChild(infocardtitle__location);
        //location
        let infocard__location = document.createElement("span");
        infocard__location.classList.add("infocard__location");
        infocard__location.innerText = shows_info["location"];
        showsinformation__card.appendChild(infocard__location);
        //button
        let infocard__buttonlink = document.createElement("a");
        let infocard__button = document.createElement("button");
        infocard__buttonlink.classList.add("infocard__buttonlink");
        infocard__button.classList.add("infocard__button");
        infocard__buttonlink.href = "#";
        infocard__button.innerText = "BUY TICKETS";
        showsinformation__card.appendChild(infocard__buttonlink);
        infocard__buttonlink.appendChild(infocard__button);
}

function appendShowInfoTitle__DSK() {
    let showsinfo__content = document.querySelector(".showsinfo__content");
    let infocard__title__DSK = document.createElement("div");
    infocard__title__DSK.classList.add("infocard__title--DSK");
    showsinfo__content.appendChild(infocard__title__DSK);

    //DATE Title
    let infocardtitle__date = document.createElement("span");
    infocardtitle__date.classList.add("infocard-title__date--DSK");
    infocardtitle__date.innerText = "DATE";
    infocard__title__DSK.appendChild(infocardtitle__date);

    //VENUE Title
    let infocardtitle__venue = document.createElement("span");
    infocardtitle__venue.classList.add("infocard-title__venue--DSK");
    infocardtitle__venue.innerText = "VENUE";
    infocard__title__DSK.appendChild(infocardtitle__venue);

    //LOCATION Title
    let infocardtitle__location = document.createElement("span");
    infocardtitle__location.classList.add("infocard-title__location--DSK");
    infocardtitle__location.innerText = "LOCATION";
    infocard__title__DSK.appendChild(infocardtitle__location);
}

/*function appendShowInfoCard__DSK(shows_info) {
    let showsinfo__content = document.querySelector(".showsinfo__content");
    //create shows info card and append into shows info content
    let showsinformation__card = document.createElement("div");
    showsinformation__card.classList.add("showsinformation__card--DSK");
    showsinformation__card.classList.add("hidden");
    showsinfo__content.appendChild(showsinformation__card);

    //DSK version
    //append all info into one shows info card

    //date
    let infocard__date = document.createElement("span");
    infocard__date.classList.add("infocard__date--DSK");
    infocard__date.classList.add("hidden");
    infocard__date.innerText = shows_info["date"];
    showsinformation__card.appendChild(infocard__date);

    //venue
    let infocard__venue = document.createElement("span");
    infocard__venue.classList.add("infocard__venue--DSK");
    infocard__venue.classList.add("hidden");
    infocard__venue.innerText = shows_info["venue"];
    showsinformation__card.appendChild(infocard__venue);

    //location
    let infocard__location = document.createElement("span");
    infocard__location.classList.add("infocard__location--DSK");
    infocard__location.classList.add("hidden");
    infocard__location.innerText = shows_info["location"];
    showsinformation__card.appendChild(infocard__location);
    
    //button
    let infocard__button = document.createElement("button");
    infocard__button.classList.add("infocard__button--DSK");
    infocard__button.classList.add("hidden");
    infocard__button.innerText = "BUY TICKETS";
    showsinformation__card.appendChild(infocard__button);
}*/

createShowInfoContainer("Shows");
createShowInfoContent();

appendShowInfoTitle__DSK()
for (let i = 0; i<showinfo_database.length; i++){
    appendShowInfoCard__mobile(showinfo_database[i]);
}

