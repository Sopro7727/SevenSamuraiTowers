class Start extends Phaser.Scene{
    constructor(){
        super('startScene');
    }
    preload(){

    }
    create(){
        this.scene.start('playScene');
    }
    update(){

    }
}