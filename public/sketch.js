
let stutter, tom, ride, bass, snare, giddi;
var score1 = [];
var score2 = [];
var score3 = [];
var score4 = [];
var score5 = [];
var score6 = [];
var soundLoop1;
var soundLoop2;
var soundLoop3;
var soundLoop4;
var soundLoop5;
var soundLoop6;

var header, headerIndex, headerX, headerY, headerW, headerH;
var img, imgIndex;
var youtube, youtubeIndex;
var bandcamp, bandcampIndex;
var mailchimp, mailchimpIndex;
var toDo, toDoIndex;

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

  img = loadImage('assets/images/Trio_yellow.gif');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
  header = createSpan('H. C. BEHRENDTSEN');
  header.mouseOver(headerClicked);
  //header = text('H. C. BEHRENDTSEN' )
  
  //image1
  //img = createP('<img src="assets/images/Trio_yellow.gif" width="640" height="480" alt="picture of us">');
  
  //Youtube-Video
  youtube = select('#youtube');
  //youtube.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/kyTEVVsGKn4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

  //bandcamp
  //bandcamp = select('#bandcamp');
  //bandcamp = createA('http://p5js.org/', 'LISTEN', '_blank');
  bandcamp = createSpan('LISTEN');
  bandcamp.mouseOver(bandcampMouseOver);
  bandcamp.mouseOut(bandcampMouseOut);
  bandcamp.mouseClicked(bandcampMouseClicked);
  
  mailchimp = select('#mailchimp')
  /////

  //define soundLoops
  let firstIntervall = 1
  soundLoop1 = new p5.SoundLoop(onSoundLoop1, firstIntervall);
  soundLoop2 = new p5.SoundLoop(onSoundLoop2, firstIntervall);
  soundLoop3 = new p5.SoundLoop(onSoundLoop3, firstIntervall);
  soundLoop4 = new p5.SoundLoop(onSoundLoop4, firstIntervall);
  soundLoop5 = new p5.SoundLoop(onSoundLoop5, firstIntervall);
  soundLoop6 = new p5.SoundLoop(onSoundLoop6, firstIntervall);
  /////
}

function draw() {
  noLoop();
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
  youtubeIndex = new Array('', '');
  bandcampIndex = new Array('', '');
  mailchimpIndex = new Array('', '');
  toDoIndex = new Array('', '');
  let compareIndexes = [headerIndex, imgIndex, youtubeIndex, bandcampIndex, mailchimpIndex];
  let alreadySeen = [];

  //placement algorithm!?!?
  //compareIndexes.forEach(str => alreadySeen[str] ? console.log(str) : alreadySeen[str] = true);

 
    // headerIndex[0] = floor(random(0, rowCount));
    // headerIndex[1] = floor(random(0, headerIndex[0] + 1));
    headerIndex = [0,0];

    imgIndex[0] = floor(random(0, rowCount));
    imgIndex[1] = floor(random(0, imgIndex[0] + 1));

    youtubeIndex[0] = floor(random(0, rowCount));
    youtubeIndex[1] = floor(random(0, youtubeIndex[0] + 1));

    bandcampIndex[0] = floor(random(0, rowCount));
    bandcampIndex[1] = floor(random(0, bandcampIndex[0] + 1));

    mailchimpIndex[0] = floor(random(0, rowCount));
    mailchimpIndex[1] = floor(random(0, mailchimpIndex[0] + 1));
  
    toDoIndex[0] = floor(random(0, rowCount));
    toDoIndex[1] = floor(random(0, toDoIndex[0] + 1));
  //while (headerIndex == imgIndex || headerIndex == youtubeIndex || headerIndex == youtubeIndex || headerIndex == bandcampIndex || headerIndex == mailchimpIndex || imgIndex == youtubeIndex || imgIndex == bandcampIndex || imgIndex == mailchimpIndex || youtubeIndex == bandcampIndex || youtubeIndex == mailchimpIndex || bandcampIndex == mailchimpIndex );

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
            // fill(0);
            // textSize(h);
            // text('H. C. BEHRENDTSEN', x + w, y, -w * 3, h);
            //header.position(x + w, y);
            header.position(0, 0);
            header.style('font-size', h + 'px');
            
        }

        //positioning of html elements:
        if (imgIndex[0] == i && imgIndex[1] == ii) {
            image(img, x + w, y, -w, h);
        }

        //positioning youtube:
        if (youtubeIndex[0] == i && youtubeIndex[1] == ii) {
            youtube.position(x + w, y);
            let scaleFactor = 0.5;
            youtube.style('width', 300 + 'px');
            console.log();
        }

        //bandcamp
        if (bandcampIndex[0] == i && bandcampIndex[1] == ii) {
            fill(0);
            //textSize(h * 0.45);
            //text('Listen', x + w, y, -w * 3, h);
            //bandcamp = new text('Listen', x + w, y, -w * 3, h);
            bandcamp.position(x + w, y);
            bandcamp.style('width', -w + 'px');
            bandcamp.style('heigth', h + 'px');
            bandcamp.style('font-size', h * 0.7 + 'px');
        }

         //mailchimp
         if (mailchimpIndex[0] == i && mailchimpIndex[1] == ii) {
            fill(0);
            textSize(h * 0.45);
            text('Newsletter', x + w, y, -w * 3, h);
            mailchimp.position(x + w, y);
            mailchimp.style('width', -w + 'px');
        }

        //toDo
        if (toDoIndex[0] == i && toDoIndex[1] == ii) {
            fill(0);
            textSize(h * 0.45);
            text('K = Play \nr = Refresh', x + w, y, -w, h);
            mailchimp.style('width', -w + 'px');
        }

      //create scores from w values:
      //for (var j = rowCount; j >= 0; j--) {
        if (i == 2) {
          //map from px to seconds (1sek-track)
          //let dur = map(w, -width, 0, 0, 1);
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score1.push(package);
        }
        if (i == 3) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score2.push(package);
        }
        if (i == 4) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score3.push(package);
        }
        if (i == 5) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score3.push(package);
        }
        if (i == 6) {
          //map from px to seconds (5sek-track)
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h], col;
          score5.push(package);
        }
        if (i == 7) {
          //map from px to seconds
          let dur = map(-w, 0, width, 0, 5);
          let package = [dur, x, y, w, h, col];
          score6.push(package);
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
        score1 = [];
        score2 = [];
        score3 = [];
        score4 = [];
        score5 = [];
        score6 = [];
        actRandomSeed = random(100000);
        loop();
        console.log('page refreshed');
    }
}

