function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ModiLT3nIW":
        Script1();
        break;
      case "62DYuiRfMSV":
        Script2();
        break;
      case "6etvSQOe7WG":
        Script3();
        break;
      case "6qofMcobW2i":
        Script4();
        break;
      case "67rumUOiWfh":
        Script5();
        break;
      case "5gS3KILYXH7":
        Script6();
        break;
      case "6M9JjVnnxqY":
        Script7();
        break;
      case "6lvuxUIOQti":
        Script8();
        break;
      case "6K3yw9XnJYD":
        Script9();
        break;
      case "65ufDq3NBbq":
        Script10();
        break;
      case "5cTONUwDzfi":
        Script11();
        break;
      case "5llLINoXVHQ":
        Script12();
        break;
      case "6rO3a4RK8aZ":
        Script13();
        break;
      case "5gMxjm3ajDk":
        Script14();
        break;
      case "6SI3B60BlHE":
        Script15();
        break;
      case "6XJ44elsANU":
        Script16();
        break;
      case "60EEiU1Np47":
        Script17();
        break;
      case "6bjABuoY7hf":
        Script18();
        break;
      case "5zCvle1PUuY":
        Script19();
        break;
      case "6f14S6ETQXi":
        Script20();
        break;
      case "5lWk7REMxDM":
        Script21();
        break;
      case "5dcqmS63YTO":
        Script22();
        break;
      case "5mPLif26a4C":
        Script23();
        break;
      case "5raQxT5cCc6":
        Script24();
        break;
      case "6RObI77FCbV":
        Script25();
        break;
      case "61ClUQkzi6U":
        Script26();
        break;
      case "6jM6oth3glW":
        Script27();
        break;
      case "5aEzGPBg2Ut":
        Script28();
        break;
      case "5yQ67vFUmr0":
        Script29();
        break;
      case "6qkJft4tORD":
        Script30();
        break;
      case "6Qs0a9dNtPb":
        Script31();
        break;
      case "6SewcJJdP5u":
        Script32();
        break;
      case "6fDiT9QAQLK":
        Script33();
        break;
      case "5wha20l1yIF":
        Script34();
        break;
      case "5XYmGm1CyZo":
        Script35();
        break;
      case "5ctWMAYUxTl":
        Script36();
        break;
      case "6avNf33qcV7":
        Script37();
        break;
      case "6TqD1X06cS0":
        Script38();
        break;
      case "5lSyiDTPqdV":
        Script39();
        break;
      case "5yphzM0zpxF":
        Script40();
        break;
      case "64ARRwQgRiv":
        Script41();
        break;
      case "5rhOlqvdKvi":
        Script42();
        break;
      case "6auCuCSvIvc":
        Script43();
        break;
      case "5V0wkhB6BKv":
        Script44();
        break;
      case "6nzZBovSqTr":
        Script45();
        break;
      case "5bfURG8YQWz":
        Script46();
        break;
      case "6PyY5fmQ6xn":
        Script47();
        break;
      case "5XJR5g6dCXa":
        Script48();
        break;
      case "6jzNyK1yYCm":
        Script49();
        break;
      case "6poOAtEGXxZ":
        Script50();
        break;
      case "6lfKVYU4VXn":
        Script51();
        break;
      case "6AuUteQKWuM":
        Script52();
        break;
      case "5mzWXDM2nJn":
        Script53();
        break;
      case "6T8USt4WIlv":
        Script54();
        break;
      case "5mne0Cpa5F6":
        Script55();
        break;
      case "6nt70KWF2As":
        Script56();
        break;
      case "5lGGyr2CDtj":
        Script57();
        break;
      case "6D55qRFcoTi":
        Script58();
        break;
      case "6TwYYJTuq5y":
        Script59();
        break;
      case "6nHber9DdLw":
        Script60();
        break;
      case "67RaAY0x1pK":
        Script61();
        break;
      case "6dcsa2261Gy":
        Script62();
        break;
      case "6PcfV4PVw3C":
        Script63();
        break;
      case "5XCeyAJy3kp":
        Script64();
        break;
      case "62RgZnaa35H":
        Script65();
        break;
      case "683OoxRMKur":
        Script66();
        break;
      case "6lomG47ggiO":
        Script67();
        break;
      case "6EB9lPL2AIK":
        Script68();
        break;
      case "6mmbrDIb7jV":
        Script69();
        break;
      case "61Lt2GRswCa":
        Script70();
        break;
      case "6jGP7PWOgFm":
        Script71();
        break;
      case "5oeSfkteQY2":
        Script72();
        break;
      case "6k4OkGQCzqd":
        Script73();
        break;
      case "6Budf6xm30n":
        Script74();
        break;
      case "6DWwVZBk6YY":
        Script75();
        break;
      case "5i7KySpKWLB":
        Script76();
        break;
      case "66XnBnxik5K":
        Script77();
        break;
      case "6P7ID3YNHjo":
        Script78();
        break;
      case "5sQv27sLZDN":
        Script79();
        break;
      case "6Y2OcjViCWC":
        Script80();
        break;
      case "5vhMYwIyj8i":
        Script81();
        break;
      case "5Z7C3bPDJNs":
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

