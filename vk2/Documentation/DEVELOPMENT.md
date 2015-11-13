# DEVELOPMENT

The extension was developed and tested within a TYPO3 6.2 system. It is based on the [Fluid](https://wiki.typo3.org/Fluid) template engine an [Extbase](https://docs.typo3.org/typo3cms/ExtbaseFluidBook/). The frontend javascript code relies heavily on [OpenLayers 3](http://openlayers.org/). It further uses as a dependencies and build system the [Closure Library](https://developers.google.com/closure/library/) and the [Closure Compiler](https://developers.google.com/closure/compiler/). 

## Working with the Javascript code

To install the external dependencies of the library [npm](https://www.npmjs.com/) and [bower](http://bower.io/) can be used. For this go to the root folder `vk2-extension/vk2/` and run the following commands from your commandline:

	npm install
	
Installs all node modules which are used through the library:

	node_modules/bower/bin/bower install
	
This will install the external javascript dependencies. 

```
By default the extension will use only the production javascript libraries, means libraries delivered by CDN and minified. For developing it is often easier to use local libraries installed by bower. You can switch the URLs of the libraries in the `vk2-extension/vk2/Configuration/TypoScript/setup.txt` file.
```

The google closure library brings an own management system for javascript dependencies with it. This system is also used to management the javascript dependencies of the library in developing mode. The dependencies are therefor descriped in the file `vk2-extension/vk2/Resources/Public/src/vk2-deps.js`. 

If you change dependencies or add new files to library the deps files has to be updated. This can be done with the following command:

	python Resources/Public/lib/closure-library/closure/bin/build/depswriter.py --root_with_prefix="Resources/Public/src ../../../../src" > Resources/Public/src/vk2-deps.js
	
For building a minified version of the library the google closure compiler is used. Therefor the `extern` are saved in the directory `vk2-extension/vk2/Build/externs`. Also the compiler can be used with a [gulpfile](http://gulpjs.com/). The configuration therefor could be find in the `vk2-extension/vk2/gulpfile.js` file. It could be run via the following command:

	node_modules/gulp/bin/gulp.js 
	
The compiled version of the library could be found in the `vk2-extension/vk2/Resources/Public/dist/` directory.	
	
## Build Openlayers

To build an custom OpenLayers version run the following commands from the `vk2-extension/vk2/Resources/Public/lib/openLayers`

	npm install
	
	node tasks/build.js ../../../../Build/ol-vk2.json ../../dist/ol-vk2.js

With this commands you can build a debug version of OpenLayers. 

	node tasks/build.js config/ol-debug.json ./ol-debug.js
	
	


