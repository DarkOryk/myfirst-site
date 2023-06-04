fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=11')
.then(res => res.json())
.then (data => ActualCours(data));



function ActualCours (data) {
    
document.getElementById("APIresultsUSD_buy").innerHTML = data[1].buy;
document.getElementById("APIresultsUSD_sell").innerHTML = data[1].sale;

document.getElementById("APIresultsEUR_buy").innerHTML = data[0].buy;
document.getElementById("APIresultsEUR_sell").innerHTML = data[0].sale;
}
    