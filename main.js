$(document).ready(function() {
  var auburn = '<img src="http://i.imgur.com/nGtYCT6.gif">'
  var bama = '<img src="http://i.imgur.com/ETEHO8Q.jpg">'
  var cell = $('.cell');
  var resetBtn = $('#reset-btn');
  var moves = ["", "", "", "", "", "", "", "", ""];
  var count = 0;
  var turn = 'X'

for (var i = 0; i < cell.length; i++){
  cell[i].addEventListener('click', setCount);
}

resetBtn.addEventListener('click', resetBoard);

function setCount(){
  if(this.innerHTML !== ''){
    alert('Pick another Square')
  }else if(count % 2 == 0){
    count += 1;
    this.innerHTML = auburn;
    getWinner();
  }else {
    count += 1;
    this.innerHTML = bama;
    getWinner();
  }
}

function getWinner(){
  if(cell[0].innerHTML === auburn && cell[1].innerHTML === auburn && cell[2].innerHTML === auburn){
    alert('Auburn Wins!');
  }else if(cell[3].innerHTML === auburn && cell[4].innerHTML  === auburn && cell[5].innerHTML === auburn){
    alert('Auburn Wins!');
  }else if(cell[6].innerHTML  === auburn && cell[7].innerHTML  === auburn && cell[8].innerHTML === auburn){
    alert('Auburn Wins!')
  }

   else if(cell[0].innerHTML  === auburn && cell[3].innerHTML  === auburn && cell[6].innerHTML === auburn){
    alert('Auburn Wins!');
  }else if(cell[1].innerHTML === auburn && cell[4].innerHTML === auburn && cell[7].innerHTML === auburn){
    alert('Auburn Wins!');
  }else if(cell[2].innerHTML === auburn && cell[5].innerHTML === auburn && cell[8].innerHTML === auburn){
    alert('Auburn Wins!');
  }

   else if(cell[0].innerHTML === auburn && cell[4].innerHTML === auburn && cell[8].innerHTML === auburn){
    alert('Auburn Wins!');
  }else if(cell[6].innerHTML === auburn && cell[4].innerHTML === auburn && cell[2].innerHTML === auburn){
    alert('Auburn Wins!');
  }

   else if(cell[0].innerHTML === bama && cell[1].innerHTML === bama && cell[2].innerHTML === bama){
    alert('Bama Wins!');
  }else if(cell[3].innerHTML === bama && cell[4].innerHTML  === bama && cell[5].innerHTML === bama){
    alert('Bama Wins!');
  }else if(cell[6].innerHTML  === bama && cell[7].innerHTML  === bama && cell[8].innerHTML === bama){
    alert('Bama Wins!')
  }

   else if(cell[0].innerHTML  === bama && cell[3].innerHTML  === bama && cell[6].innerHTML === bama){
    alert('Bama Wins!');
  }else if(cell[1].innerHTML === bama && cell[4].innerHTML === bama && cell[7].innerHTML === bama){
    alert('Bama Wins!');
  }else if(cell[2].innerHTML === bama && cell[5].innerHTML === bama && cell[8].innerHTML === bama){
    alert('Bama Wins!');
  }

   else if(cell[0].innerHTML === bama && cell[4].innerHTML === bama && cell[8].innerHTML === bama){
    alert('Bama Wins!');
  }else if(cell[6].innerHTML === bama && cell[4].innerHTML === bama && cell[2].innerHTML === bama){
    alert('Bama Wins!');
  }

function resetBoard(){
  for(var i = 0; i < cell.length; i++){
    cell[i].innerHTML = '';
  }
  count = 0;
}

}

});
