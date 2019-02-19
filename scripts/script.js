const myApp = {};

myApp.sounds = [
  {
    sound: 'dmx',
    era: '2000',
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'jarule',
    era: '2000',
    region: 'east',
    style: 'aggressive',
  },
  {
    sound: '50cent2',
    era: '2000',
    region: 'east',
    style: 'aggressive',
  },
  {
    sound: 'jayzYessir',
    era: '2000',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'fatjoe',
    era: '2000',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'camron',
    era: '2000',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'nas',
    era: '2000',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'odb',
    era: '2000',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'mop',
    era: '2000',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'jadakiss',
    era: '2000',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'tooshort',
    era: '2000',
    region: 'west',
    style: 'aggressive'
  },
  {
    sound: 'natedogg',
    era: '2000',
    region: 'west',
    style: 'relaxed'
  },
  {
    sound: 'snoopdogg',
    era: '2000',
    region: 'west',
    style: 'abstract'
  },
  {
    sound: 'liljon',
    era: '2000',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: 'liljon2',
    era: '2000',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: '36mafia',
    era: '2000',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: 'rickross',
    era: '2000',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: 'pimpc',
    era: '2000',
    region: 'south',
    style: 'relaxed'
  },
  {
    sound: 'lilwayne',
    era: '2000',
    region: 'south',
    style: 'relaxed'
  },
  {
    sound: 'youngjeezy',
    era: '2000',
    region: 'south',
    style: 'relaxed'
  },
  {
    sound: 'birdman',
    era: '2000',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'gucci',
    era: '2000',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'mikejones',
    era: '2000',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'swizzbeats',
    era: '2010',
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'nickiminaj',
    era: '2010',
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'drake',
    era: '2010',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'jayzItsYoBoy',
    era: '2010',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'frenchmontana',
    era: '2010',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'kendrickBiatch',
    era: '2010',
    region: 'west',
    style: 'aggressive'
  },
  {
    sound: 'tydollasign',
    era: '2010',
    region: 'west',
    style: 'relaxed'
  },
  {
    sound: 'schoolboyq',
    era: '2010',
    region: 'west',
    style: 'abstract'
  },
  {
    sound: 'wakaflockaflame',
    era: '2010',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: '2chainzTru',
    era: '2010',
    region: 'south',
    style: 'relaxed'
  },
  {
    sound: 'djkhaled',
    era: '2010',
    region: 'south',
    style: 'relaxed'
  },
  {
    sound: 'juicyjStfu',
    era: '2010',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'meekmill',
    era: 'present',
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'jayzHov',
    era: 'present',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'bigsean',
    era: 'present',
    region: 'east',
    style: 'relaxed'
  },
  {
    sound: 'dannybrown',
    era: 'present',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'desiigner',
    era: 'present',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'kendrickTooToo',
    era: 'present',
    region: 'west',
    style: 'aggressive'
  },
  {
    sound: 'yg',
    era: 'present',
    region: 'west',
    style: 'relaxed'
  },
  {
    sound: 'djmustard',
    era: 'present',
    region: 'west',
    style: 'abstract'
  },
  {
    sound: 'takeoffBitch',
    era: 'present',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: 'fettywap',
    era: 'present',
    region: 'south',
    style: 'relaxed'
  },
  {
    sound: 'travisscott',
    era: 'present',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'takeoff',
    era: 'present',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'youngthug',
    era: 'present',
    region: 'south',
    style: 'abstract'
  },
]

$(function () {

  
  // $('label').removeClass('highlight');
  $('input').on('focus', function(){
    // let input = $(this)
    // console.log(this)
    let inputValue = $('input:checked').val();
    console.log(inputValue)
  })

  $(function () {
    $('.galleryOne .galleryItem').click(function () {
      $('.galleryOne .galleryItem').removeClass('highlight');
      $(this).addClass('highlight');
    });
  });
  $(function () {
    $('.galleryTwo .galleryItem').click(function () {
      $('.galleryTwo .galleryItem').removeClass('highlight');
      $(this).addClass('highlight');
    });
  });
  $(function () {
    $('.galleryThree .galleryItem').click(function () {
      $('.galleryThree .galleryItem').removeClass('highlight');
      $(this).addClass('highlight');
    });
  });

  // submit the form & prevent default
  $('form').on('submit', (event) => {
    event.preventDefault();
    
    // every time we "submit", run the following code:

    // gather user input data by the value attribute
    let userEra = $('input[name=era]:checked').val();
    // console.log(userEra)
    let userRegion = $('input[name=region]:checked').val();

    let userStyle = $('input[name=style]:checked').val();

    // catch the object in the sounds array that matches the user's input and store it's content in an object called usersChoiceArray
    myApp.userChoiceArray = myApp.sounds.filter(function (sounds)

    // since we're calling the filter function on the 'sounds array' we can reference it with by adding a parameter of 'sounds' inside of the .function method.
    {
      return sounds.era === userEra && sounds.region === userRegion && sounds.style === userStyle;
    })

    // generate a random index value based on the amount of objects that are inside of userChoiceArray and store it in a variable called randomNum
    const randomNum = Math.floor(Math.random() * myApp.userChoiceArray.length);

    // Now whichever object is called (by generated index value) from the userChoiceArray, store it in a randomSound object.
    let randomSound = myApp.userChoiceArray[randomNum];

    // Reference the 'sound' property inside of the randomSound object with a 'new Audio constructor'. 'new Audio' goes inside the folder of audio/ and selects the matching sound"
    const audio = new Audio(`audio/${randomSound.sound}.mp3`)

    // run the .play() jQuery function on audio
    audio.play();
  })

})

