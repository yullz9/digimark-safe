function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wdx9RAkymC":
        Script1();
        break;
      case "6CPtDWOUcFC":
        Script2();
        break;
      case "5ymFD6ednkC":
        Script3();
        break;
      case "6gGdD1nFr7k":
        Script4();
        break;
      case "6LRta7VGafY":
        Script5();
        break;
      case "6fy2HAAEvLz":
        Script6();
        break;
      case "6UtGHRlkUv2":
        Script7();
        break;
      case "6DPSvCXWM9z":
        Script8();
        break;
      case "6nFVIFdrojn":
        Script9();
        break;
      case "6nEmG72Amme":
        Script10();
        break;
      case "61ThKetqU7V":
        Script11();
        break;
      case "5Y4Xsv8U1YB":
        Script12();
        break;
      case "6K5d2CxX7fp":
        Script13();
        break;
      case "5vxZThKd7Iq":
        Script14();
        break;
      case "5w0AtmbLImr":
        Script15();
        break;
      case "6cm8qKYUf1T":
        Script16();
        break;
      case "6Ldi8tyS7Cn":
        Script17();
        break;
      case "60xgeYtzwih":
        Script18();
        break;
      case "6SJJmJgvDe1":
        Script19();
        break;
      case "64gkcwznbD4":
        Script20();
        break;
      case "5zpnvvsRvyq":
        Script21();
        break;
      case "5lANdGHg59W":
        Script22();
        break;
      case "6Bl4PyRCK5g":
        Script23();
        break;
      case "5stFmYe00Jj":
        Script24();
        break;
      case "6mlhz8sAX8r":
        Script25();
        break;
      case "5q3fXbBxsgd":
        Script26();
        break;
      case "5tBEUndznew":
        Script27();
        break;
      case "5wN8FbKOHKz":
        Script28();
        break;
      case "6kLghV2GLIS":
        Script29();
        break;
      case "5ir90FgCSG9":
        Script30();
        break;
      case "6EesaKE2hwK":
        Script31();
        break;
      case "5fbK8qtTQjz":
        Script32();
        break;
      case "6Lsrq0eFFWZ":
        Script33();
        break;
      case "6SrGsBKugfT":
        Script34();
        break;
      case "5n5jMAvg7Kq":
        Script35();
        break;
      case "5caKvTwC637":
        Script36();
        break;
      case "5dbrxoaUUKw":
        Script37();
        break;
      case "6qwpUVUT5iM":
        Script38();
        break;
      case "6bsn6bCykx2":
        Script39();
        break;
      case "6Pnlni1c9fr":
        Script40();
        break;
      case "5mqz6IZryro":
        Script41();
        break;
      case "6hMLlnvBQNI":
        Script42();
        break;
      case "6TTU6ECRqd6":
        Script43();
        break;
      case "6U16EalqwPr":
        Script44();
        break;
      case "5dQNq044zQk":
        Script45();
        break;
      case "5YUYBFjGmKY":
        Script46();
        break;
      case "6LByshGBAB2":
        Script47();
        break;
      case "5xW9QsquxwV":
        Script48();
        break;
      case "6EClYom4Xr0":
        Script49();
        break;
      case "5ltNP2HFRr1":
        Script50();
        break;
      case "5fGigYulH0K":
        Script51();
        break;
      case "6cAvrMUDNm3":
        Script52();
        break;
      case "5iwi6U7KsXX":
        Script53();
        break;
      case "6hcGB0POUVT":
        Script54();
        break;
      case "6A2ZI8SNCrf":
        Script55();
        break;
      case "5VlVaokl2kC":
        Script56();
        break;
      case "6WOoUF6GJCR":
        Script57();
        break;
      case "5c0OqCpFN1B":
        Script58();
        break;
      case "6f7fAJiNgtc":
        Script59();
        break;
      case "6eJ5kvqSkYJ":
        Script60();
        break;
      case "6jeW24Fs0pt":
        Script61();
        break;
      case "6CW6KtXTGK3":
        Script62();
        break;
      case "6A048ol21fu":
        Script63();
        break;
      case "6973aXlQQRm":
        Script64();
        break;
      case "5rzU9AZI8pT":
        Script65();
        break;
      case "5o4VYFnxdHm":
        Script66();
        break;
      case "688IpMpGH8K":
        Script67();
        break;
      case "6nXYWGfPmks":
        Script68();
        break;
      case "6MSPPGIhdjX":
        Script69();
        break;
      case "6C46OXohrch":
        Script70();
        break;
      case "6dS2d8tHqf7":
        Script71();
        break;
      case "6HPdeIC0g3X":
        Script72();
        break;
      case "5tNpAx1EcYP":
        Script73();
        break;
      case "6bSzS6jjomI":
        Script74();
        break;
      case "6CyXxI0x0Pq":
        Script75();
        break;
      case "6oUuLBtwZl2":
        Script76();
        break;
      case "5pKBWYDsgQV":
        Script77();
        break;
      case "6b6sRAhJv5v":
        Script78();
        break;
      case "62rvz2bxmZC":
        Script79();
        break;
      case "62xKCCnNyz7":
        Script80();
        break;
      case "6W7cHxLWUDv":
        Script81();
        break;
      case "6bFlcselQ20":
        Script82();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var volMusik = player.GetVar("VolumeMusik") / 10;

// Inisialisasi Musik Latar
if (window.musikGame == undefined) {
    window.musikGame = new Audio("lagu_latar.mp3"); 
    window.musikGame.loop = true; 
    window.musikGame.volume = volMusik; 
    window.musikGame.play();
} else {
    window.musikGame.volume = volMusik; 
}
}

function Script2()
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

function Script3()
{
  var player = GetPlayer();
var volMusik = player.GetVar("VolumeMusik") / 10;

if (window.musikGame != undefined) {
    window.musikGame.volume = volMusik; 
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

function Script40()
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

function Script41()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
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

function Script49()
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

function Script58()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script59()
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

function Script62()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
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

function Script68()
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

function Script80()
{
  if (window.evalTimer) {
    clearInterval(window.evalTimer);
}
}

function Script81()
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

function Script82()
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

