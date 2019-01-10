import { Haiku } from './haiku';


describe('new', function() {

  it("creates a new Haiku object", function() {
    let newHaiku = new Haiku ("first", "second", "third");
    expect(newHaiku.lineOne).toEqual("first");
  });

  // it("ignores invalid array values during check", function() {
  //   var sudokuRowFalse = [1,2,,4,5,,7,8,8]
  //   var sudokuRowTrue = [1,'s',3,4,'^',6,7,8,9]
  //   expect(viable(sudokuRowFalse)).toEqual(false)
  //   expect(viable(sudokuRowTrue)).toEqual(true)
  // });

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
