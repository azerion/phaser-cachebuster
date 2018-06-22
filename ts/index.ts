import {Loader, Plugins} from 'phaser';
// import * as PluginManager from '';

let cacheBuster = '';

export default class CacheBustedLoaderPlugin extends Loader.LoaderPlugin {
    get cacheBuster() {
        return cacheBuster || '';
    }

    set cacheBuster(version: string) {
        cacheBuster = version;
    }

    public addFile(file: any): void {
        if (!Array.isArray(file)) {
           file = [file];
        }

        if (this.cacheBuster.toString().length > 0) {
            (<Loader.File[]>file).forEach((f: Loader.File) => {
                f.url += '?v=' + cacheBuster;
            });
        }

        super.addFile(file);
    }
}

Plugins.PluginCache.register('Loader', CacheBustedLoaderPlugin, 'load');