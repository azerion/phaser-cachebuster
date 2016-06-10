//WE loaded version.js before this script, so when this scrip is loaded, var version is available for usage
var game = new Phaser.Game(500, 300, Phaser.AUTO, '', { preload: preload, create: create});

function preload(){
    // add plugins in one of the states e.g. preload or init
    game.plugins.add(Fabrique.Plugins.CacheBuster);

    game.load.cacheBuster = version;
    game.load.image('square', 'image.png');
}

function create(){
    game.add.image(5, 5, 'square');
}