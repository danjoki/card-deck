const names = ["Spades", "Diamonds", "Hearts", "Clubs"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let number = 1;

names.forEach(function(name) {
    document.getElementById("demo").innerHTML += "<div class=\"col-sm-3\">";
    //document.getElementById("demo").innerHTML +=
    document.getElementById("demo").innerHTML += "<h2>" + name.toUpperCase() + "</h2>";
    document.getElementById("demo").innerHTML += "<ul class=\"list-group\">";
    values.forEach(function(value) {
        if (value === "A") {
            value = "Ace";
        } else if (value === "J") {
            value = "Jack";
        } else if (value === "Q") {
            value = "Queen";
        } else if (value === "K") {
            value = "King";
        }
        document.getElementById("demo").innerHTML += "<li class=\"list-group-item\">" +number++ + ":  " + value + " of " + name.toLowerCase() + "</li>";

        document.getElementById("demo").innerHTML += "</ul></div>";
    });
});