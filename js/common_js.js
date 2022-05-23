
  "use strict";

function stor_count_exs() {
 
  let count_exs = document.getElementById('count_common_exs').value // кол-во примеров
  
  localStorage.setItem('stor_count_exs', count_exs) // сохранили в localStorage
  // alert(count_exs)
  
  document.getElementById("question_right_answers").hidden = false
  document.getElementById("input_count_right_exs").hidden = false
  document.getElementById("button_right_answers").hidden = false
  
}

function stor_right_count_exs() {
  let count_right_exs = document.getElementById('input_count_right_exs').value // кол-во правильных примеров
  localStorage.setItem('stor_right_count_exs', count_right_exs) // сохранили в localStorage

  document.getElementById("div_before_start").hidden = false

  setTimeout(function(){
    window.location.href = 'html/math_exs.html';
  }, 3 * 1000);
}