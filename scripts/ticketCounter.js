const contentTarget = document.querySelector(".customers");

let ticketCounter = 0;

contentTarget.innerHTML = `Total tickets purchase: ${ticketCounter}`;

export const ticketCounterGoUp = () => {
    ticketCounter++;
	contentTarget.innerHTML = `Total tickets purchased: ${ticketCounter}`;
};
