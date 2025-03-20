// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle () {
  // input
  const baseLengthOfTriangle = parseInt(document.getElementById('base-length-of-triangle').value)
  const heightOfTriangle = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const areaOfTriangle = (baseLengthOfTriangle * heightOfTriangle) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}
