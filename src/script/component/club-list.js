import './club-item.js';

class ClubList extends HTMLElement{

    // shadow DOM
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set clubs(clubs){
        this._clubs = clubs;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = "";
        this._clubs.forEach(club => {
            const clubItemElement = document.createElement("club-item");
            clubItemElement.club = club;
            this.shadowDOM.appendChild(clubItemElement);
        })
    }

    // jika pencarian tidak ditemukan
    renderError(message){
        this.shadowDOM.innerHTML = `
            <style>
                .placeholder {
                    font-weight: lighter;
                    color: rgba(0,0,0,0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
            </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message} </h2>`;
    }

}


// definisikan custom element
customElements.define("club-list", ClubList);