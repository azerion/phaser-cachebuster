Phaser Cachebuster
================
Simple Phaser plugin for adding a query parameter to assets URL's so that they can be 'cache busted'. Now also for v3.

Cache busting?
--------------

A cache-buster is a unique piece of code that prevents a browser from reusing an asset it has already seen and cached, or saved, to a temporary memory file.

The cache-buster doesn’t stop a browser from caching the file, it just prevents it from reusing it. In most cases, this is accomplished with nothing more than a random number inserted into the element tag on each load. The random number makes every call to the asset look unique to the browser and therefore prevents it from associating the tag with a cached file, forcing a new call to the server.

In for this plugin we do the same for Phaser. The Loader uses a shared method for each asset to get the correct URL. We override this to also add a unique number for cache busting. You control this unique number, so you decide when a fresh asset should be loaded from the server.

Getting Started
---------------
First you want to get a fresh copy of the plugin. You can get it from this repo or from npm, ain't that handy.
```
npm install @orange-games/phaser-cachebuster --save-dev
```


Usage
-----

### Load the plugin
In order to load the plugin, you just make sure it's imported
```javascript
import CacheBustedLoader from '@orange-games/phaser-cachebuster';
```
Or include it in your html
```html
<script src="https://cdn.jsdelivr.net/npm/@orange-games/phaser-cachebuster/build/phaser-cachebuster.min.js"></script>
```

The plugin will patch your Phaser Loader with the changed methods.

### Setting the cachebuster
The loader has been patched with a cacheBuster property, which is a generic string that can be set by you! When set, the Phaser Loader will append all url's with the string you specified as a query parameter

```javascript
//So in your scene, you just do something like:
this.load.cacheBuster = Date.now().toString();
```

Best practice
-------------
There are some best practices revolving cache busting and the usage of this plugin. It's nice that, when using this plugin, all your assets are beeing cache busted. But you also need to worry about your scripts beeing cached.

In that regard we advise you to also dynamicly load your scripts with a query parameter behind them. At Orange Games we use a setup that is similar to what you see in the example.

It boils down to have a seperate javascript file, that contains nothing else but a  variable version, that can be used for cache busting queryparameters.

In our code we load this file first, with a queryparamter equal to the current timestamp, in 99% of the cases this means a fresh version will be received.

Then we append this version to the game source files we load, and in the game we use this version again for cache busting the assets.

[Anyway, head on over to the example and check it out](https://github.com/orange-games/phaser-cachebuster/blob/master/example/index.html).


Credits
-------
Credits to whoever invented cache busting, or query parameters, or cache headers.


Disclaimer
----------
We at OrangeGames just love playing and creating awesome games. We aren't affiliated with Phaser.io. We just needed some awesome cache busting in our awesome HTML5 games. Feel free to use it for de-caching your own awesome games!

Phaser Cachebuster is distributed under the MIT license. All 3rd party libraries and components are distributed under their
respective license terms.