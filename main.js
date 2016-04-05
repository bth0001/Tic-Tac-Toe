$(document).ready(function() {
  var auburn = '<img src="http://i.imgur.com/nGtYCT6.gif">'
  var bama = '<img src="http://i.imgur.com/Hbe73HY.png">'
  var cell = $('.cell');
  var count = 0;
  var ausnd = document.getElementById("snd");
  var uasnd = document.getElementById("snd1");

for (var i = 0; i < cell.length; i++){
  cell[i].addEventListener('click', setCount);
}

$('.newGame').on('click',function(){
    $('.cell').text('');
    count = 0;
    ausnd.pause();
    uasnd.pause();
  });

function setCount(){
  if(this.innerHTML !== ''){
    alert('Pick another Square')
  }else if(count % 2 == 0){
    count += 1;
    this.innerHTML = auburn;
    getWinner();
  }else if(count += 1){
    this.innerHTML = bama;
    getWinner();
  }
}

function getWinner(){
  if(cell[0].innerHTML === bama && cell[1].innerHTML === bama && cell[2].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }else if(cell[3].innerHTML === bama && cell[4].innerHTML  === bama && cell[5].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }else if(cell[6].innerHTML  === bama && cell[7].innerHTML  === bama && cell[8].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!')
  }

  else if(cell[0].innerHTML  === bama && cell[3].innerHTML  === bama && cell[6].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }else if(cell[1].innerHTML === bama && cell[4].innerHTML === bama && cell[7].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }else if(cell[2].innerHTML === bama && cell[5].innerHTML === bama && cell[8].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }

  else if(cell[0].innerHTML === bama && cell[4].innerHTML === bama && cell[8].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }else if(cell[6].innerHTML === bama && cell[4].innerHTML === bama && cell[2].innerHTML === bama){
    uasnd.play();
    alert('Bama Wins!');
  }

  else if(cell[0].innerHTML === auburn && cell[1].innerHTML === auburn && cell[2].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }else if(cell[3].innerHTML === auburn && cell[4].innerHTML  === auburn && cell[5].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }else if(cell[6].innerHTML  === auburn && cell[7].innerHTML  === auburn && cell[8].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!')
  }

  else if(cell[0].innerHTML  === auburn && cell[3].innerHTML  === auburn && cell[6].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }else if(cell[1].innerHTML === auburn && cell[4].innerHTML === auburn && cell[7].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }else if(cell[2].innerHTML === auburn && cell[5].innerHTML === auburn && cell[8].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }

  else if(cell[0].innerHTML === auburn && cell[4].innerHTML === auburn && cell[8].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }else if(cell[6].innerHTML === auburn && cell[4].innerHTML === auburn && cell[2].innerHTML === auburn){
    ausnd.play();
    alert('Auburn Wins!');
  }



  else if(count == 9){
    alert('Tie game! Hit the "New Game" button to play again!');
  }

}

});
