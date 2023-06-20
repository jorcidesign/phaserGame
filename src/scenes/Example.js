export class Example extends Phaser.Scene
{
    player;
    cursors;
    walls;

    preload ()
    {
        this.load.image('block', '/src/assets/circle.png');
        this.load.image('wall','/src/assets/wall.png');
    }

    create ()
    {
        this.cursors = this.input.keyboard.createCursorKeys();

        

        this.player = this.physics.add.image(400, 300, 'block');
        
        this.walls = this.physics.add.image(120,200,'wall');
        this.player.setCollideWorldBounds(true);
        this.walls.setImmovable(true); 
        this.walls.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, this.walls);
    }

    update ()
    {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-300);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(300);
        }

        if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-300);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(300);
        }
    }
}

