// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCE04vvZvdSvVs9ciASCTiPUnrBqUZolFQ',
    authDomain: 'aclopus-dev.firebaseapp.com',
    databaseURL: 'https://aclopus-dev.firebaseio.com',
    projectId: 'aclopus-dev',
    storageBucket: 'aclopus-dev.appspot.com',
    messagingSenderId: '70545307661'
  },
  // dev: https://us-central1-aclopus-dev.cloudfunctions.net local: http://localhost:5000/aclopus-dev/us-central1
  api: 'http://localhost:5000/aclopus-dev/us-central1',
};
