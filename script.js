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
	//infiList.scrollTop- this value will be 0.
	//infiList.clientHeight- represents the height of the visible area of the scrollable element
	if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
	    addItems(10);
	}
})




