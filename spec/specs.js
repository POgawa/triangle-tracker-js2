describe('isTriangle', function() {
  it("returns false if a triangle is invalid", function() {
    expect(isTriangle(2,2,8)).to.equal(false);
  });

  it("returns true if a triangle is valid", function() {
    expect(isTriangle(2,2,2)).to.equal(true);
  });
});

describe('triangleTracker', function() {
  it("returns equilateral for an equilateral triangle", function() {
    expect(triangleTracker(2,2,2)).to.equal("equilateral");
  });

  it("returns that a triangle is not a valid triangle", function() {
    expect(triangleTracker(1,1,6)).to.equal("not a valid triangle");
  });

  it("returns scalene if the triangle is scalene", function() {
    expect(triangleTracker(1,2,3)).to.equal("scalene");
  });

  it("returns isoscles if the triangle is isoceles", function() {
    expect(triangleTracker(3,3,6)).to.equal("isosceles");
  });

});
