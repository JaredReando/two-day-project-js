import { Haiku } from './../src/haiku';


describe('Haiku', function() {

  it("creates a new Haiku object", function() {
    let newHaiku = new Haiku("first", "second", "third");
    expect(newHaiku.lineOne).toEqual("first");
  });

  it("converts a string into an array from line breaks", function() {
    let newHaiku = new Haiku("first", "second", "third");
    let inputString = "this\nis\nstring";
    expect(newHaiku.newFromString(inputString)).toEqual(["this", "is", "string"]);
  });


});

// describe('checkAllRows', function() {
//
//   it('should return false for boards that contain a non-viable row, true for all valid rows', function() {
//     expect(checkAllRows(validBoard)).toEqual(true);
//     expect(checkAllRows(badBoard)).toEqual(false);
//   });
//
// });
//
// describe('checkAllColumns', function() {
//
//   it('should return false for boards that contain a non-viable row, true for all valid rows', function() {
//     expect(checkAllColumns(validBoard)).toEqual(true);
//     expect(checkAllColumns(badBoard)).toEqual(false);
//   });
//
// });
//
// describe('checkAllBoxes', function() {
//
//   it('should return false for boards that contain a non-viable row, true for all valid rows', function() {
//     expect(checkAllBoxes(validBoard)).toEqual(true);
//     expect(checkAllBoxes(badBoard)).toEqual(false);
//   });
//
// });
