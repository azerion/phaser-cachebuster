import {Boot} from 'phaser';
// import * as PluginManager from '';

class CacheBustedLoaderPlugin extends Boot.LoaderPlugin {
    private _cacheBuster: string = '';

    get cacheBuster() {
        return this._cacheBuster || '';
    }

    set cacheBuster(version: string) {
        this._cacheBuster = version;
    }

    public addFile(file: any): void {
        if (this.cacheBuster.toString().length > 0) {
            file.url += '?v=' + this.cacheBuster;
        }

        super.addFile(file);
    }
}

PluginManager.register('Loader', CacheBustedLoaderPlugin, 'load');