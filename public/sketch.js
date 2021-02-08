
let stutter, tom, ride, bass, snare, giddi;
var score2 = [];
var score3 = [];
var score4 = [];
var score5 = [];
var score6 = [];
var score7 = [];
var score8 = [];
var soundLoop2, soundLoop2status;
var soundLoop3, soundLoop3status;
var soundLoop4, soundLoop4status;
var soundLoop5, soundLoop5status;
var soundLoop6, soundLoop6status;
var soundLoop7, soundLoop7status;

var header, headerIndex;
var img, imgIndex;
var img2Index;
var img3Index;
var img4Index;
var img5Index;
var youtube, youtubeIndex;
var bandcamp, bandcampIndex;
var mailchimp, mailchimpIndex;
var insta, instaIndex;
var impressum, impressumIndex;
// var toDo, toDoIndex;
var regenerate, playwithsound, playwithsoundIndex, playwithoutsound, playwithoutsoundIndex;

var colorCount = 3;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;

function preload() {
  soundFormats('ogg');
  stutter = loadSound('assets/sounds/stutter.ogg');
  tom = loadSound('assets/sounds/tom.ogg');
  ride = loadSound('assets/sounds/ride.ogg');
  bass = loadSound('assets/sounds/bass.ogg');
  snare = loadSound('assets/sounds/snare.ogg');
  giddi = loadSound('assets/sounds/giddi.ogg');
  img = loadImage('assets/images/HCBlive.jpg');
  //listen = loadImage('assets/images/listen.svg');
  header = createDiv('<img src="assets/images/header.svg" width="100%" height="100%">');
  impressum = createDiv('<img src="assets/images/impressum.svg" width="100%" height="100%">');
  youtube = createDiv('<img src="assets/images/Youtube.svg" width="100%" height="100%">');
  bandcamp = createDiv('<img src="assets/images/listen.svg" alt="Girl in a jacket" width="100%" height="100%">');
  mailchimp = createDiv('<img src="assets/images/mailchimp.svg" width="100%" height="100%">');
  insta = createDiv('<img src="assets/images/insta.svg" width="100%" height="100%">');
  playwithsound = createDiv('<img src="assets/images/playwsound.svg" width="100%" height="100%">');
  playwithoutsound = createDiv('<img src="assets/images/playwosound.svg" width="100%" height="100%">');
  regenerate = createDiv('<img src="assets/images/regenerate.svg" width="100%" height="100%">');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
  getAudioContext().resume();
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  //noStroke();
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  //cnv.mousePressed(canvasPressed); // taken out because canvas is now underneath one layer

  //create html elements:
  //header
  //header = select('#header');
  //header = createDiv('<img src="assets/images/header.svg" width="100%" height="100%">');
  header.hide();
  header.mouseOver(headerMouseOver);
  header.mouseOut(headerMouseOut);
  header.mouseClicked(headerMouseClicked);

  //image1
  //img = createP('<img src="assets/images/Trio_yellow.gif" width="640" height="480" alt="picture of us">');
  img.resize(width, 0);

  //Youtube-Video
  //youtube = select('#youtube');
  //youtube = createDiv('<img src="assets/images/Youtube.svg" width="100%" height="100%">');
  youtube.hide();
  youtube.mouseOver(youtubeMouseOver);
  youtube.mouseOut(youtubeMouseOut);
  youtube.mouseClicked(youtubeMouseClicked);
  //youtube.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/kyTEVVsGKn4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  //bandcamp
  //bandcamp = select('#bandcamp');
  //bandcamp = createDiv('<img src="assets/images/listen.svg" alt="Girl in a jacket" width="100%" height="100%">');
  bandcamp.hide();
  bandcamp.mouseOver(bandcampMouseOver);
  bandcamp.mouseOut(bandcampMouseOut);
  bandcamp.mouseClicked(bandcampMouseClicked);

  //newsletter
  //mailchimp = select('#mailchimp')
  //mailchimp = createDiv('<img src="assets/images/mailchimp.svg" width="100%" height="100%">');
  mailchimp.hide();
  mailchimp.mouseOver(mailchimpMouseOver);
  mailchimp.mouseOut(mailchimpMouseOut);
  mailchimp.mouseClicked(mailchimpMouseClicked);

  //insta
  //insta = createDiv('<img src="assets/images/insta.svg" width="100%" height="100%">');
  insta.hide();
  insta.mouseOver(instaMouseOver);
  insta.mouseOut(instaMouseOut);
  insta.mouseClicked(instaMouseClicked);

  //impressum = createDiv('<img src="assets/images/impressum.svg" width="100%" height="100%">')
  impressum.mouseOver(impressumMouseOver);
  impressum.mouseOut(impressumMouseOut);
  impressum.mouseClicked(impressumMouseClicked);

  //play button
  //playwithsound = select('#playwithsound');
  //playwithsound = createDiv('<img src="assets/images/playwsound.svg" width="100%" height="100%">');
  playwithsound.mouseOver(playwithsoundMouseOver);
  playwithsound.mouseOut(playwithsoundMouseOut);
  playwithsound.mouseClicked(playwithsoundClicked);

  playwithoutsound.mouseOver(playwithoutsoundMouseOver);
  playwithoutsound.mouseOut(playwithoutsoundMouseOut);
  playwithoutsound.mouseClicked(playwithoutsoundClicked);

  //regenerate page
  //regenerate = select('#regenerate');
  //regenerate = createDiv('<img src="assets/images/regenerate.svg" width="100%" height="100%">');
  regenerate.mouseOver(regenerateMouseOver);
  regenerate.mouseOut(regenerateMouseOut);
  regenerate.mouseClicked(regenerateClicked);

  /////

  //define soundLoops
  let firstIntervall2 = random(5);
  let firstIntervall3 = random(5);
  let firstIntervall4 = random(5);
  let firstIntervall5 = random(5);
  let firstIntervall6 = random(5);
  let firstIntervall7 = random(5);
  soundLoop2 = new p5.SoundLoop(onSoundLoop2, firstIntervall2);
  soundLoop3 = new p5.SoundLoop(onSoundLoop3, firstIntervall3);
  soundLoop4 = new p5.SoundLoop(onSoundLoop4, firstIntervall4);
  soundLoop5 = new p5.SoundLoop(onSoundLoop5, firstIntervall5);
  soundLoop6 = new p5.SoundLoop(onSoundLoop6, firstIntervall6);
  soundLoop7 = new p5.SoundLoop(onSoundLoop7, firstIntervall7);
  /////
}

