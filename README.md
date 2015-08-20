summmer skiesss
============

# What is this?
this is a little app that generates colorful, sky-like gradients, and saves them to .pngs

created for for a for a print submission to a zine.

# How does it work?

## Install dependencies

this is primarily a nodejs-based app. It also depends on phantomjs.

First run:

```
npm install
```

## Preview

to preview the visualization, run:
```
gulp
```

the code that generates the gradient lives in app/js/main.js

## Save files

the phantomjs code that saves the files lives in save-images/read-image.js

run
```
node app.js
```
to save files to save-images/output/


