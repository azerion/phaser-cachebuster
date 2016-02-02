declare module Fabrique {
    /**
     * Plugins used by OG-Fabrique
     */
    module Plugins {
        /**
         * We overwrite the default Phaser.Game to expose the events to the game object, this is purely for typescript
         */
        interface CacheBustedLoader extends Phaser.Loader {
            cacheBuster: string;
        }
        class CacheBuster extends Phaser.Plugin {
            constructor(game: Phaser.Game, parent: PIXI.DisplayObject);
            private patchLoader();
        }
    }
}
