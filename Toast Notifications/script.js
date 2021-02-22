const btn = document.getElementById("btn");
const container = document.getElementById("container");
let count = 0;
btn.addEventListener("click", () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    if(count % 2 == 0){

    notif.innerText = "Heyy All! Hope you are safe there";
    count = count+1;
}
else{
	notif.innerText = "Stay Home Stay Safe !! ";
    count = count+1;
}

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}
