class Game {

    constructor(ctx, cvs, paddle1, paddle2) {
        this.ctx = ctx;
        this.cvs = cvs;
        this.startGame(paddle1, paddle2);
    }

    startGame(paddle1, paddle2) {
        this.paddle1 = paddle1;
        this.paddle2 = paddle2;
        this.paddle1.x = 0;
        this.paddle1.y = this.cvs.height / 2 - this.paddle1.height / 2;
        this.paddle2.x = this.cvs.width - this.paddle2.width;
        this.paddle2.y = this.cvs.height / 2 - this.paddle2.height / 2;
        this.ball = new Ball(this.cvs, paddle1, paddle2);
        this.run = true;
        this.winner = null;
    }

    draw() {

        this.ctx.fillStyle = "#000000";
        this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);

        this.paddle1.draw(this.ctx);
        this.paddle2.draw(this.ctx);

        this.ball.draw(this.ctx);
    }

    click() {

        if (this.run == true) {

            this.paddle1.click(this.ball);
            this.paddle2.click(this.ball);

            this.ball.click();

            if (this.ball.x + this.ball.width < this.paddle1.width + this.paddle1.x) {
                // Player 2 wins
                this.run = false;
                this.winner = this.paddle2;
            } else if (this.ball.x > this.paddle2.x) {
                // Player 1 wins
                this.run = false;
                this.winner = this.paddle1;
            }

        } 

    }
}