describe("Board", function() {

  var capitalize = function(word){
    return word[0].toUpperCase() + word.slice(1);
  };

  var verifyConflictTypes = function(expectedConflicts, matrix){
    var board = new Board(matrix);
    _.map('row col rooks majorDiagonal minorDiagonal queens'.split(' '), function(conflictType){
      var conflictDetected = board['hasAny' + capitalize(conflictType) + 'Conflicts']();
      var conflictExpected = _(expectedConflicts).contains(conflictType);
      expect(conflictDetected).to.be.equal(conflictExpected);
    });
  };

  it("should find non conflicts", function() {
    verifyConflictTypes([], [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });

  it("should find row conflicts", function() {
    verifyConflictTypes(['row', 'rooks', 'queens'], [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });

  it("should find column conflicts", function() {
    verifyConflictTypes(['col', 'rooks', 'queens'], [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });

  it("should find major diagonal conflicts", function() {
    verifyConflictTypes(['majorDiagonal', 'queens'], [
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });

  it("should find minor diagonal conflicts", function() {
    verifyConflictTypes(['minorDiagonal', 'queens'], [
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });

  // it("should traverse the solution space", function() {
  //   var board = [[0,0,0],[0,0,0],[0,0,0]];
  //   result = window.rookTraverse(board, 0);
  //   console.log(result);
  //   expect(result).to.eql([[1,0,0],[1,0,0],[1,0,0]]);
  // });

  it("should score a rook board properly", function() {
    var passingBoard = [[1,0,0],[0,1,0],[0,0,1]];
    var result = window.rookScore(passingBoard);
    expect(result).to.be.true;
    var failingBoard = [[1,0,0],[0,1,0],[0,1,0]];
    var failResult = window.rookScore(failingBoard);
    expect(failResult).to.be.false;
  });

});
