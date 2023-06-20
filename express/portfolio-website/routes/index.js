/*Ricardo Zevallos
301214157
LAST UPDATED: 20/06/2023

*/


var express = require('express');
var router = express.Router();

// Routes

// Home
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome'
  });
});
router.get('/home', function(req, res, next) {
  res.render('index', {
    title: 'Welcome'
  });
});

// About
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About',
    description: 'My name is Ricardo Zevallos. I am currently a student at Centennial, I am currently enrolled in the software engineering technician program and am currently employed as a concierge. My resume is attached below!'
  });
});

// Contact
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

// Portfolio
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
    title: 'Portfolio',
    description: 'Hello, my name is Ricardo Zevallos and I have worked on various other projects while being in my Centennial Course. Unfortunately, I do not have photos of these projects as I saved them to my old computer and in the process of transferring my files from my hard drive to my SSD, the hard drive corrupted and I lost a lot of work and photos. This website itself is an assignment on using NodeJS and ExpressJS, and one part of the assignment is to always backup my work (something I should have done to begin with) so I do not have to worry about that being an issue. Anyways, I shall still explain some of the projects I have worked on but will provide photos of my dog George instead as I can no longer access those projects.'
  });
});

// Services Page
router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    description: 'This is a short list of services I can currently do.'
  });
});

module.exports = router;
