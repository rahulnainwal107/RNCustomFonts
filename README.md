# RNCustomFonts
This repo is all about how to use custome fonts in your react-native project. This method works for you only if you are using react-native >= 0.60.<br/><br/>
Using react-native link command :</br>
Step - 1 : For this you need to create a folder with the name of assets in root of your project and a subfolder with the name of fonts and put all fonts in that folder that you gona use in your project.</br>
Step - 2 : Now create a new file with the name of react-native.config.js and do this :</br>
````
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts/'],
};
````
Step - 3 : Now you are almost there, you need to run react-native link or npx react-native link command and you are done.</br></br>

If you are using react-native <=0.59 then go for rnpm(react-native package manager).

