import 'zone.js/dist/zone-node';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import * as fs from 'fs';

const document = fs.readFileSync(__dirname + '/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle').AppServerModuleNgFactory;

enableProdMode();
const app = express();
// Point static path to dist
// app.use(express.static(__dirname + '/dist-server/'));

app.get('**', (req, res) => {
  const url = req.path;
  const opts = {
    document: document,
    url: url,
    extraProviders: [
      { provide: 'request', useValue: req }
    ]
  };
  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => {
      res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
      res.send(html);
    });
});

export let lookyweb = functions.https.onRequest(app);
