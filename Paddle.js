class Paddle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 50;
        this.vel = 0;
        
        // Inputs: (this.x - ball.x), (this.centre - ball.centre)
        // Outputs: up, down

        // From 2 to 6
        this.wih = [
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
            [randomNumber(100, -100), randomNumber(100, -100)],
         ];

        // From 6 to 2
        this.who = [
            [randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), ],
            [randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), randomNumber(100, -100), ]
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

    }
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}