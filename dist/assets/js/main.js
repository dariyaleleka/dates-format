
$(function() {
 
    function cb(start, end) {
    
      $('#reportrange span').html(start.format('ll') + ' - ' + end.format('ll'));
      $('.result-button p').html(start.format('D MMMM, YYYY') + ' - ' + end.format('D MMMM, YYYY'));
      console.log('Диапазон дат: ' + start.format('D MMMM, YYYY') + ' - ' + end.format('D MMMM, YYYY'))
      
    }
    moment();
    moment.locale('ru');
    console.log(moment.locale('ru'))
  
    cb(moment(),moment());
  
  
    $('#reportrange').daterangepicker({
      "parentEl": "common",
      "lang":'ru',
      "alwaysShowCalendars": true,
      "showDropdowns": true,
      ranges: {
        'Сегодня': [moment(), moment()],
        'Вчера': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Последние 7 дней': [moment().subtract(6, 'days'), moment()],
        'Последние 30 дней': [moment().subtract(29, 'days'), moment()],
        'Этот месяц': [moment().startOf('month'), moment().endOf('month')],
        'Прошлый месяц': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
     
      "locale": {
        "lang": "ru",
        "customRangeLabel": 'Выбрать диапазон',
        "format": "DD/MM/YYYY",
        "separator": " - ",
        "applyLabel": "Обновить",
        "cancelLabel": "Отмена",
        "fromLabel": "от",
        "toLabel": "до",
        "daysOfWeek": [
            "Вс",
            "Пн",
            "Вт",
            "Ср",
            "Чт",
            "Пт",
            "Сб"
        ],
        "monthNames": [
            "Январь", 
            "Февраль", 
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ],
        "firstDay": 1
    }
    }, cb);
  
  });
  
  
  var xhr = new XMLHttpRequest();
  var url = "../assets/js/data.json";
    
  xhr.onreadystatechange = function() {
  
    if (xhr.readyState == 4 && xhr.status == 200) {
  
      var jsonData = JSON.parse(xhr.responseText); 
  
      showArtists(jsonData);
    }
  };
  
  
  xhr.open("GET", url, true);
  xhr.send();
  
  
  function showArtists(data) {
    var output = "<div class='container-rows_clients'>"; 
  
    for (var i in data.persons) {
      output += "<ul>"; 
      output += "<li>" + "<img src= 'assets/img/ellipse.png' >" + "</li>"; 
      output += "<li class='users'>" + "<p>" + data.persons[i].personname+ "</p>" + "<p class='email'>" + data.persons[i].useremail + "</p>"+"</li>"; 
      output += "<li>" + data.persons[i].registrationdate + "</li>"; 
      output += "<li>" + data.persons[i].lastactivity + "</li>"; 
      output += "<li>" + data.persons[i].lastactions + "</li>"; 
      output += "<li>" + data.persons[i].actions + "</li>"; 
      output += "<li>" + "<img src= 'assets/img/pen.png' >" + "</li>"; 
      output += "<li>" + "<img src= 'assets/img/garbage.png' >" + "</li>"; 
      output += "</ul>"
    }
    
    output += "</div>"; 
  
    document.getElementById("usersList").innerHTML = output;
  }
  
  
  document.addEventListener('DOMContentLoaded', function(){ 
    let block = document.getElementById("filter-container-results");
    let mainBlock = document.getElementById("result-button");
    let chapter =  document.querySelectorAll('.ranges ul  li');
  
    [].forEach.call(chapter,function(el){
      el.addEventListener('click', function (e) {
        console.log('work');
        if(block.style.display === 'none') {
          
                  block.style.display = 'none';
                  mainBlock.style.display = 'none';
                  block.style.padding  = "23px";
                  block.style.height  = "100px";
              }
              else {
  
                  block.style.padding  = "23px";
                  block.style.height  = "100px";
                  block.style.display = 'block';
                  mainBlock.style.display = 'flex';
              }
          
      });
    });
  
    let aplyButton  =  document.querySelector('.applyBtn').addEventListener("click", function(){
    
        console.log('work');
            if(block.style.display === 'none') {
          
                  block.style.display = 'none';
                  mainBlock.style.display = 'none';
                  block.style.padding  = "23px";
                  block.style.height  = "100px";
            }
            else {
  
                  block.style.padding  = "23px";
                  block.style.height  = "100px";
                  block.style.display = 'block';
                  mainBlock.style.display = 'flex';
            }
          
     });
    
  
    document.getElementById('cross').addEventListener("click", function(){
      document.getElementById("result-button").style.display = "none";
      document.getElementById("filter-container-results").style.padding  = "0";
      document.getElementById("filter-container-results").style.height  = "0";
      
    });
  });