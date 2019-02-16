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
    sound: 'jayzYessir',
    era: '2000',
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'camron',
    era: '2000',
    region: 'east',
    style: 'cool'
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
    style: 'cool'
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
    sound: 'pimpc',
    era: '2000',
    region: 'south',
    style: 'cool'
  },
  {
    sound: 'lilwayne',
    era: '2000',
    region: 'south',
    style: 'cool'
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
    sound: 'swizzbeats',
    era: '2010',
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'drake',
    era: '2010',
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'jayzItsYoBoy',
    era: '2010',
    region: 'east',
    style: 'cool'
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
    style: 'cool'
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
    style: 'cool'
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
    style: 'cool'
  },
  {
    sound: 'bigsean',
    era: 'present',
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'dannybrown',
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
    style: 'cool'
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
    style: 'cool'
  },
  {
    sound: 'desiigner',
    era: 'present',
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'travisscott',
    era: 'present',
    region: 'south',
    style: 'abstract'
  }
]

$(function() {

  // submit the form & prevent default
  $('form').on('submit', (event) => {
    console.log(this)
    event.preventDefault();

  // gather user input data using the value attribute
  let userEra = $('option[name=era]:selected').val();
    // console.log(userEra)

  let userRegion = $('option[name=region]:selected').val();
    // console.log(userRegion)

  let userStyle = $('option[name=style]:selected').val();
    // console.log(userStyle)

  // catch the object that matches every criteria and store them in a variable called userChoice
    myApp.userChoiceArray = myApp.sounds.filter(function(sounds) {
      return sounds.era === userEra && sounds.region === userRegion && sounds.style === userStyle;
    })
    // console.log(myApp.userChoiceArray)

  // generate a random index value that will determine our final sound selection
    const randomNum = Math.floor(Math.random() * myApp.userChoiceArray.length);
    // console.log(randomNum);

    let randomSound = myApp.userChoiceArray[randomNum];
    // console.log(randomSound.sound)

    var audio = new Audio(`audio/${randomSound.sound}.mp3`)
    audio.play();
  })

    

  // var audio = new Audio('audio/camron_2.mp3');
  // audio.play();

  
  

  
  


  
})

