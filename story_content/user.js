function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67LSvexVfXr":
        Script1();
        break;
      case "6TFDMJoHflm":
        Script2();
        break;
      case "6HGSqouPQVO":
        Script3();
        break;
      case "5kW77HF40g5":
        Script4();
        break;
      case "6rhUDsu8Jjk":
        Script5();
        break;
      case "6MfRcsixgBW":
        Script6();
        break;
      case "5WeRiX751HR":
        Script7();
        break;
      case "5xlg9dmSz6I":
        Script8();
        break;
      case "6O4SSGGC3yk":
        Script9();
        break;
      case "5yuyC0kQw7O":
        Script10();
        break;
      case "6FTEjyBToPY":
        Script11();
        break;
      case "5gnjKiIobl2":
        Script12();
        break;
      case "6OWpsMOXKH0":
        Script13();
        break;
      case "5q9nV0LK92I":
        Script14();
        break;
      case "6i4DCKSc5K5":
        Script15();
        break;
      case "5akMnQ7lQfu":
        Script16();
        break;
      case "6aSIdJ53qm1":
        Script17();
        break;
      case "5oxcPe6eaZe":
        Script18();
        break;
      case "6d1HJAobFyW":
        Script19();
        break;
      case "5zxqJw44jme":
        Script20();
        break;
      case "5uL0GoupNn0":
        Script21();
        break;
      case "6AKFZi8Cyuj":
        Script22();
        break;
      case "62wl5kxdUNj":
        Script23();
        break;
      case "6O1Djwd123g":
        Script24();
        break;
      case "6jR9NGUeJrT":
        Script25();
        break;
      case "6NumFCWg8Ch":
        Script26();
        break;
      case "5wmUvJvgQth":
        Script27();
        break;
      case "6Yn7EHMW5xk":
        Script28();
        break;
      case "6a7I66dyJ4O":
        Script29();
        break;
      case "6FoHOk46WqA":
        Script30();
        break;
      case "6G9GEyJaNdo":
        Script31();
        break;
      case "6KZ94wDCvSf":
        Script32();
        break;
      case "5fLjTVn8jAV":
        Script33();
        break;
      case "6H3jrINsNyo":
        Script34();
        break;
      case "6684F9kOWn9":
        Script35();
        break;
      case "6lB39ohIH4B":
        Script36();
        break;
      case "6nhSBElztCs":
        Script37();
        break;
      case "6qKR3rk1Gop":
        Script38();
        break;
      case "6857vSblE89":
        Script39();
        break;
      case "6dqbPU7uBYH":
        Script40();
        break;
      case "6lvhedBgFXp":
        Script41();
        break;
      case "5ahN6Vjyowk":
        Script42();
        break;
      case "6MvDKLvcOAi":
        Script43();
        break;
      case "5VmGnWlZ09z":
        Script44();
        break;
      case "60XCWoEe7op":
        Script45();
        break;
      case "5b3WCm5nYFH":
        Script46();
        break;
      case "6VFpXOw2q7r":
        Script47();
        break;
      case "5sLkV0Qn6I7":
        Script48();
        break;
      case "5cPIEXSv0mC":
        Script49();
        break;
      case "6cc64rFqJLU":
        Script50();
        break;
      case "6KgJujRBe0P":
        Script51();
        break;
      case "6a0cQc6pWc3":
        Script52();
        break;
      case "6dI2gKtE1gb":
        Script53();
        break;
      case "5rXByU3qft3":
        Script54();
        break;
      case "6QH6kQ3fBEv":
        Script55();
        break;
      case "64Gy8ipIDpC":
        Script56();
        break;
      case "5XeAwY1zBpQ":
        Script57();
        break;
      case "5vhoU1bhhwi":
        Script58();
        break;
      case "6goyeRKZXhi":
        Script59();
        break;
      case "6PJovi1trar":
        Script60();
        break;
      case "5atvru7o0eJ":
        Script61();
        break;
      case "5e5djSvYxfO":
        Script62();
        break;
      case "64Q9QV3xazU":
        Script63();
        break;
      case "5a9jvmzeZ7j":
        Script64();
        break;
      case "6SxigKV494W":
        Script65();
        break;
      case "6ej756DY6VD":
        Script66();
        break;
      case "5zSvamZWCkO":
        Script67();
        break;
      case "6hV2QSC5uQN":
        Script68();
        break;
      case "6YoKf7aLGUb":
        Script69();
        break;
      case "5gidZKrojD7":
        Script70();
        break;
      case "5rABcS2NcGu":
        Script71();
        break;
      case "68ZE63Netd1":
        Script72();
        break;
      case "5Xa1yBxoBvf":
        Script73();
        break;
      case "6YBvvxzy9Fk":
        Script74();
        break;
      case "5WtMJyw2yMC":
        Script75();
        break;
      case "6Y3ZsHHWKhK":
        Script76();
        break;
      case "5q8QZHTivFR":
        Script77();
        break;
      case "5t8ga0w31tJ":
        Script78();
        break;
      case "5mOwUOMQMDm":
        Script79();
        break;
      case "61uuVZiEtsA":
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

