# Install

The extension mainly relies on javascript code. The following document described the necessary steps to build a production version of this extension.

## Client

At first we have to install bower, which is used as javascript package system. For this run `npm install` in the root folder. After that run `node_modules/bower/bin/bower install` to install the necessary javascript libraries. 

By default the extension uses the local js libraries. In case of a production instance the extension consume use as many libraries as possible from CDN, for a better using of browser caching mechanism.

### Build Openlayers

As next step we have to build an OpenLayers version. If we want to use the hole library we are running the following commands in the sub directory `Resources/Public/lib/openlayers`

	npm install
	
	node tasks/build.js config/ol-debug.json ./ol-debug.js
	
This will build as and OpenLayers 3 library.

### Build and Developing the VK2 Code

The javascript code of the vk2 extension is mainly based on OpenLayers and Google Closure Library. As build system it further uses the plovr compiler, which could be find with further build tools and configuration files in `Build/`

The plovr tool is run with configuration tools which describe the necessary compilation options. For more information see [plovr configuration parameter](http://code.google.com/p/plovr/)

	java -jar Build/plovr-81ed862.jar build Build/vk2-min.json
	
Also an important command for developing is the updating of the vk2-deps file. The file is necessary for proper working of the Google Closure Library class loader system. It is updated via:

	python Resources/Public/lib/closure-library/closure/bin/build/depswriter.py --root_with_prefix="Resources/Public/src ../../../../src" > Resources/Public/src/vk2-deps.js
