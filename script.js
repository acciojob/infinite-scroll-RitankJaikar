//your code here!
const infiList= document.querySelector("#infi-list");

let itemCount = 1;

function addItems(num) {
	for(let i=1; i<=num; i++) {
		const li= document.createElement("li");
		li.innerText= `Item ${itemCount++}`;
		infiList.append(li);
	}
}

addItems(10);

infiList.addEventListener("scroll", () => {
	//infiList.scrollTop- number of pixels that the content of the element has been scrolled vertically
	//infiList.clientHeight- height of the visible area of the scrollable element
	//infiList.scrollHeight- total height of the content inside
	//The expression checks whether the sum of the current vertical scroll position (scrollTop) and the height of the visible area (clientHeight) is greater than or equal to the total height of the content (scrollHeight).
	if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
	    addItems(10);
	}
})




