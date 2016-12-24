
Fullstack JavaScript Development with MongoDB, Node.js, React.js

commands for environment setup

a)git clone <remote url> fulljs
b)cd fulljs
c)git reset  --hard v1.1

setup environment

a)npm init and press enter for all default settings it will generate package.json

b)then npm install --save express (to install express in local)

c)then install mongodb driver npm i -S mongodb

d)then install react npm i -S react react-dom

e)then install dev dependencies like web pack 
   npm install --save-dev webpack


f)the above command led to an error failed to parse json
 tried npm cache clean                  -- and that did the trick and was able to install webpack

g)to support new js features not supported on old browsers install babel

npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react

h)change things in nodejs project a restart required to reflect the changes so we use nodemon to monitor files a do autorestart of node with changes

npm i -D nodemon

i)eslint will help to find issues with javascript
  npm i -D  eslint eslint-plugin-react babel-eslint

  j)update package json with start script and the main file to start

  k)create a src,api and public folder

curl http://localhost:8080/about.html in this example will show the string content in terminal before we test it in browsers

npm i -S ejs to bring ejs templating engine

had run npm install babel-preset-es2015 --save-dev inorder to make webpack -wd with npm run dev command

npm install babel-core babel-loader --save-dev
# For ES6/ES2015 support
npm install babel-preset-es2015 --save-dev

# If you want to use JSX
npm install babel-preset-react --save-dev

# If you want to use experimental ES7 features
npm install babel-preset-stage-0 --save-dev

npm install babel-polyfill --save

Applied solution at the link http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

npm i -S node-sass-middleware to setup sass middleware to compile to css 

npm install axios --> ajax library for remote url calls.