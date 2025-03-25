import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.ball = null;
        this.leftPaddle = null;
        this.rightPaddle = null;
        this.ballInMotion = false;
        this.cursors = null;
        this.wasd= null;

    }

    preload() {
        this.load.image("background", "assets/background.png");
        this.load.image("ball", "assets/ball.png");
        this.load.image("paddle", "assets/paddle.png");
    }

    create() {
        this.add.image(WIDTH/2, HEIGHT/2, "background").setScale(0.8,0.8);
       this.ball= this.physics.add.image(WIDTH/2, HEIGHT/2, "ball").setScale(0.05,0.05).refreshBody();
       this.ball.setCollideWorldBounds(true);
       this.ball.setBounce(1,1);
       this.input.keyboard.on("keydown-SPACE", this.startBall, this);
        this.leftPaddle = this.physics.add.image(50,HEIGHT/2, "paddle");
        this.rightPaddle = this.physics.add.image(974,HEIGHT/2, "paddle");
       
       
       this.physics.add.collider(this.ball,this.leftPaddle, this.hitpaddle, null, this);
       this.physics.add.collider(this.ball,this.rightPaddle, this.hitpaddle, null, this);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down:Phaser.Input.Keyboard.KeyCodes.S
            }
        );
       this.leftscoreText = this.add.text(100,50,'0', {fontsize : '50px'});
       this.rightscoreText = this.add.text(924,50,'0', {fontsize : '50px'});
    }

    update() {
       this.input.keyboard.on("keydown-SPACE", this.startBall, this);

       if(this.wasd.up.isDown && this.leftPaddle.y >=0){
        this.leftPaddle.y -=5;
       }
       if(this.wasd.down.isDown && this.leftPaddle.y <=HEIGHT){
        this.leftPaddle.y +=5;
       }
       if(this.cursors.up.isDown && this.rightPaddle.y >=0){
        this.rightPaddle.y -=5;
       }
       if(this.cursors.down.isDown && this.rightPaddle.y <=HEIGHT){
        this.rightPaddle.y +=5;
       }
       if(this.ball.x > WIDTH - margin){

       }
       startBall()
       {
           if(!this.ballInMotion){
               this.ball.setVelocity(200,200);
               this.ballInMotion = true;
           }
       }
   
   }

    }
   