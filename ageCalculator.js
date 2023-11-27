

let calcBtn = document.getElementById("calculate");
let input = document.getElementById("input");

calcBtn.onclick = function(){
   let value = input.value.trim();

   if(value === ""){
    alert("You must enter a date.");
    return;
   }
   let day = value[8] + value[9];
   let month = value[5] + value[6];
   let year = value[0] + value[1] + value[2] + value[3];
   const d = new Date();
   let currMonth = d.getMonth();
   let currYear = d.getFullYear();
   let currDay = d.getDate();

   let diffMonth = currMonth + 1 - month;
   let diffYear = currYear - year;
   let diffDay = currDay - day;

   let para = document.getElementById("para");
   para.style.color = "white";
   para.style.margin = "20px 0px";
   para.innerHTML  = "You are " + "<span style = 'color: yellow;'>" + diffYear + " years, </span>" + "<span style = 'color: yellow;'>" + diffMonth + " months</span> and " +"<span style = 'color: yellow;'>" + diffDay + " days </span> old";

}