function draw() {
  noLoop();
  actRandomSeed = random(100000);
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    } else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 100);
      brightnessValues[i] = 100;
    }
  }

  // ------ area tiling ------
  // count tiles
  var counter = 0;
  // row count and row height
  var rowCount = 8;
  //var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;

  //setup html-elements for positioning:
  headerIndex = new Array('', '');
  imgIndex = new Array('', '');
  img2Index = new Array('', '');
  img3Index = new Array('', '');
  img4Index = new Array('', '');
  img5Index = new Array('', '');
  youtubeIndex = new Array('', '');
  bandcampIndex = new Array('', '');
  mailchimpIndex = new Array('', '');
  instaIndex = new Array('', '');
  impressumIndex = new Array('', '');
  // toDoIndex = new Array('', '');
  playwithsoundIndex = new Array('', '');
  playwithoutsoundIndex = new Array('', '');
  regenerateIndex = new Array('', '');
  let compareIndexes = [headerIndex, imgIndex, youtubeIndex, bandcampIndex, mailchimpIndex];
  let alreadySeen = [];

  //placement algorithm!?!?
  //compareIndexes.forEach(str => alreadySeen[str] ? console.log(str) : alreadySeen[str] = true);

    // headerIndex[0] = floor(random(0, rowCount));
    // headerIndex[1] = floor(random(0, headerIndex[0] + 1));
    headerIndex = [0,0];

    //img fragments
    imgIndex[0] = floor(random(1, rowCount));
    imgIndex[1] = floor(random(0, imgIndex[0] + 1));

    img2Index[0] = floor(random(1, rowCount));
    img2Index[1] = floor(random(0, img2Index[0] + 1));

    img3Index[0] = floor(random(1, rowCount));
    img3Index[1] = floor(random(0, img3Index[0] + 1));

    img4Index[0] = floor(random(1, rowCount));
    img4Index[1] = floor(random(0, img4Index[0] + 1));

    img5Index[0] = floor(random(1, rowCount));
    img5Index[1] = floor(random(0, img5Index[0] + 1));

    youtubeIndex[0] = 4;
    //youtubeIndex[0] = floor(random(0, rowCount));
    youtubeIndex[1] = floor(random(0, youtubeIndex[0] + 1));

    bandcampIndex[0] = 3;
    // bandcampIndex[0] = floor(random(0, rowCount));
    bandcampIndex[1] = floor(random(0, bandcampIndex[0] + 1));

    mailchimpIndex[0] = 5;
    //mailchimpIndex[0] = floor(random(0, rowCount));
    mailchimpIndex[1] = floor(random(0, mailchimpIndex[0] + 1));

    instaIndex[0] = 6;
    instaIndex[1] = floor(random(0, instaIndex[0] + 1));

    impressumIndex[0] = 7;
    impressumIndex[1] = 0;

    // toDoIndex[0] = floor(random(0, rowCount));
    // toDoIndex[1] = floor(random(0, toDoIndex[0] + 1));

    playwithsoundIndex[0] = floor(random(1, 6));
    playwithsoundIndex[1] = floor(random(0, playwithsoundIndex[0] + 1));

    playwithoutsoundIndex[0] = floor(random(1, 6));
    playwithoutsoundIndex[1] = floor(random(0, playwithoutsoundIndex[0] + 1));

    regenerateIndex[0] = floor(random(1, 6));
    regenerateIndex[1] = floor(random(0, regenerateIndex[0] + 1));



  // seperate each line in parts
  for (var i = rowCount; i >= 0; i--) {
    // how many fragments
    var partCount = i + 1;
    var parts = [];

    for (var ii = 0; ii < partCount; ii++) {
      // sub fragments or not?
      // if (random() < 0.075) {
      //   // take care of big values
      //   var fragments = int(random(2, 20));
      //   partCount = partCount + fragments;
      //   for (var iii = 0; iii < fragments; iii++) {
      //     parts.push(random(2));
      //   }
      // } else {
        parts.push(random(2, 20));
      //}
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;

      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      //fill rectangles with intital color-values:
      fill(100, 100, 100);
      rect(x, y, w, h);

        //positioning/design of html elements:
        if (headerIndex[0] == i && headerIndex[1] == ii) {
            header.position(0, 0);
            //header.style('font-size', h + 'px');
            //header.style('width', -w + 'px');
            header.style('heigth', h + 'px');

        }

        //positioning of html elements:
        // if (imgIndex[0] == i && imgIndex[1] == ii) {
        //   image(img, x + w, y, -w, h, x + w, y, -w, h );
        // }
        // if (img2Index[0] == i && img2Index[1] == ii) {
        //   image(img, x + w, y, -w, h, x + w, y, -w, h );
        // }
        // if (img3Index[0] == i && img3Index[1] == ii) {
        //   image(img, x + w, y, -w, h, x + w, y, -w, h );
        // }
        // if (img4Index[0] == i && img4Index[1] == ii) {
        //   image(img, x + w, y, -w, h, x + w, y, -w, h );
        // }
        // if (img5Index[0] == i && img5Index[1] == ii) {
        //   image(img, x + w, y, -w, h, x + w, y, -w, h );
        // }

        //positioning youtube:
        if (youtubeIndex[0] == i && youtubeIndex[1] == ii) {
            // youtube.position(x + w, y);
            // youtube.style('width', -w + 'px');
            // youtube.style('heigth', h + 'px');
            // let scaleFactor = 0.5;
            // youtube.style('width', 300 + 'px');
            // console.log();
        }

        //bandcamp
        if (bandcampIndex[0] == i && bandcampIndex[1] == ii) {
            //fill(0);
            //textSize(h * 0.45);
            //text('Listen', x + w, y, -w * 3, h);
            //bandcamp = new text('Listen', x + w, y, -w * 3, h);

            // bandcamp.position(x + w, y);
            // bandcamp.style('width', -w + 'px');
            // bandcamp.style('heigth', h + 'px');
            //bandcamp.style('font-size', h * 0.7 + 'px');

            //try to work with svg... not working maybe p5 doesnt accept svg, so create DOM element instead?
            //image(listen, x + w, y, w, h);
        }

         //mailchimp
         if (mailchimpIndex[0] == i && mailchimpIndex[1] == ii) {
            // fill(0);
            // textSize(h * 0.45);
            // text('Newsletter', x + w, y, -w * 3, h);
            // mailchimp.position(x + w, y);
            // mailchimp.style('width', -w + 'px');
            // mailchimp.style('heigth', h + 'px');
        }

        if (impressumIndex[0] == i && impressumIndex[1] == ii) {
          impressum.position(x + w, y);
          impressum.style('width', -w/2 + 'px');
          impressum.style('heigth', h/2 + 'px');
        }

        //toDo
        // if (toDoIndex[0] == i && toDoIndex[1] == ii) {
        //     fill(0);
        //     textSize(h * 0.45);
        //     text('Enter = Play \nr = Refresh', x + w, y, -w, h);
        //     mailchimp.style('width', -w + 'px');
        //}

        //playwithsound
        if (playwithsoundIndex[0] == i && playwithsoundIndex[1] == ii) {
            playwithsound.position(x + w, y);
            playwithsound.style('width', -w + 'px');
            playwithsound.style('heigth', h + 'px');
         }

         if (playwithoutsoundIndex[0] == i && playwithoutsoundIndex[1] == ii) {
          playwithoutsound.position(x + w, y);
          playwithoutsound.style('width', -w + 'px');
          playwithoutsound.style('heigth', h + 'px');
       }

        //regenerate
        if (regenerateIndex[0] == i && regenerateIndex[1] == ii) {
          regenerate.position(x + w, y);
          regenerate.style('width', -w + 'px');
          regenerate.style('heigth', h + 'px');
        }

      //create scores from w values:
      //for (var j = rowCount; j >= 0; j--) {
        if (i == 1) {
          //map from px to seconds (1sek-track)
          //let dur = map(w, -width, 0, 0, 1);
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score2.push(package);
        }
        if (i == 2) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score3.push(package);
        }
        if (i == 3) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score4.push(package);
        }
        if (i == 4) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score5.push(package);
        }
        if (i == 5) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score6.push(package);
        }
        if (i == 6) {
          //map from px to seconds
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score7.push(package);
        }
        if (i == 7) {
          //map from px to seconds
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score8.push(package);
        }
      //}


      counter++;
    }
  }
}

