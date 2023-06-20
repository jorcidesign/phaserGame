import { Example } from "./scenes/Example";



const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    backgroundColor: '#fff',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);