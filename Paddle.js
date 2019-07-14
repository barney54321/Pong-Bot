class Paddle {
    constructor(num) {
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 50;
        this.vel = 0;
        this.num = num;
        
        // Inputs: (this.centre - ball.centre)
        // Outputs: up, down

        // From 1 to 8
        this.wih = [
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
         ];

        // From 8 to 2
        this.who = [
            [randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), ],
            [randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), ]
        ];
    }

    draw(ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    click(ball) {
        this.calculate(ball);
        this.y += this.vel;
    }

    calculate(ball) {
        var inputs = transpose([this.y + this.height / 2 - ball.y - ball.height / 2, ball.y ]);
        var hiddenOutput = matrixMultiply(this.wih, inputs);
        var hiddenResult = applySigmoid(hiddenOutput);
        var outputs = matrixMultiply(this.who, hiddenResult);
        var result = applySigmoid(outputs);
        if (result[0][0] > 0.5) {
            this.vel = -2;
        } else if (result[1][0] > 0.5) {
            this.vel = 2;
        } else {
            this.vel = 0;
        }
    }
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}