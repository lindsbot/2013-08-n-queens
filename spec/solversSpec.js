describe("solvers", function() {
  window.displayBoard = function(){};

  describe('findNRooksSolution()', function(){

    it('finds a valid solution for n of 0-8', function(){
      _.range(1, 8).map(function(n){
        var solutionBoard = new Board(findNRooksSolution(n));
        expect(solutionBoard.hasAnyRooksConflicts()).to.be.equal(false);
      });
    });

  });

  // describe('countNRooksSolutions()', function(){

  //   it('finds the number of valid solutions for n of 0-8', function(){
  //     _.range(1, 8).map(function(n){
  //       var solutionCount = countNRooksSolutions(n);
  //       var expectedSolutionCount = [1, 1, 2, 6, 24, 120, 720, 5040][n];
  //       expect(solutionCount).to.be.equal(expectedSolutionCount);
  //     });
  //   });

  // });

  // describe('findNQueensSolution()', function(){

    // it('finds a valid solution for n of 0-8', function(){
    //   // _.range(1, 8).map(function(n){
    //   //   var solutionBoard = new Board(findNQueensSolution(n));
    //   //   expect(solutionBoard.hasAnyQueensConflicts()).to.be.equal(false);
    //   // });
    //   var solutionBoard = window.findNQueensSolution(5);
    //   console.log('solution!!!!!!!!!!!!!!!!!!!' + solutionBoard);
    //   expect(window.queenScore(solutionBoard, 4)).to.be.equal(true);

    // });

  // });

  describe('countNQueensSolutions()', function(){

    it('finds the number of valid solutions for n of 0-8', function(){
      _.range(1, 8).map(function(n){
        var solutionCount = countNQueensSolutions(n);
        var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92][n];
        expect(solutionCount).to.be.equal(expectedSolutionCount);
      });
    });

  });

  it('should return some boards', function() {
    var board = window.makeBoard(0);
    var result = window.queenTraverse(board);
    console.log(result);
    expect(result.length).to.be.equal(10);
  });

});
