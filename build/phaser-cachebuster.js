/*!
 * phaser-cachebuster - version 1.0.0 
 * Simple Phaser plugin for adding a query parameter to assets URL's so that they can be 'cache busted'
 *
 * OrangeGames
 * Build at 04-02-2016
 * Released under MIT License 
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Fabrique;
(function (Fabrique) {
    var Plugins;
    (function (Plugins) {
        /**
         * This here's the cacheBuser plugin. It patches the Phaser.Loader with a new transformUrl method.
         * This method takes the cacheBuster parameter into account when fabricating a new url.
         *
         * Due to how this methid is used in the Phaser.Loader, all assets well get appended with a query parameter.
         */
        var CacheBuster = (function (_super) {
            __extends(CacheBuster, _super);
            function CacheBuster(game, parent) {
                _super.call(this, game, parent);
                this.patchLoader();
            }
            CacheBuster.prototype.patchLoader = function () {
                Object.defineProperty(Phaser.Loader, 'cacheBuster', {
                    value: null
                });
                Phaser.Loader.prototype.transformUrl = function (url, file) {
                    if (!url) {
                        return '';
                    }
                    if (this.cacheBuster !== null) {
                        url += '?v=' + this.cacheBuster;
                    }
                    if (url.match(/^(?:blob:|data:|http:\/\/|https:\/\/|\/\/)/)) {
                        return url;
                    }
                    else {
                        return this.baseURL + file.path + url;
                    }
                };
            };
            return CacheBuster;
        })(Phaser.Plugin);
        Plugins.CacheBuster = CacheBuster;
    })(Plugins = Fabrique.Plugins || (Fabrique.Plugins = {}));
})(Fabrique || (Fabrique = {}));
//# sourceMappingURL=phaser-cachebuster.js.map