// EarthquakeScene.js
import Phaser from "phaser";

export default class EarthquakeScene extends Phaser.Scene {
  constructor() {
    super("game-scene" );

    this.lastQuizTime = 0;
    this.quizActive = false;
    this.quizCheckpoint = null;
    this.powerUpActive = false;
    this.player = null;
  }

  preload() {
    this.load.image("eq_bg", "/game-assets/bg_classroom.jpg");
    this.load.image("eq_quiz", "/game-assets/quiz-dialog-set.png",{
        frameHeight:100,
        frameWidth:100
    });
    this.load.image("eq_checkpoint", "/game-assets/checkpoint.jpg");

    this.load.spritesheet("eq_player", "/game-assets/talker.png", {
      frameWidth: 1000,
      frameHeight: 1000,
    });
    this.load.spritesheet("eq_fansprite", "/game-assets/fansprite.png", {
      frameWidth: 370,
      frameHeight: 220,
    });
  }

  create() {
    // Background
    const bg=this.add.image(0, 0, "eq_bg").setOrigin(0, 0).setScrollFactor(true);

    const scaleX = this.scale.width / bg.width;
const scaleY = this.scale.height / bg.height;

bg.setScale(scaleX, scaleY);

    // Props
    this.add.image(90, 380, "eq_quiz").setOrigin(0, 0).setScale(0.2);
    // this.add.image(710, 380, "eq_quiz").setOrigin(0, 0).setScale(-0.2, 0.2);

    // Player
    this.player = this.add.sprite(100, 350, "eq_player").setScale(0.5);

     this.anims.create({
      key: "eq_player",
      frames: this.anims.generateFrameNumbers("eq_player", {
        frames: [0,1,2,3]
      }),
      frameRate: 4,
      repeat: -1,
    });

    // Fan Animation
    this.anims.create({
      key: "eq_fanrotate",
      frames: this.anims.generateFrameNumbers("eq_fansprite", {
        frames: [0, 5],
      }),
      frameRate: 8,
      repeat: -1,
    });

    const eqFan = this.add
      .sprite(430, 60, "eq_fansprite")
      .setScale(0.8)
      .setRotation(Phaser.Math.DegToRad(25));

    eqFan.play("eq_fanrotate");
    this.player.play("eq_player",true);
  }

  update(time) {
    if (time > this.lastQuizTime + 45000 && !this.quizActive) {
      this.createCheckpoint();
      this.lastQuizTime = time;
    }
  }

  createCheckpoint() {
    if (this.quizCheckpoint) this.quizCheckpoint.destroy();

    const { width, height } = this.scale;
    this.quizCheckpoint = this.physics.add.sprite(width / 2, height - 150, "eq_checkpoint");
    this.quizCheckpoint.setImmovable(true);
    this.quizCheckpoint.body.allowGravity = false;

    // Shake effect
    this.cameras.main.shake(1000, 0.02);

    this.physics.add.overlap(this.player, this.quizCheckpoint, () => {
      if (!this.quizActive) this.startQuiz();
    });
  }

  startQuiz() {
    this.quizActive = true;
    this.physics.pause();

    const { width, height } = this.scale;
    const overlay = this.add.rectangle(0, 0, width, height, 0x000000, 0.7)
      .setOrigin(0)
      .setScrollFactor(0)
      .setDepth(10);

    const question = "What is 2 + 2?";
    const options = ["3", "4", "5"];

    const questionText = this.add.text(width / 2, height / 3, question, {
      fontFamily: "carrier_command",
      fontSize: width / 40,
      color: "#FFFFFF",
      align: "center",
    }).setOrigin(0.5).setDepth(11);

    options.forEach((opt, i) => {
      this.add.text(width / 2, height / 2 + i * 50, opt, {
        fontFamily: "carrier_command",
        fontSize: width / 50,
        backgroundColor: "#333",
        color: "#FFF",
      })
        .setOrigin(0.5)
        .setInteractive()
        .setDepth(11)
        .on("pointerdown", () => {
          this.handleAnswer(opt === "4", overlay, questionText);
        });
    });
  }

  handleAnswer(correct, overlay, questionText) {
    overlay.destroy();
    questionText.destroy();
    this.children.list.forEach((c) => {
      if (c.type === "Text" && c.depth === 11) c.destroy();
    });

    if (correct) {
      this.givePowerUp();
    } else {
      this.add.text(this.scale.width / 2, this.scale.height / 2, "Wrong! No Power-up!", {
        fontFamily: "carrier_command",
        fontSize: this.scale.width / 45,
        color: "#FF0000",
      }).setOrigin(0.5).setDepth(11);

      setTimeout(() => {
        this.children.list.forEach((c) => {
          if (c.depth === 11) c.destroy();
        });
      }, 1500);
    }

    this.quizActive = false;
    this.physics.resume();
  }

  givePowerUp() {
    this.powerUpActive = true;
    this.player.setScale(1.5);

    this.add.text(this.scale.width / 2, this.scale.height / 2, "Correct! Power-up!", {
      fontFamily: "carrier_command",
      fontSize: this.scale.width / 45,
      color: "#00FF00",
    }).setOrigin(0.5).setDepth(11);

    setTimeout(() => {
      this.children.list.forEach((c) => {
        if (c.depth === 11) c.destroy();
      });
    }, 1500);
  }
}
