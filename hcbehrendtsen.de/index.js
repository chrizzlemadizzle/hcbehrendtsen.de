setTimeout(() => {
    var elem = document.getElementById("test3");
    elem.style.color = "red";
    elem.innerHTML = "red";
}, 2000);

var count = 0;

setInterval(() => {
    document.getElementById("test4").innerHTML = count;
    count++;
}, 1000);
