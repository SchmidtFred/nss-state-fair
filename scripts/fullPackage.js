const contentTarget = [
	document.querySelector(".rides"),
	document.querySelector(".food"),
	document.querySelector(".games"),
	document.querySelector(".sideshow")
];
const eventHub = document.querySelector("#state-fair");

export const FullTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", customEvent => {
        contentTarget.forEach(target => {
            target.innerHTML += '<div class="person bigSpender"></div>';
        })
    })
}