// function mouseReleased() {
//   actRandomSeed = random(100000);
//   loop();
//   console.log('canvas released');
// }

function keyTyped() {
    if (key === 'r') {
        score2 = [];
        score3 = [];
        score4 = [];
        score5 = [];
        score6 = [];
        score7 = [];
        score8 = [];

        //hide DOM elements
        youtube.hide();
        bandcamp.hide();
        mailchimp.hide();
        header.hide();
        insta.hide();

        actRandomSeed = random(100000);
        loop();
        console.log('page refreshed');
    }
}

function regenerateFunc() {
      score2 = [];
      score3 = [];
      score4 = [];
      score5 = [];
      score6 = [];
      score7 = [];
      score8 = [];

      //hide DOM elements
      youtube.hide();
      bandcamp.hide();
      mailchimp.hide();
      header.hide();
      insta.hide();

      actRandomSeed = random(100000);
      loop();
      console.log('page refreshed');
}

// function keyPressed () {
//     if (keyCode === ENTER) {
//         userStartAudio();
//         console.log('canvasPressed');

//         ///
//         if (soundLoop1.isPlaying || soundLoop2.isPlaying || soundLoop3.isPlaying || soundLoop4.isPlaying || soundLoop5.isPlaying || soundLoop6.isPlaying ) {
//             soundLoop1.stop();
//             soundLoop2.stop();
//             soundLoop3.stop();
//             soundLoop4.stop();
//             soundLoop5.stop();
//             soundLoop6.stop();
//         } else {
//             //start the loop
//             soundLoop1.start();
//             soundLoop2.start();
//             soundLoop3.start();
//             soundLoop4.start();
//             soundLoop5.start();
//             soundLoop6.start();
//         }
//     }
//   ///
// }

