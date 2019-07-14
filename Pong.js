var oneCvs = document.getElementById("one");
var twoCvs = document.getElementById("two");
var threeCvs = document.getElementById("three");
var fourCvs = document.getElementById("four");
var one = oneCvs.getContext("2d");
var two = twoCvs.getContext("2d");
var three = threeCvs.getContext("2d");
var four = fourCvs.getContext("2d");

var paddles = [];
var paddleNumber = 1;
for (var i = 0; i < 8; i++) {
    paddles.push(new Paddle(paddleNumber));
    paddleNumber += 1;
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

    if (a.run == false && b.run == false && c.run == false && d.run == false) {
        
        // Four progress and four children are created
        var nextGen = [a.winner, b.winner, c.winner, d.winner];
        for (var i = 0; i < 4; i++) {
            nextGen.push(new Paddle(paddleNumber));
            paddleNumber += 1;
        }

        [nextGen[4].wih, nextGen[5].wih] = crossover(nextGen[0].wih, nextGen[1].wih);
        [nextGen[4].who, nextGen[5].who] = crossover(nextGen[0].who, nextGen[1].who);
        [nextGen[6].wih, nextGen[7].wih] = crossover(nextGen[2].wih, nextGen[3].wih);
        [nextGen[6].who, nextGen[7].who] = crossover(nextGen[2].who, nextGen[3].who);

        nextGen[5] = new Paddle(nextGen[5].num);
        nextGen[5].wih = mutate(nextGen[0].wih);
        nextGen[5].who = mutate(nextGen[0].who);
        nextGen[7] = new Paddle(nextGen[7].num);

        // Mutate new generation
        for (var i = 4; i < 8; i++) {
            if (Math.random() > 0.65) {
                nextGen[i].wih = mutate(nextGen[i].wih);
                nextGen[i].who = mutate(nextGen[i].who);
            }
        }


        a.startGame(nextGen[0], nextGen[1]);
        b.startGame(nextGen[2], nextGen[3]);
        c.startGame(nextGen[4], nextGen[5]);
        d.startGame(nextGen[6], nextGen[7]);


    }

    requestAnimationFrame(runner);
}

runner();