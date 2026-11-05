function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GfuxS0Osf4":
        Script1();
        break;
      case "5W8sCzkAWcd":
        Script2();
        break;
      case "5rUxQJLGN0Q":
        Script3();
        break;
      case "697XhSkPbkn":
        Script4();
        break;
      case "5u6IBJJEJWz":
        Script5();
        break;
      case "6HKMdmfCsnw":
        Script6();
        break;
      case "5j3nbXmDQ7k":
        Script7();
        break;
      case "5vYpZUOmhrY":
        Script8();
        break;
      case "6Yy8KlzRUot":
        Script9();
        break;
      case "6WXjaLEtAOq":
        Script10();
        break;
      case "6Jl9Evm9upq":
        Script11();
        break;
      case "6UihlWJjodc":
        Script12();
        break;
      case "5iKAtRrxLMv":
        Script13();
        break;
      case "6LE7QjOa2cq":
        Script14();
        break;
      case "6VXkH8sjd6H":
        Script15();
        break;
      case "5kpjf0YoEPI":
        Script16();
        break;
      case "6fwkpuHk4Qg":
        Script17();
        break;
      case "6rCVTs2mywS":
        Script18();
        break;
      case "5XjDksgt2EY":
        Script19();
        break;
      case "64OMMExo5wM":
        Script20();
        break;
      case "5ungTaTeYgK":
        Script21();
        break;
      case "69EIgqru7HD":
        Script22();
        break;
      case "6Cauh7WBJz6":
        Script23();
        break;
      case "6aefMk2k291":
        Script24();
        break;
      case "6H42CztB6KF":
        Script25();
        break;
      case "6QgT4L0jm9I":
        Script26();
        break;
      case "6ppFNWNk3u2":
        Script27();
        break;
      case "5w52r9aeBRN":
        Script28();
        break;
      case "659BJutNxoP":
        Script29();
        break;
      case "5ubZcjYE55F":
        Script30();
        break;
      case "5jOE0te2D2W":
        Script31();
        break;
      case "6OQ7Sde8oby":
        Script32();
        break;
      case "5VrQclUPxaV":
        Script33();
        break;
      case "6OJPM6nUjvi":
        Script34();
        break;
      case "6ij74fkUAy9":
        Script35();
        break;
      case "68QufKlLf5B":
        Script36();
        break;
      case "5s2UbEbKACU":
        Script37();
        break;
      case "6ewrDnAm8kY":
        Script38();
        break;
      case "60dAI4ccWTe":
        Script39();
        break;
      case "6ke9WFtL76z":
        Script40();
        break;
      case "5xh6a3xhM8o":
        Script41();
        break;
      case "5d6oVof8Rj8":
        Script42();
        break;
      case "6YnivCqtzkf":
        Script43();
        break;
      case "6SewgFSO6Ax":
        Script44();
        break;
      case "6UIqaPfzDYk":
        Script45();
        break;
      case "6Kyeq4r1y2F":
        Script46();
        break;
      case "5YEGfapo6kU":
        Script47();
        break;
      case "61ClcUDuDbt":
        Script48();
        break;
      case "5l3FwhXpRti":
        Script49();
        break;
      case "6eIiu0N4Cb6":
        Script50();
        break;
      case "5XPgUmjFHj9":
        Script51();
        break;
      case "5YJ4J8JHOHL":
        Script52();
        break;
      case "6KXswc1NjPr":
        Script53();
        break;
      case "6bQGPJbWN8J":
        Script54();
        break;
      case "5vVh6Ob3Uik":
        Script55();
        break;
      case "6P8iXwze43v":
        Script56();
        break;
      case "6nOYNEORzZ6":
        Script57();
        break;
      case "5t3yir6Kpmz":
        Script58();
        break;
      case "6byHfmskrvm":
        Script59();
        break;
      case "6Wflr2miHG8":
        Script60();
        break;
      case "6KVJauTdkWX":
        Script61();
        break;
      case "6UwyqNu8tmb":
        Script62();
        break;
      case "5r0aM8FfPJX":
        Script63();
        break;
      case "6EL9eoUxkR2":
        Script64();
        break;
      case "6NB8wnl8CMw":
        Script65();
        break;
      case "6F9QqOubTvT":
        Script66();
        break;
      case "6TcVERAYv5Y":
        Script67();
        break;
      case "5nzRAftKHPU":
        Script68();
        break;
      case "5yI4FUav9fR":
        Script69();
        break;
      case "6d6ucAzF7Xp":
        Script70();
        break;
      case "6JJBNcvwCB0":
        Script71();
        break;
      case "5lADf8PTw4I":
        Script72();
        break;
      case "6nfKGKYI1YD":
        Script73();
        break;
      case "6itBKcdEQEX":
        Script74();
        break;
      case "6OFtSytht4O":
        Script75();
        break;
      case "6Uj5AlG8BnI":
        Script76();
        break;
      case "6kLGGg69OOH":
        Script77();
        break;
      case "5iPBSQpv7QA":
        Script78();
        break;
      case "5rCNpG8pYlP":
        Script79();
        break;
      case "5ZxpefR6iRA":
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

