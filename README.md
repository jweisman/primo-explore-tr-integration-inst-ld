# primo-explore-tr-integration-inst-ld
Customization package for the `LD` view of the `TR_INTEGRATION_INST` demo integration Primo instance. 

## Access
Use this URL to access the view:
https://tr-integration.alma.exlibrisgroup.com/discovery?vid=TR_INTEGRATION_INST:LD&lang=en

## Setup

1. Clone the [Primo development environment](https://github.com/ExLibrisGroup/primo-explore-devenv) and install dependencies:

   ```
   git clone https://github.com/ExLibrisGroup/primo-explore-devenv.git
   cd primo-explore-devenv
   npm install
   ```

2. Set `PROXY_SERVER` in `gulp/config.js` to this value:

   ```
   var PROXY_SERVER = 'https://tr-integration.alma.exlibrisgroup.com';
   ```

3. Clone this package into `primo-explore/custom`:

   ```
   git clone https://github.com/jweisman/primo-explore-tr-integration-inst-ld.git primo-explore/custom/TR_INTEGRATION_INST-LD
   ```

4. Install dependencies in the package
   ```
   cd primo-explore/custom/TR_INTEGRATION_INST-LD
   npm install
   ```

## Start the UI
```
gulp run --view TR_INTEGRATION_INST-LD --ve --browserify
```

## Deploy the package
```
gulp create-package --browserify
```
And upload/deploy using the View Management screen in Alma