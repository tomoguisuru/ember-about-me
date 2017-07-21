/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Tomoguisuru",
    short_name: "tomoguisuru",
    theme_color: "#4388b0",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "./?utm_source=web_app_manifest",
    icons: [
      {
        "src": "images/icons/android-chrome-36x36.png",
        "sizes": "36x36",
      },
      {
        "src": "images/icons/android-chrome-48x48.png",
        "sizes": "48x48",
      },
      {
        "src": "images/icons/android-chrome-72x72.png",
        "sizes": "72x72",
      },
      {
        "src": "images/icons/android-chrome-96x96.png",
        "sizes": "96x96",
      },
      {
        "src": "images/icons/android-chrome-144x144.png",
        "sizes": "144x144",
      },
      {
        "src": "images/icons/android-chrome-192x192.png",
        "sizes": "192x192",
      },
      {
        "src": "images/icons/android-chrome-256x256.png",
        "sizes": "256x256",
      },
      {
        "src": "images/icons/android-chrome-384x384.png",
        "sizes": "384x384",
      },
      {
        "src": "images/icons/android-chrome-512x512.png",
        "sizes": "512x512",
      },
      {
        "src": "images/icons/favicon-16x16.png",
        "sizes": "16x16",
        "targets": ["favicon"]
      },
      {
        "src": "images/icons/favicon-32x32.png",
        "sizes": "32x32",
        "targets": ["favicon"]
      }

    ],
  };
};
