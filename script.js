// API_KEYに”取得したAPIキー”を記述
API_KEY = "29933b547a60f8b3d15024143c048f06";

$(function(){
  $('#btn').on('click',function(){
    // 入力された都市名でWebAPI荷天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType:'jsonp',
    }).done(function(data){
      // 通信成功
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fall(function(data){
      // 通信失敗
      alert('通信に失敗しました。');
    });
  });
});