function ExecuteScript(strId)
{
  switch (strId)
  {
      case "63IKgNKrHu0":
        Script1();
        break;
      case "5tjISxqav8j":
        Script2();
        break;
      case "5Uxgu6e3s2l":
        Script3();
        break;
      case "5cCa6ot7BBK":
        Script4();
        break;
      case "60qepl3dM0J":
        Script5();
        break;
      case "5u2e4VuRvDu":
        Script6();
        break;
      case "6kWl5j33zvF":
        Script7();
        break;
      case "6Eq65c9G1DJ":
        Script8();
        break;
      case "5kdS62EdXhg":
        Script9();
        break;
      case "6rH9jjc4PFP":
        Script10();
        break;
      case "6XHaZFScnJe":
        Script11();
        break;
      case "6BH79ouNb9C":
        Script12();
        break;
      case "6EfKh5Mpu2L":
        Script13();
        break;
      case "6HUpqpobCyI":
        Script14();
        break;
      case "6qhJiy2MwSp":
        Script15();
        break;
      case "67HW9zgc9Pl":
        Script16();
        break;
      case "5eIMZ3KzXGc":
        Script17();
        break;
      case "5ysmMVIOvCb":
        Script18();
        break;
      case "6Jr39st9GOf":
        Script19();
        break;
      case "6hfh9cWKM2o":
        Script20();
        break;
      case "5ZbQ4ngQMmD":
        Script21();
        break;
      case "6Cn7g1cchFb":
        Script22();
        break;
      case "6kydmK6EykO":
        Script23();
        break;
      case "61r9vFXRhqU":
        Script24();
        break;
      case "6fqU1JH46Lb":
        Script25();
        break;
      case "6WlXTHpPqFq":
        Script26();
        break;
      case "5yJZJavIjRX":
        Script27();
        break;
      case "5j6l9mGU2oq":
        Script28();
        break;
      case "6oBlVne5C1F":
        Script29();
        break;
      case "6eF3io8g3nT":
        Script30();
        break;
      case "5qorLJee5l3":
        Script31();
        break;
      case "6g4FIwZpJCH":
        Script32();
        break;
      case "6gKyD3HcasT":
        Script33();
        break;
      case "693j8xbVVvZ":
        Script34();
        break;
      case "5dVsKcONQSr":
        Script35();
        break;
      case "6FSnyfPSf5S":
        Script36();
        break;
      case "6RqMwskwPs1":
        Script37();
        break;
      case "6mgqsfsZ41l":
        Script38();
        break;
      case "5YDv8PahOcN":
        Script39();
        break;
      case "5VSCNkM3iwz":
        Script40();
        break;
      case "5sIemCWq1Sg":
        Script41();
        break;
      case "6qmkrQAHyoI":
        Script42();
        break;
      case "6CDmirRSnEY":
        Script43();
        break;
      case "6jSgJRM31Y6":
        Script44();
        break;
      case "5ZvRTmiLCuO":
        Script45();
        break;
      case "5aziyNO1Cwv":
        Script46();
        break;
      case "67T2lGfaeXv":
        Script47();
        break;
      case "6LCxRgbUcUH":
        Script48();
        break;
      case "6roJKughfta":
        Script49();
        break;
      case "5pfH72PeFTc":
        Script50();
        break;
      case "5mzXE1C39Dp":
        Script51();
        break;
      case "6WAJYWEiY4s":
        Script52();
        break;
      case "6AP9U2RD06a":
        Script53();
        break;
      case "6bZLvr1FaXe":
        Script54();
        break;
      case "5u5GKwzyncK":
        Script55();
        break;
      case "6jdl5IaejJT":
        Script56();
        break;
      case "6dq32U3InI4":
        Script57();
        break;
      case "5w641WH6yce":
        Script58();
        break;
      case "6acNG8mrBwk":
        Script59();
        break;
      case "5jRq8l2XgRY":
        Script60();
        break;
      case "6dyCW4IXguH":
        Script61();
        break;
      case "6KSnabvq9XR":
        Script62();
        break;
      case "6ZU6tqEbuu1":
        Script63();
        break;
      case "5wMAX35rfMZ":
        Script64();
        break;
      case "64vtb0zLPcc":
        Script65();
        break;
      case "6TJhWNdexIe":
        Script66();
        break;
      case "6pDubnjFZmr":
        Script67();
        break;
      case "6Yit9x8sM32":
        Script68();
        break;
      case "5sTZaQp1DCm":
        Script69();
        break;
      case "6la9MNzDFcI":
        Script70();
        break;
      case "6WUZKbViE1I":
        Script71();
        break;
      case "6FyE0QdBoTM":
        Script72();
        break;
      case "6MtrGXRbq4g":
        Script73();
        break;
      case "67OU7IGveG1":
        Script74();
        break;
      case "6f2oMZIFmJV":
        Script75();
        break;
      case "6RhQfH1aXIS":
        Script76();
        break;
      case "61PurHdIuqh":
        Script77();
        break;
      case "6m0RYGIrWbP":
        Script78();
        break;
      case "6CIf60gGpeQ":
        Script79();
        break;
      case "6QZTYzZZmw1":
        Script80();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var statusMati = player.GetVar("MusikMati");

// 1. Inisialisasi Musik Latar (Hanya dibuat 1 kali selama gim berjalan)
if (window.musikGame == undefined) {
    window.musikGame = new Audio("lagu_latar.mp3"); 
    window.musikGame.loop = true; 
    window.musikGame.volume = 0.5; // Volume 50% (bisa diubah antara 0.1 sampai 1.0)
}

// 2. Cek status variabel MusikMati saat slide dimulai
if (statusMati == true) {
    window.musikGame.pause();
} else {
    window.musikGame.play();
}
}

function Script2()
{
  var player = GetPlayer();
var statusMati = player.GetVar("MusikMati");

if (window.musikGame != undefined) {
    if (statusMati == true) {
        window.musikGame.pause();
    } else {
        window.musikGame.play();
    }
}
}

function Script3()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script4()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script5()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script6()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script7()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script8()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script9()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script10()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script11()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script12()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script13()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script14()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script15()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script16()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script17()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script18()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script19()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script20()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script21()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script22()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script23()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script24()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script25()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script26()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script27()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script28()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script29()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script30()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script31()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script32()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script33()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script34()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("time", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script35()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script36()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script37()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script38()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script39()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv1", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script40()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script41()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script42()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script43()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script44()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script45()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script46()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script47()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script48()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv2", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script49()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script50()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script51()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv2", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script52()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script53()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script54()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv2", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script55()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script56()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script57()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script58()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv2", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script59()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script60()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script61()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script62()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script63()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script64()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script65()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script66()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script67()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv3", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script68()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script69()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script70()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv3", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script71()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script72()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script73()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv3", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script74()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script75()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script76()
{
  var player = GetPlayer();
var sec = 60; // Durasi waktu dalam detik

// Reset timer lama jika ada yang aktif
if (window.evalTimer) {
    clearInterval(window.evalTimer);
}

// Jalankan countdown 1 detik sekali
window.evalTimer = setInterval(function() {
    sec--;
    player.SetVar("60lv3", sec);

    if (sec <= 0) {
        clearInterval(window.evalTimer);
    }
}, 1000);
}

function Script77()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script78()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script79()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

function Script80()
{
  var elem = document.documentElement;

if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
}

