document.querySelector('footer').style.color = 'red';


// обработка кнопки
// отправка запроса на сервер (локально)
// fetch('/core/handler.php')

function generateRandomNumber() {
    return Math.floor(Math.random() * 10000001); 
  }
  
  let randomNum = generateRandomNumber();
  document.getElementById("randomNumber").innerHTML = randomNum;
  