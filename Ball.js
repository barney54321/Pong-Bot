class Ball {
    constructor(cvs, paddle1, paddle2) {
        this.x = cvs.width / 2;
        this.y = cvs.height / 2;
        this.velX = -3;
        this.velY = Math.random() * 4 - 2;
        this.width = 8;
        this.height = 8;
        this.cvs = cvs;
        this.paddle1 = paddle1;
        this.paddle2 = paddle2;
    }

    draw(ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    click() {
        if (this.y + this.velY < 0) {
            this.velY *= -1;
        } else if (this.y + this.velY > this.cvs.height - this.height) {
            this.velY *= -1;
        }

        if (this.x + this.velX < this.paddle1.x + this.paddle1.width && this.y + this.height >= this.paddle1.y && this.y < this.paddle1.y + this.paddle1.height) {
            this.velX *= -1;
            this.velX += 0.2;
            this.velY *= 1.1;
            if (Math.abs(this.velY) < 1) {
                this.velY = 1;
            }
        } else if (this.x + this.velX + this.width > this.paddle2.x && this.y + this.height >= this.paddle2.y && this.y < this.paddle2.y + this.paddle2.height) {
            this.velX *= -1;
            this.velX -= 0.2;
            this.velY *= 1.1;
            if (Math.abs(this.velY) < 1) {
                this.velY = 1;
            }
        } 

        this.y += this.velY;
        this.x += this.velX;
    }
}