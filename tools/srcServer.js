import express from 'express';
import webpack from 'webpack';
import mongoose from 'mongoose';
import path from 'path';
import bodyParser from 'body-parser';
import Recipe from './models/recipe';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);
const router = express.Router();

mongoose.connect('mongodb://localhost/cookbook_app', () => {
  console.log('DB connected');
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  hot: true
}));

app.use(require('webpack-hot-middleware')(compiler, {
  reload: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

router.route('/recipes')
  .get((req, res) => {
    Recipe.find((err, recipes) => {
      if (err) {
        res.send(err);
      }
      res.send(recipes);
    });
  })
  .post((req, res) => {
    new Recipe(req.body).save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Recipe Added to DB!' });
    });
  });

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Starting dev server on port: ', port);
  }
});
