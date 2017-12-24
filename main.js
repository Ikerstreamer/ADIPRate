(function() {
    'use strict';


    var node = document.createElement("span");
    node.style.display = "inline-block";
    $("#infinityPoints2")[0].parentNode.appendChild(node);
    $("#infinityPoints2")[0].setAttribute("class", "");
    node.parentNode.setAttribute("class", "IP");
    node.parentNode.style.position = "absolute";
    node.parentNode.style.left = "62%";
    node.parentNode.style.width = "250px";
    window.bestippm = 0;
    window.bestip = 0;
    window.bestmin = 0;
    window.bestbulk = 0;
    var reset = document.createElement("button");
    reset.onclick = function() {
        bestippm = 0;
    };
    reset.innerHTML = "Reset";
    $("#infinityPoints2")[0].parentNode.appendChild(reset);
    setInterval(function() {
        var ippm = $("#averagerun")[0].innerHTML.split(" ").reverse()[1];
        var ippm2 = $("#run1")[0].innerHTML.split(" ").reverse()[1];
        if (player.thisInfinityTime > 1 && gainedInfinityPoints() / player.thisInfinityTime > bestippm) {
            bestippm = gainedInfinityPoints() / player.thisInfinityTime;
            bestip = gainedInfinityPoints();
            bestmin = player.overXGalaxies;
            bestbulk = player.autobuyers[9].bulk;
        }
        node.innerHTML = "Last: " + ippm2 + "/min<br>Current IP rate: " + shorten(gainedInfinityPoints() / player.thisInfinityTime600) + "/min<br>Best IP amount: " + shorten(bestip) + "<br>Best IP rate: " + shorten(bestippm600) + "/min<br>Best min: " + bestmin + "<br>Best bulk: " + bestbulk;
    }, 100);
    /window.priorityOrderOld=Object.assign(priorityOrder,{});
    window.priorityOrder = function() {
        priorityOrderOld();
        document.getElementById("bigcrunch").click();
    };
    /
})();
