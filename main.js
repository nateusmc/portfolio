'use strict';

// Project Selector
let project1 = document.getElementsByClassName('project-1');
let project2 = document.getElementsByClassName('project-2');
let project3 = document.getElementsByClassName('project-3');
let project4 = document.getElementsByClassName('project-4');

function showProject1() {
  project1[0].style.display = 'flex';
  project2[0].style.display = 'none';
  project3[0].style.display = 'none';
  project4[0].style.display = 'none';
};

function showProject2() {
  project1[0].style.display = 'none';
  project2[0].style.display = 'flex';
  project3[0].style.display = 'none';
  project4[0].style.display = 'none';
};

function showProject3() {
  project1[0].style.display = 'none';
  project2[0].style.display = 'none';
  project3[0].style.display = 'flex';
  project4[0].style.display = 'none';
};

function showProject4() {
  project1[0].style.display = 'none';
  project2[0].style.display = 'none';
  project3[0].style.display = 'none';
  project4[0].style.display = 'flex';
};

// SlideShow Project 1
var project1SlideIndex = 1;
project1ShowSlides(project1SlideIndex);

// Next/previous controls
function project1PlusSlides(n) {
  project1ShowSlides(project1SlideIndex += n);
}

// Thumbnail image controls
function project1CurrentSlide(n) {
  project1ShowSlides(project1SlideIndex = n);
}

function project1ShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project1Slides");
  var dots = document.getElementsByClassName("project1Dot");
  if (n > slides.length) {project1SlideIndex = 1}
  if (n < 1) {project1SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[project1SlideIndex-1].style.display = "block";
  dots[project1SlideIndex-1].className += " active";
}

// SlideShow Project 2
var project2SlideIndex = 1;
project2ShowSlides(project2SlideIndex);

// Next/previous controls
function project2PlusSlides(n) {
  project2ShowSlides(project2SlideIndex += n);
}

// Thumbnail image controls
function project2CurrentSlide(n) {
  project2ShowSlides(project2SlideIndex = n);
}

function project2ShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project2Slides");
  var dots = document.getElementsByClassName("project2Dot");
  if (n > slides.length) {project2SlideIndex = 1}
  if (n < 1) {project2SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[project2SlideIndex-1].style.display = "block";
  dots[project2SlideIndex-1].className += " active";
}

// SlideShow Project 3
var project3SlideIndex = 1;
project3ShowSlides(project3SlideIndex);

// Next/previous controls
function project3PlusSlides(n) {
  project3ShowSlides(project3SlideIndex += n);
}

// Thumbnail image controls
function project3CurrentSlide(n) {
  project3ShowSlides(project3SlideIndex = n);
}

function project3ShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project3Slides");
  var dots = document.getElementsByClassName("project3Dot");
  if (n > slides.length) {project3SlideIndex = 1}
  if (n < 1) {project3SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[project3SlideIndex-1].style.display = "block";
  dots[project3SlideIndex-1].className += " active";
}

// SlideShow Project 4
var project4SlideIndex = 1;
project4ShowSlides(project4SlideIndex);

// Next/previous controls
function project4PlusSlides(n) {
  project4ShowSlides(project4SlideIndex += n);
}

// Thumbnail image controls
function project4CurrentSlide(n) {
  project4ShowSlides(project4SlideIndex = n);
}

function project4ShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("project4Slides");
  var dots = document.getElementsByClassName("project4Dot");
  if (n > slides.length) {project4SlideIndex = 1}
  if (n < 1) {project4SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[project4SlideIndex-1].style.display = "block";
  dots[project4SlideIndex-1].className += " active";
}