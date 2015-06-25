# isomorphic-articles

> Isomorphic react application using flux and react-router

## Running This

```sh
npm install -g browserify watchify nodemon
npm install
```

and in two separate consoles

```sh
npm watch
```

```sh
npm start
```

Then open your browser to `localhost:8080` and enjoy.
Node will auto-restart, but browser needs to be reloaded manually. This is to make the build system as small as possible. 

## How it works

### Babel compilation
First, on server there's `babel/register` require hook to allow full ES6/7. For decorators and Class statics, there's `stage:0` set in `.babelrc`. On frontend, we use `babel/polyfill`. 

### Server-side rendering
On server, rendering is accomplished by following code:
```js
alt.bootstrap(JSON.stringify(this.locals.data || {}));
const node = React.renderToString(React.createElement(handler));
var iso = new Iso();
iso.add(node, alt.flush());
this.render('layout', {html: iso.render()});
```
Frontend routes are mirrores in `routes.iso.js` and for each route, data that should go into stores are saved to `this.locals.data`. Alt stores are *bootstrapped* with those data, and serialized to html using `iso.render`. Alt is a singleton, so there should be no async code between `alt.bootstrap` and `alt.flush`. Otherwise, weird stuff will happen.

On client, stores serialized to HTML by iso are *bootstrapped* to alt.
```js
Iso.bootstrap(function (state, _, container) {
  alt.bootstrap(state);
  Router.run(reactRoutes, Router.HistoryLocation, function (Handler) {
    let node = React.createElement(Handler);
    React.render(node, container);
  });
});
```

### Functionality
1. It should be possible to create new articles from home route `'/'` and see them immediatelly.
2. When I press reload on main route `'/'`, HTML from server should contain all articles. Articles should also be in stores at this point, so that new articles go seamlessly to the store as well.
3. When I reload the application on the `'/login'` route, no articles will be preloaded from server. However, when I then navigate (SPA style) to `Articles`, articles should be loaded with AJAX. 

When all 3 criteria are satisfied, isomorphic application is working correctly.
