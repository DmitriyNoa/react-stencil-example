# How to add your stencil components:
- Publish your stencil component as an npm module.
- Install it in your project with **npm i [component_name] -S**
- To load our component into dev server and into build folder install copy-webpack-plugin  **npm i copy-webpack-plugin -D**
- Add to your webpack configs:
In case of create-react-app we have to eject the project to be able to modify webpack configurations.
```
$ npm run eject
```
In ./config/webpack.config.dev.js and ./config/webpack.config.prod.js files:
```
plugins: [
....
new CopyWebpackPlugin([{ from: './node_modules/z-product-card/dist', to: './z-product-card' }])
]
```
- Add your link to main JS file of your component to ./public/index.html
```
<script src="%PUBLIC_URL%/z-product-card/zlib.js"></script>
```
# Start this demo:
```
$ git clone https://github.com/DmitriyNoa/react-stencil-example.git
$ cd react-stencil-example
$ npm i
$ npm start
```