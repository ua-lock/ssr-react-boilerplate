# SSR React Boilerplate

Boilerplate project with integrated a back-end Express server rendering a React front-end view.

## How to start

Open your command line, then clone this repository:

    $ git clone https://github.com/ua-lock/ssr-react-boilerplate.git

Now, navigate to the cloned folder and install it's dependencies:

    $ cd ssr-react-boilerplate
    $ yarn install

or

    $ cd ssr-react-boilerplate
    $ npm install

Finally, run the development script:

    $ yarn dev

or

    $ npm run dev

By default, it's set to listen to port 5454. Open a new browser tab and type in `localhost:5454`, or change the port to your preference at `/ssr-react-boilerplate/server.js`.

## Known issues

- Currently, there's no build script, but creating one is as simple as adding the line `"build":"webpack -p"` to the scripts block.
- Still figuring out why the assets (css, js) aren't properly gzip compressed by the express middleware. I have it working on another project and will soon fix it here.

## To-do

- Maybe include an webpack plugin to handle automatic exclusion of unnecessary .js output for the style profile. Not yet sure if it's worth adding another package to handle a simple `rm dist/styles.js`.
- Make better instructions (e.g this file) for application performance.
- Make the sample app less stupid