function playwithsoundFunc () {
      userStartAudio();
      masterVolume(1);

      ///
      if (soundLoop2.isPlaying || soundLoop3.isPlaying || soundLoop4.isPlaying || soundLoop5.isPlaying || soundLoop6.isPlaying || soundLoop7.isPlaying ) {
          soundLoop2.stop();
          soundLoop3.stop();
          soundLoop4.stop();
          soundLoop5.stop();
          soundLoop6.stop();
          soundLoop7.stop();
      } else {
          //start the loop
          soundLoop2.start();
          soundLoop3.start();
          soundLoop4.start();
          soundLoop5.start();
          soundLoop6.start();
          soundLoop7.start();

          regenerate.hide();
          playwithsound.hide();
          playwithoutsound.hide();

          playwithsoundIndex[0] = 7;
          playwithsoundIndex[1] = floor(random(0, playwithsoundIndex[0] + 1));
          playwithsound.position(score8[playwithsoundIndex[1]][1] + score8[playwithsoundIndex[1]][3], score8[playwithsoundIndex[1]][2]);
          playwithsound.style('width', -score8[playwithsoundIndex[1]][3] + 'px');
          playwithsound.style('heigth', score8[playwithsoundIndex[1]][4] + 'px');

          playwithoutsoundIndex[0] = 7;
          playwithoutsoundIndex[1] = floor(random(0, playwithoutsoundIndex[0] + 1));
          playwithoutsound.position(score8[playwithoutsoundIndex[1]][1] + score8[playwithoutsoundIndex[1]][3], score8[playwithoutsoundIndex[1]][2]);
          playwithoutsound.style('width', -score8[playwithoutsoundIndex[1]][3] + 'px');
          playwithoutsound.style('heigth', score8[playwithoutsoundIndex[1]][4] + 'px');

          regenerateIndex[0] = 7;
          regenerateIndex[1] = floor(random(0, regenerateIndex[0] + 1));
          regenerate.position(score8[regenerateIndex[1]][1] + score8[regenerateIndex[1]][3], score8[regenerateIndex[1]][2]);
          regenerate.style('width', -score8[regenerateIndex[1]][3] + 'px');
          regenerate.style('heigth', score8[regenerateIndex[1]][4] + 'px');
        }
}

