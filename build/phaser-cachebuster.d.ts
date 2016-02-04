declare module Fabrique {
    module Plugins {
        /**
         * Let's change the type of the Phaser.Loader so we can add a cacheBuster property
         */
        interface CacheBustedLoader extends Phaser.Loader {
            cacheBuster: string;
        }
        /**
         * This here's the cacheBuser plugin. It patches the Phaser.Loader with a new transformUrl method.
         * This method takes the cacheBuster parameter into account when fabricating a new url.
         *
         * Due to how this methid is used in the Phaser.Loader, all assets well get appended with a query parameter.
         */
        class CacheBuster extends Phaser.Plugin {
            constructor(game: Phaser.Game, parent: PIXI.DisplayObject);
            private patchLoader();
        }
    }
}
