'use strict';

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
