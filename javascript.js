const amount = document.querySelector("#amount");
const guests = document.querySelector("#guests");
const quality = document.querySelector("#quality");
const tipamount = document.querySelector("#tipAmount");

calculate = () => {
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    amount.value = "";
    guests.value = "";
    quality.value = "";
    if(tip === "Nan"){
    tipamount.textContent = "Tip €0 each";
    showTipamount();
    } else {
        tipamount.textContent = "Tip €" + tip + " each";
        showTipamount();
    }
}

showTipamount = () => {
    var x = document.querySelector("#tipAmount");
    x.className = "show";
    setTimeout(function(){x.className = x.className.replace("show", "");}, 3000);
}
