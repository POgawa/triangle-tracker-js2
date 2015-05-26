describe('isTriangle', function() {
  it("returns false if a triangle is invalid", function() {
    expect(isTriangle(2,2,8)).to.equal(false);
  });
  it("returns true if a triangle is valid", function() {
    expect(isTriangle(2,2,2)).to.equal(true);
  });

});
