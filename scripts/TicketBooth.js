import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { FoodTicketHolders } from "./food/FoodTicketHolders.js";
import { GameTicketHolders } from "./games/GameTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolders.js";

const contentTarget = document.querySelector(".entry");
const eventHub = document.querySelector("#state-fair");

eventHub.addEventListener("click", (clickTarget) => {
	switch (clickTarget.target.id) {
		case "rideTicket":
			const rideEvent = new CustomEvent("rideTicketPurchased");
			eventHub.dispatchEvent(rideEvent);
			break;

        case "foodTicket":
            const foodEvent = new CustomEvent("foodTicketPurchased");
            eventHub.dispatchEvent(foodEvent);
            break;

        case "gameTicket":
            const gameEvent = new CustomEvent("gameTicketPurchased");
            eventHub.dispatchEvent(gameEvent);
            break;

        case "sideshowTicket":
            const sideEvent = new CustomEvent("sideshowTicketPurchased");
            eventHub.dispatchEvent(sideEvent);

        case "fullTicket":
            const fullPackageEvent = new CustomEvent("");

		default:
			break;
	}
});

export const TicketBooth = () => {
	contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
            <button id="fullTicket">Full Package Ticket</button>
        </div>
    `;
};

RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();