var oneCvs = document.getElementById("one");
var twoCvs = document.getElementById("two");
var threeCvs = document.getElementById("three");
var fourCvs = document.getElementById("four");
var one = oneCvs.getContext("2d");
var two = twoCvs.getContext("2d");
var three = threeCvs.getContext("2d");
var four = fourCvs.getContext("2d");

var paddles = [];
for (var i = 0; i < 8; i++) {
    paddles.push(new Paddle());
}

var a = new Game(one, oneCvs, paddles[0], paddles[1]);
var b = new Game(two, twoCvs, paddles[2], paddles[3]);
var c = new Game(three, threeCvs, paddles[4], paddles[5]);
var d = new Game(four, fourCvs, paddles[6], paddles[7]);

function runner() {

    a.draw();
    b.draw();
    c.draw();
    d.draw();

    a.click();
    b.click();
    c.click();
    d.click();

    requestAnimationFrame(runner);
}

runner();