window.onload = function() {
  document.addEventListener('deviceready', initApp);
};

function initApp() {
  //--- load side panel into index.html ---
  $.ajax('panel.html')
    .done(function(sidepanel) {
      $('#mypanel').html(sidepanel);
      $('[data-role=panel]').panel();
      $('[data-role=listview]').listview();
    })
    .fail(function() {
      console.log('ajax panel error');
    });
  getHomeContent();
}

function getHomeContent() {
  $.ajax('home.html')
    .done(function(home) {
      $('.ui-content').html(home);
      $('[data-role=listview]').listview();
    })
    .fail(function() {
      console.log('ajax home content error');
    });
}

function loadHomeContent() {
  getHomeContent();

  window.scrollTo(0, 0);
  $('#top-title').html('PhoneGap AdMob');
}

function load1Content() {
  $('.ui-content').load('1.html');
  window.scrollTo(0, 0);
}

function load2Content() {
  $('.ui-content').load('2.html');
  window.scrollTo(0, 0);
}

function load3Content() {
  $('.ui-content').load('3.html');
  window.scrollTo(0, 0);
}

function load4Content() {
  $('.ui-content').load('4.html');
  window.scrollTo(0, 0);
}

function handleOptions() {
  console.log('ok... from handleOptions()');
  loadHomeContent();
}
