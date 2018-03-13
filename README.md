# Restaurant Reviews web app - Stage 1 
The original code was forked(duplicated) from the Udacity's [Mobile Web Specialist Stage 1](https://github.com/udacity/mws-restaurant-stage-1) repository.  

The starter code can be found in [starter](https://github.com/anastyn/restaurant-reviews-app/tree/starter) branch.

## Overview
### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

## Implementation
### Installing and building the project
Install Grunt
```
npm install -g grunt-cli
```

Install GraphicsMagick
```
http://www.graphicsmagick.org/download.html
```

Run 
```
npm install
```

Run the previously installed **Grunt** to generate responsive images
```
grunt
```

In order to run the application you have to install an http server.  
Python provides a simple http server which can be used for development.
Depending on your Python version run one of the following commands:

For Python 2 run
```
python -m SimpleHTTPServer 8000
```
For Python 3 run
```
python -m http.server 8000
```
