/*!
 * phaser-cachebuster - version 1.0.0 
 * Simple Phaser plugin for adding a query parameter to assets URL's so that they can be 'cache busted'
 *
 * OrangeGames
 * Build at 02-02-2016
 * Released under MIT License 
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Fabrique;
(function (Fabrique) {
    /**
     * Plugins used by OG-Fabrique
     */
    var Plugins;
    (function (Plugins) {
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