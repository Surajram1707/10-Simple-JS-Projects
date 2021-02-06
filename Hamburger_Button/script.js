const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
 var count =0;
btn.addEventListener("click", () => {

	if(count %2!=0){

    nav.classList.toggle("active");
    btn.innerHTML ="☰";
    btn.classList.toggle("active");
    count++;
    }

    else{
    nav.classList.toggle("active");
    btn.innerHTML ="X";
    btn.classList.toggle("active");
    count++;
    }

});
