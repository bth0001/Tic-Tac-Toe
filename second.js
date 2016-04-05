$(document).ready(function(){
  var count=0;
  var auburn = '<img src="http://i.imgur.com/nGtYCT6.gif">'
  var bama = '<img src="http://i.imgur.com/Hbe73HY.png">'

$('.board').click('click', function(){
  if (count % 2 === 0){
    $(this).text('Auburn');
    checkWinner('Auburn');
    }
    else {
    $(this).text('Bama');
    checkWinner('Bama');
    }
    count++;
});

function checkWinner(player){
  if ($('.board').find('#1').text() !== ''){
   if ($('.board').find('#1').text() == $('.board').find('#2').text()) {
     if ($('.board').find('#1').text() == $('#3').text()) {
        alert('Game over! '+player+' is the winner!');
        $('#newGame').removeClass('invisible');
      }
    }
  }

 if ($('.board').find('#1').text() == $('.board').find('#4').text()) {
   if ($('.board').find('#1').text() == $('#7').text()) {
      alert('Game over! '+player+' is the winner!');
        $('#newGame').removeClass('invisible');
      }
    }

 if ($('.board').find('#1').text() == $('.board').find('#5').text()) {
   if ($('.board').find('#1').text() == $('#9').text()) {
      alert('Game over! '+player+' is the winner!');
        $('#newGame').removeClass('invisible');
    }
  }
        }

 if ($('.board').find('#2').text() !== ''){
   if ($('.board').find('#2').text() == $('.board').find('#5').text()) {
     if ($('.board').find('#2').text() == $('#8').text()) {
        alert('Game over! '+player+' is the winner!');
          $('#newGame').removeClass('invisible');
      }
    }
  }

 if ($('.board').find('#3').text() !== ''){
   if ($('.board').find('#3').text() == $('.board').find('#6').text()) {
     if ($('.board').find('#3').text() == $('#9').text()) {
        alert('Game over! '+player+' is the winner!');
        $('#newGame').removeClass('invisible');
      }
    }
  }

 if ($('.board').find('#3').text() == $('.board').find('#5').text()) {
    if ($('.board').find('#3').text() == $('#7').text()) {
      alert('Game over! '+player+' is the winner!');
      $('#newGame').removeClass('invisible');
    }
  }

 if ($('.board').find('#4').text() !== ''){
   if ($('.board').find('#4').text() == $('.board').find('#5').text()) {
     if ($('.board').find('#4').text() == $('#6').text()) {
        alert('Game over! '+player+' is the winner!');
        $('#newGame').removeClass('invisible');
      }
    }
  }

 if ($('.board').find('#7').text() !== ''){
   if ($('.board').find('#7').text() == $('.board').find('#8').text()) {
     if ($('.board').find('#7').text() == $('#9').text()) {
        alert('Game over! '+player+' is the winner!');
        $('#newGame').removeClass('invisible');
      }
    }
  }

function newGame() {
    var cell = document.getElementByClass('.cell');
    if (cell.innerHTML !== '') {
        cell.innerHTML = null;
        score = {
            'Auburn': 0,
            'Bama': 0
        };
        turn = 'Auburn';
        gridValue = 0;
    }
}
});
