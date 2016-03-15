# Site Starter Kit
Site Starter Kit with webpack, stylus and autoprefixer.

![Site Starter Kit](https://github.com/Defite/site-starter-kit/blob/master/site-starter-kit.png)

## Installation

```
npm install
```

Stylus files are located in `app/stylus`. In order to put specific styl file on top of bundle.css, you must uncomment `require()` section and put styl file there. All images are in `app/img`, but you can change it's name.

## Load Webpack watcher

```
webpack -w
```

All changes will be in `public` folder.
