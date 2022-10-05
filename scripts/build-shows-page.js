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
    showsinformation__card.setAttribute("id", shows_info["id"]);
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
        let epochstamp = shows_info["date"];
        var timestamp = new Date(parseInt(epochstamp)).toDateString();
        console.log(typeof timestamp);
        infocard__date.innerText = timestamp;
        showsinformation__card.appendChild(infocard__date);

        //VENUE Title
        let infocardtitle__venue = document.createElement("span");
        infocardtitle__venue.classList.add("infocard-title__venue--mobile");
        infocardtitle__venue.innerText = "VENUE";
        showsinformation__card.appendChild(infocardtitle__venue);

        //venue
        let infocard__venue = document.createElement("span");
        infocard__venue.classList.add("infocard__venue");
        infocard__venue.innerText = shows_info["place"];
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

function GetShowDates() {
    GetRegister().then((api_key) => {
        return axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${api_key}`).then((element) => {
            var showdates_info = element.data;
            //console.log(showdates_info);
            showdates_info.forEach((e) => {
                appendShowInfoCard__mobile(e);
            })

            return Promise.resolve(showdates_info);
        }).then((showsdates_info) => {

            console.log("after finished setting up");
            console.log(showsdates_info);
            /* Finished Setting up the default show information */

            /* Selected State */
            //After clicked the shows info card, apply grey background for ShowInfoCard
            for (let i = 0; i<Object.keys(showsdates_info).length; i++){
            //    console.log(showsdates_info[i].id);
                let showinfo__card = document.getElementById(showsdates_info[i].id);
                showinfo__card.addEventListener('click', (event) => {
                    for (let j = 0; j<Object.keys(showsdates_info).length; j++){
                        if (showsdates_info[j].id !== showsdates_info[i].id) {
                            let notselectedshowin_card = document.getElementById(showsdates_info[j].id);
                            notselectedshowin_card.classList.remove("shows-information__greycard");
                        }
                        else {
                            showinfo__card.classList.add("shows-information__greycard");
                        }
                    }
                })
            }
        })
    })
}

createShowInfoContainer("Shows");
createShowInfoContent();

appendShowInfoTitle__DSK();

GetRegister();
GetShowDates();