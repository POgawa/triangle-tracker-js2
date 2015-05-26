var isTriangle = function(side1, side2, side3) {
  if (side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) {
    return true;
  } else {
    return false;
  }

};

var triangleTracker = function(side1, side2, side3) {
  if (isTriangle(side1, side2, side3)) {

    if (side1 === side2 && side2 === side3) {
      return("equilateral")
    }
    else if (side1 !== side2 && side2 !== side3 && side1 !== side3 ) {
      return('scalene')
    } else {
      return 'isosceles'
    }
  } else {
    return "not a valid triangle"
  }
};
