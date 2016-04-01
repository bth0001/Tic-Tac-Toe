$(document).ready(function() {

  var $gameCells = $('.cell');
  var moves = ["", "", "", "", "", "", "", "", ""];
  var count = 0;
  var turn = 'X'

  $($gameCells).one('click', function() {
    $(this).html(turn);
    moves[this.id] = this.id;
    count++;
    moves[this.id] = (count % 2 == 0) ? turn ='X' : turn = 'O';
    console.log(moves, count);

  })

});
