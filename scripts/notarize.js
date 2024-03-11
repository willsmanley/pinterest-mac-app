const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
    return;

  // TODO: remove this line once we have developer cert in keychain
//   return;

  const { electronPlatformName, appOutDir } = context;  

  // darwin is internal name for macOS. don't notarize for windows/linux builds
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: 'com.pinterest.app',
    appPath: `${appOutDir}/${appName}.app`,
    // TODO: check for developer certificate in keychain
  });
};