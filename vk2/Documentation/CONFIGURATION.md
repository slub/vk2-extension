# Configuration

The TYPO3 extension could be configured via a FlexForm from within the TYPO3 backend. Therefor go in the page tree to WEB>PAGE and choose the page where you have installed the `Virtual Map Forum 2.0 Extension`. Click then edit and go to the Plugin tab.

In the Plugin tab you got a couple options:

### RealURL active

This says the frontend code (javascript) if it should assume speaking urls or not. A lot of power of the application lies in the client code and therefor the client often decides where to go. Therefor it has to know if the backend uses realURL or not.

### URL Elastic Search

[ElasitcSearch](https://www.elastic.co/) is the central search index used by the application. It is also used by the georeference backend to publish results. Define here the ElasticSearch endpoint.

### Georeferencing active

This parameter tells the client code if georeference is active. It is used for a couple of client decisions and has to be in sync with the `Type` settings.

### Type

The `Virtual Map Forum 2.0 Extension` can me run in two modes. The `Search and Visualization` allows user to search and display georeference maps. It doesn't support the georeferencing of them, so there has to be now georeference backend. Further because of missing georeferencing is also doesn't need a user authentification. The mode `Search, Visualization and Georeferencing` futher allows the georeferencing of maps. Therefor also a georeference backend has to be set.

### Georeference backend

Defines the endpoint of the georeferencing backend. The TYPO3 extension routes requests regarding this georeferencing directly to this endpoint and is tightly bind to it.

### Dynamic WMS URL

This is also only necessary when georeferencing is active. It defines the URL of the dynamic wms, which is used in the user history application.