function keyPressed () {
    if (keyCode === ENTER) {
        userStartAudio();
        console.log('canvasPressed');

        ///
        if (soundLoop1.isPlaying || soundLoop2.isPlaying || soundLoop3.isPlaying || soundLoop4.isPlaying || soundLoop5.isPlaying || soundLoop6.isPlaying ) {
            soundLoop1.stop();
            soundLoop2.stop();
            soundLoop3.stop();
            soundLoop4.stop();
            soundLoop5.stop();
            soundLoop6.stop();
        } else {
            //start the loop
            soundLoop1.start();
            soundLoop2.start();
            soundLoop3.start();
            soundLoop4.start();
            soundLoop5.start();
            soundLoop6.start();
        }
    }
  ///
}

function onSoundLoop1 (timeFromNow) {
console.log('loop1 called');
  var index = (soundLoop1.iterations - 1) % score1.length;
  var interval = score1[index][0];
  soundLoop1.interval = interval;
  var panning = random(-1, 1);
  stutter.pan(panning);
  stutter.play(timeFromNow);
  soundLoop1.maxIterations = score1.length;
  //highlight rectangle
  fill(score1[index][5]);
  rect(score1[index][1], score1[index][2], score1[index][3], score1[index][4]);
}

function onSoundLoop2 (timeFromNow) {
    console.log('loop2 called');
  var index = (soundLoop2.iterations - 1) % score2.length;
  var interval = score2[index][0];
  soundLoop2.interval = interval;
  // var panning = random(-1, 1);
  // bass.pan(panning);
  bass.play(timeFromNow);
  soundLoop2.maxIterations = score2.length;
  //highlight rectangle
  fill(score2[index][5]);
  rect(score2[index][1], score2[index][2], score2[index][3], score2[index][4]);
}

function onSoundLoop3(timeFromNow) {
    console.log('loop3 called');
  // set interval to position in score-array:
  var index = (soundLoop3.iterations - 1) % score3.length;
  var interval = score3[index][0];
  soundLoop3.interval = interval;
  var panning = random(-1, 1);
  giddi.pan(panning);
  giddi.play(timeFromNow);
  soundLoop3.maxIterations = score3.length;
  //highlight rectangle
  fill(score3[index][5]);
  rect(score3[index][1], score3[index][2], score3[index][3], score3[index][4]);
  
//  let noteIndex = (soundLoop.iterations - 1) % notePattern.length;
//  let note = midiToFreq(notePattern[noteIndex]);

//   background(noteIndex * 360 / notePattern.length, 50, 100);
}

function onSoundLoop4 (timeFromNow) {
    console.log('loop4 called');
  var index = (soundLoop4.iterations - 1) % score4.length;
  var interval = score4[index][0];
  soundLoop4.interval = interval;
  var panning = random(-1, 1);
  tom.pan(panning);
  tom.play(timeFromNow);
  soundLoop4.maxIterations = score4.length;
  //highlight rectangle
  fill(score4[index][5]);
  rect(score4[index][1], score4[index][2], score4[index][3], score4[index][4]);
}

function onSoundLoop5 (timeFromNow) {
    console.log('loop5 called');
  var index = (soundLoop5.iterations - 1) % score5.length;
  var interval = score5[index][0];
  soundLoop5.interval = interval;
  // var panning = random(-1, 1);
  // snare.pan(panning);
  snare.play(timeFromNow);
  soundLoop5.maxIterations = score5.length;
  //highlight rectangle
  fill(score5[index][5]);
  rect(score5[index][1], score5[index][2], score5[index][3], score5[index][4]);
}

function onSoundLoop6 (timeFromNow) {
    console.log('loop 6 called');
    
    console.log('timeFromNow :' + timeFromNow);
  var index = (soundLoop6.iterations - 1) % score6.length;
  var interval = score6[index][0];
  console.log('interval :' + interval);
  soundLoop6.interval = interval;
  var panning = random(-1, 1);
  ride.pan(panning);
  ride.play(timeFromNow);
  soundLoop6.maxIterations = score6.length;
  //highlight rectangle
  fill(score6[index][5]);
  rect(score6[index][1], score6[index][2], score6[index][3], score6[index][4]);
}

function headerClicked() {
  console.log('mouseOverHeader');
  header.style('color', 'green');
}

function bandcampMouseOver() {
  bandcamp.style('background-color', 'coral');
}

function bandcampMouseOut() {
  bandcamp.style('background-color', '#55FF00')
}

function bandcampMouseClicked() {
  window.open("https://hcbehrendtsen.bandcamp.com/releases");
}