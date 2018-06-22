//WE loaded version.js before this script, so when this scrip is loaded, var version is available for usage

var game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 500,
    height: 300,
    scene: {
        preload: preload,
        create: create
    },
    title: 'Phaser cachebuster example',
    banner: {
        text: '#ffffff',
        background: [
            '#fff200',
            '#38f0e8',
            '#00bff3',
            '#ec008c'
        ],
        hidePhaser: true
    }
});

function preload(){
    this.load.cacheBuster = version;
    this.load.image('square', 'image.png');
}

function create(){
    this.add.image(5, 5, 'square');
}