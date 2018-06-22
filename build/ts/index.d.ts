import { Loader } from 'phaser';
export default class CacheBustedLoaderPlugin extends Loader.LoaderPlugin {
    cacheBuster: string;
    addFile(file: any): void;
}
