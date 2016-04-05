$(document).ready(function() {
  var auburn = '<img src="http://i.imgur.com/nGtYCT6.gif">'
  var bama = '<img src="http://i.imgur.com/Hbe73HY.png">'
  var cell = $('.cell');
  var count = 0;
  var turn = 'X'

for (var i = 0; i < cell.length; i++){
  cell[i].addEventListener('click', setCount);
}

$('.newGame').on('click',function(){
    $('.cell').text('');
    count = 0
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
  }else{
    count >= 9;
    alert('Draw!');
  }
}

function getWinner(){
  if(cell[0].innerHTML === auburn && cell[1].innerHTML === auburn && cell[2].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!');
  }else if(cell[3].innerHTML === auburn && cell[4].innerHTML  === auburn && cell[5].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!');
  }else if(cell[6].innerHTML  === auburn && cell[7].innerHTML  === auburn && cell[8].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!')
  }

   else if(cell[0].innerHTML  === auburn && cell[3].innerHTML  === auburn && cell[6].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!');
  }else if(cell[1].innerHTML === auburn && cell[4].innerHTML === auburn && cell[7].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!');
  }else if(cell[2].innerHTML === auburn && cell[5].innerHTML === auburn && cell[8].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!');
  }

   else if(cell[0].innerHTML === auburn && cell[4].innerHTML === auburn && cell[8].innerHTML === auburn){
    document.getElementById('snd').play();
    alert('Auburn Wins!');
  }else if(cell[6].innerHTML === auburn && cell[4].innerHTML === auburn && cell[2].innerHTML === auburn){
    $('#snd').play()
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
}

});

