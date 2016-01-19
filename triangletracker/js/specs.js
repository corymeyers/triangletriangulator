describe('triangleClass', function() {
  it("is scalene if all sides are unequal", function() {
    expect(triangleClass(5,6,2)).to.equal(scalene);
  });

  it("is equilateral for if all sides are equal", function() {
    expect(triangleClass(5,5,5)).to.equal(equilateral);
  });

  it("is isosceles if only two sides are equal", function() {
    expect(triangleClass(5,5,5)).to.equal(Isoceles);
  });

});
