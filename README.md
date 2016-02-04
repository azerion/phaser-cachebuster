Phaser Cachebuster
================
Simple Phaser plugin for adding a query parameter to assets URL's so that they can be 'cache busted'.

Cache busting?
--------------

A cache-buster is a unique piece of code that prevents a browser from reusing an ad it has already seen and cached, or saved, to a temporary memory file.

The cache-buster doesn’t stop a browser from caching the file, it just prevents it from reusing it. In most cases, this is accomplished with nothing more than a random number inserted into the element tag on each load. The random number makes every call to the asset look unique to the browser and therefore prevents it from associating the tag with a cached file, forcing a new call to the server.

In for this plugin we do the same for Phaser. The Loader uses a shared method for each asset to get the correct URL. We override this to also add a unique number for cache busting. You control this unique number, so you decide when a fresh asset should be loaded from the server.

Getting Started
---------------
First you want to get a fresh copy of the plugin. You can get it from this repo or from npm, ain't that handy.
```
npm install phaser-cachebuster --save-dev
```

Next up you'd want to add it to your list of js sources you load into your game
```html
<script src="node_modules/phaser-cachebuster/build/phaser-cachebuster.js"></script>
```

Usage
-----

### Load the plugin
You still need to load the plugin in your game. This is done just like any other plugin in Phaser.
```javascript
game.plugins.add(Fabrique.Plugins.CacheBuster);
```
The plugin will patch your Phaser Loader with the changed methods.

### Setting the cachebuster
The loader has been patched with a cacheBuster property, which is a generic string that can be set by you! When set, the Phaser Loader will append all url's with the string you specified as a query parameter

```javascript
game.load.cacheBuster = Date.now().toString();
```


Changelog
---------
### 1.0.1
* Initial release

Disclaimer
----------
We at OrangeGames just love playing and creating awesome games. We aren't affiliated with Phaser.io. We just needed some awesome cache busting in our awesome HTML5 games. Feel free to use it for de-caching your own awesome games!