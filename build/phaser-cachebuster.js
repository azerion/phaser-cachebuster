/*!
 * phaser-cachebuster - version 2.0.0 
 * Simple Phaser plugin for adding a query parameter to assets URL's so that they can be 'cache busted'
 *
 * Azerion
 * Build at 19-03-2019
 * Released under MIT License 
 */

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PhaserCachebuster;
(function (PhaserCachebuster) {
    /**
     * This here's the cacheBuser plugin. It patches the Phaser.Loader with a new transformUrl method.
     * This method takes the cacheBuster parameter into account when fabricating a new url.
     *
     * Due to how this methid is used in the Phaser.Loader, all assets well get appended with a query parameter.
     */
    var CacheBuster = (function (_super) {
        __extends(CacheBuster, _super);
        function CacheBuster(game, parent) {
            var _this = _super.call(this, game, parent) || this;
            _this.patchLoader();
            return _this;
        }
        CacheBuster.prototype.patchLoader = function () {
            Object.defineProperty(Phaser.Loader, 'cacheBuster', {
                value: null
            });
            Phaser.Loader.prototype.transformUrl = function (url, file) {
                //No url? return!
                if (!url) {
                    return '';
                }
                //Cachebusted string is added?
                //But only if it is set, and we aren't loading the asset trough a data URI
                if (this.cacheBuster !== null && null === url.match(/^(data:)/)) {
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
    }(Phaser.Plugin));
    PhaserCachebuster.CacheBuster = CacheBuster;
})(PhaserCachebuster || (PhaserCachebuster = {}));
//# sourceMappingURL=phaser-cachebuster.js.map