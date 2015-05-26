describe('isTriangle', function() {
  it("returns false if a triangle is invalid", function() {
    expect(isTriangle(2,2,8)).to.equal(false);
  });
});