function playwithoutsoundFunc () {
      userStartAudio();
      masterVolume(0);
  
        ///
        if (soundLoop2.isPlaying || soundLoop3.isPlaying || soundLoop4.isPlaying || soundLoop5.isPlaying || soundLoop6.isPlaying || soundLoop7.isPlaying ) {
            soundLoop2.stop();
            soundLoop3.stop();
            soundLoop4.stop();
            soundLoop5.stop();
            soundLoop6.stop();
            soundLoop7.stop();
        } else {
            //start the loop
            soundLoop2.start();
            soundLoop3.start();
            soundLoop4.start();
            soundLoop5.start();
            soundLoop6.start();
            soundLoop7.start();
  
            regenerate.hide();
            playwithsound.hide();
            playwithoutsound.hide();
  
            playwithsoundIndex[0] = 7;
            playwithsoundIndex[1] = floor(random(0, playwithsoundIndex[0] + 1));
            playwithsound.position(score8[playwithsoundIndex[1]][1] + score8[playwithsoundIndex[1]][3], score8[playwithsoundIndex[1]][2]);
            playwithsound.style('width', -score8[playwithsoundIndex[1]][3] + 'px');
            playwithsound.style('heigth', score8[playwithsoundIndex[1]][4] + 'px');
  
            playwithoutsoundIndex[0] = 7;
            playwithoutsoundIndex[1] = floor(random(0, playwithoutsoundIndex[0] + 1));
            playwithoutsound.position(score8[playwithoutsoundIndex[1]][1] + score8[playwithoutsoundIndex[1]][3], score8[playwithoutsoundIndex[1]][2]);
            playwithoutsound.style('width', -score8[playwithoutsoundIndex[1]][3] + 'px');
            playwithoutsound.style('heigth', score8[playwithoutsoundIndex[1]][4] + 'px');
  
            regenerateIndex[0] = 7;
            regenerateIndex[1] = floor(random(0, regenerateIndex[0] + 1));
            regenerate.position(score8[regenerateIndex[1]][1] + score8[regenerateIndex[1]][3], score8[regenerateIndex[1]][2]);
            regenerate.style('width', -score8[regenerateIndex[1]][3] + 'px');
            regenerate.style('heigth', score8[regenerateIndex[1]][4] + 'px');
        }

}
///

