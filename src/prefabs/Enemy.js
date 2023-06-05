class Enemy extends Phaser.GameObjects.Image{
    constructor(scene, texture){
        super(scene, texture);
        scene.add.existing(this);
    }
    Enemy(scene){
        Phaser.GameObjects.Image.call(this,scene,0,0,'sprites', 'enemy')
    }
    update(){
        this.follower.t += ENEMY_SPEED * delta;
        path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
        if(this.follower.t >= 1){
            this.setActive(false);
            this.setVisible(false);
        }
    }
    startOnPath(){
        this.follower.t = 0;
        path.getPoint(this.follower.t, this.follower.vec);
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
    }
}