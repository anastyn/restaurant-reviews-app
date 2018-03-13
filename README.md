# Restaurant Reviews web app - Stage 1 
The original code was forked(duplicated) from the Udacity's [Mobile Web Specialist Stage 1](https://github.com/udacity/mws-restaurant-stage-1) repository.  

The starter code can be found in [starter](https://github.com/anastyn/restaurant-reviews-app/tree/starter) branch.

## Overview
### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality. 

## Implementation

The modified application is also deployed to the GitHub Pages:

[https://anastyn.github.io/restaurant-reviews-app/](https://anastyn.github.io/restaurant-reviews-app/) 

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

## Implemented features

1) Configured Google Maps to use a custom API key.
2) Configured Grunt with several plugins to create responsive images of various sizes.
3) Implemented responsive mobile-first design. Fixed the page layouts and added several media query breakpoints.
4) Added several Google Web fonts.
5) Improved accessibility for people with disabilities:

    - added alt attributes to the images
    - added ARIA labels to the select elements
    - improved colour contrast to conform to Web Content Accessibility Guidelines
    - changed font sizes
    
6) Styled the restaurant review cards.
7) Made the app available offline by implementing a Service Worker and by caching all resources and data. Added an overlay to show an error message if Google Maps are not available.