function onSoundLoop2 (timeFromNow) {

  var index = (soundLoop2.iterations - 1) % score2.length;
  var interval = score2[index][0];
  var x = score2[index][1];
  var y = score2[index][2];
  var w = score2[index][3];
  var h = score2[index][4];
  var col = score2[index][5];

  soundLoop2.interval = interval;
  var panning = random(-1, 1);
  stutter.pan(panning);
  stutter.play(timeFromNow);
  soundLoop2.maxIterations = score2.length;
  //highlight rectangle
  fill(col);
  rect(x, y, w, h);



  if (imgIndex[0] == 2 && imgIndex[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img2Index[0] == 2 && img2Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img3Index[0] == 2 && img3Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img4Index[0] == 2 && img4Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img5Index[0] == 2 && img5Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }

}

function onSoundLoop3 (timeFromNow) {
  var index = (soundLoop3.iterations - 1) % score3.length;
  var interval = score3[index][0];
  var x = score3[index][1];
  var y = score3[index][2];
  var w = score3[index][3];
  var h = score3[index][4];
  var col = score3[index][5];

  soundLoop3.interval = interval;
  // var panning = random(-1, 1);
  // bass.pan(panning);
  bass.play(timeFromNow);
  soundLoop3.maxIterations = score3.length;
  //highlight rectangle
  fill(col);
  rect(x, y, w, h);

  if (index == bandcampIndex[1] - 1) {
  bandcamp.position(score3[index][1] + score3[index][3], score3[index][2]);
  bandcamp.style('width', -score3[index][3] + 'px');
  bandcamp.style('heigth', score3[index][4] + 'px');
  bandcamp.show();
  bandcamp.style('background-color', '#55FF00');
  }

  if (imgIndex[0] == 3 && imgIndex[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img2Index[0] == 3 && img2Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img3Index[0] == 3 && img3Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img4Index[0] == 3 && img4Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img5Index[0] == 3 && img5Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }

}

function onSoundLoop4(timeFromNow) {
    console.log('loop4 called');
  // set interval to position in score-array:
  var index = (soundLoop4.iterations - 1) % score4.length;
  var interval = score4[index][0];
  var x = score4[index][1];
  var y = score4[index][2];
  var w = score4[index][3];
  var h = score4[index][4];
  var col = score4[index][5];

  soundLoop4.interval = interval;
  var panning = random(-1, 1);
  giddi.pan(panning);
  giddi.play(timeFromNow);
  soundLoop4.maxIterations = score4.length;
  //highlight rectangle
  fill(col);
  rect(x, y, w, h);

  if (index == youtubeIndex[1] - 1) {
    youtube.position(score4[index][1] + score4[index][3], score4[index][2]);
    youtube.style('width', -score4[index][3] + 'px');
    youtube.style('heigth', score4[index][4] + 'px');
    youtube.show();
    youtube.style('background-color', '#55FF00');

  }

  if (imgIndex[0] == 4 && imgIndex[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img2Index[0] == 4 && img2Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img3Index[0] == 4 && img3Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img4Index[0] == 4 && img4Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img5Index[0] == 4 && img5Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
//  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
//  let note = midiToFreq(notePattern[noteIndex]);

//   background(noteIndex * 360 / notePattern.length, 50, 100);
}

function onSoundLoop5 (timeFromNow) {
    console.log('loop5 called');
  var index = (soundLoop5.iterations - 1) % score5.length;
  var interval = score5[index][0];
  var x = score5[index][1];
  var y = score5[index][2];
  var w = score5[index][3];
  var h = score5[index][4];
  var col = score5[index][5];

  soundLoop5.interval = interval;
  var panning = random(-1, 1);
  tom.pan(panning);
  tom.play(timeFromNow);
  soundLoop5.maxIterations = score5.length;
  //highlight rectangle
  fill(col);
  rect(x, y, w, h);

  if (index == mailchimpIndex[1] - 1) {
    mailchimp.position(score5[index][1] + score5[index][3], score5[index][2]);
    mailchimp.style('width', -score5[index][3] + 'px');
    mailchimp.style('heigth', score5[index][4] + 'px');
    mailchimp.show();
    mailchimp.style('background-color', '#55FF00');
  }

  if (imgIndex[0] == 5 && imgIndex[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img2Index[0] == 5 && img2Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img3Index[0] == 5 && img3Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img4Index[0] == 5 && img4Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img5Index[0] == 5 && img5Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
}

function onSoundLoop6 (timeFromNow) {
  var index = (soundLoop6.iterations - 1) % score6.length;
  var interval = score6[index][0];
  var x = score6[index][1];
  var y = score6[index][2];
  var w = score6[index][3];
  var h = score6[index][4];
  var col = score6[index][5];
  soundLoop6.interval = interval;
  // var panning = random(-1, 1);
  // snare.pan(panning);
  snare.play(timeFromNow);
  soundLoop6.maxIterations = score6.length;
  //highlight rectangle
  fill(col);
  rect(x, y, w, h);

  if (index == instaIndex[1] - 1) {
    insta.position(score6[index][1] + score6[index][3], score6[index][2]);
    insta.style('width', -score6[index][3] + 'px');
    insta.style('heigth', score6[index][4] + 'px');
    insta.show();
    insta.style('background-color', '#55FF00');
  }

  if (imgIndex[0] == 6 && imgIndex[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img2Index[0] == 6 && img2Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img3Index[0] == 6 && img3Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img4Index[0] == 6 && img4Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img5Index[0] == 6 && img5Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
}

function onSoundLoop7 (timeFromNow) {
  var index = (soundLoop7.iterations - 1) % score7.length;
  var interval = score7[index][0];
  var x = score7[index][1];
  var y = score7[index][2];
  var w = score7[index][3];
  var h = score7[index][4];
  var col = score7[index][5];

  console.log('interval :' + interval);
  soundLoop7.interval = interval;
  var panning = random(-1, 1);
  ride.pan(panning);
  ride.play(timeFromNow);
  soundLoop7.maxIterations = score7.length;
  //highlight rectangle
  fill(col);
  rect(x, y, w, h);

  //show header
  if (index == score7.length-1) {
    header.show();
    playwithsound.show();
    regenerate.show();
    playwithoutsound.show();
  }

  if (imgIndex[0] == 7 && imgIndex[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img2Index[0] == 7 && img2Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img3Index[0] == 7 && img3Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img4Index[0] == 7 && img4Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
  if (img5Index[0] == 7 && img5Index[1] == index) {
    image(img, x + w, y, -w, h, x + w, y, -w, h );
  }
}

// header user interaction
function headerMouseOver() {
  header.style('background-color', 'coral');
}

function headerMouseOut() {
  header.style('background-color', '#55FF00')
}

function headerMouseClicked() {
  header = createDiv('<img src="assets/images/description.svg" width="100%" height="100%">');
  header.position(0, 0);
}

// bancamp user interaction
function bandcampMouseOver() {
  bandcamp.style('background-color', 'coral');
}

function bandcampMouseOut() {
  bandcamp.style('background-color', '#55FF00')
}

function bandcampMouseClicked() {
  window.open("https://hcbehrendtsen.bandcamp.com/releases");
}

// youtube user interaction
function youtubeMouseOver() {
  youtube.style('background-color', 'coral');
}

function youtubeMouseOut() {
  youtube.style('background-color', '#55FF00')
}

function youtubeMouseClicked() {
  window.open("https://www.youtube.com/embed/kyTEVVsGKn4");
}

// mailchimp user interaction
function mailchimpMouseOver() {
  mailchimp.style('background-color', 'coral');
}

function mailchimpMouseOut() {
  mailchimp.style('background-color', '#55FF00')
}

function mailchimpMouseClicked() {
  window.open("signup.html");
}

// insta user interaction
function instaMouseOver() {
  insta.style('background-color', 'coral');
}

function instaMouseOut() {
  insta.style('background-color', '#55FF00')
}

function instaMouseClicked() {
  window.open("https://www.instagram.com/h.c.behrendtsen/");
}

// impressum user interaction
function impressumMouseOver() {
  impressum.style('background-color', 'coral');
}

function impressumMouseOut() {
  impressum.style('background-color', '#55FF00')
}

function impressumMouseClicked() {
  window.open("impressum.html");
}

//play with sound user interaction
function playwithsoundMouseOver() {
  playwithsound.style('background-color', 'coral');
}

function playwithsoundMouseOut() {
  playwithsound.style('background-color', '#55FF00')
}

function playwithsoundClicked() {
  playwithsoundFunc();
}

  //play without sound user interaction
function playwithoutsoundMouseOver() {
  playwithoutsound.style('background-color', 'coral');
}

function playwithoutsoundMouseOut() {
  playwithoutsound.style('background-color', '#55FF00')
}

function playwithoutsoundClicked() {
  playwithoutsoundFunc();
}

  //regenerate user interaction
function regenerateMouseOver() {
  regenerate.style('background-color', 'coral');
}

function regenerateMouseOut() {
  regenerate.style('background-color', '#55FF00')
}

function regenerateClicked() {
  regenerateFunc();
}
