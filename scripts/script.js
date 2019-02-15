const myApp = {};

myApp.sounds = [
  {
    sound: 'dmx bark',
    era: 2000,
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'ja rule its murda',
    era: 2000,
    region: 'east',
    style: 'aggressive',
  },
  {
    sound: 'jay-z yessir',
    era: 2000,
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'camron',
    era: 2000,
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'odb shimmy',
    era: 2000,
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'mop',
    era: 2000,
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'jadakiss',
    era: 2000,
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'too short',
    era: 2000,
    region: 'west',
    style: 'aggressive'
  },
  {
    sound: 'nate dogg',
    era: 2000,
    region: 'west',
    style: 'cool'
  },
  {
    sound: 'snoop dogg',
    era: 2000,
    region: 'west',
    style: 'abstract'
  },
  {
    sound: 'lil jon',
    era: 2000,
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: 'pimp c',
    era: 2000,
    region: 'south',
    style: 'cool'
  },
  {
    sound: 'lil wayne',
    era: 2000,
    region: 'south',
    style: 'cool'
  },
  {
    sound: 'birdman',
    era: 2000,
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'gucci',
    era: 2000,
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'swizz',
    era: 2010,
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'drake',
    era: 2010,
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'jay-z',
    era: 2010,
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'french',
    era: 2010,
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'kendrick',
    era: 2010,
    region: 'west',
    style: 'aggressive'
  },
  {
    sound: 'ty dolla sign',
    era: 2010,
    region: 'west',
    style: 'cool'
  },
  {
    sound: 'schoolboy q',
    era: 2010,
    region: 'west',
    style: 'abstract'
  },
  {
    sound: 'waka',
    era: 2010,
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: '2 chainz tru',
    era: 2010,
    region: 'south',
    style: 'cool'
  },
  {
    sound: 'juicy j stfu',
    era: 2010,
    region: 'south',
    style: 'abstract'
  },
  {
    sound: 'meek mill',
    era: 'present',
    region: 'east',
    style: 'aggressive'
  },
  {
    sound: 'jay-z',
    era: 'present',
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'big sean',
    era: 'present',
    region: 'east',
    style: 'cool'
  },
  {
    sound: 'danny brown',
    era: 'present',
    region: 'east',
    style: 'abstract'
  },
  {
    sound: 'kendrick',
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
    sound: 'dj mustard',
    era: 'present',
    region: 'west',
    style: 'abstract'
  },
  {
    sound: 'takeoff',
    era: 'present',
    region: 'south',
    style: 'aggressive'
  },
  {
    sound: 'fetty wap',
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
    sound: 'travis scott',
    era: 'present',
    region: 'south',
    style: 'abstract'
  }
]

$(function() {

  // submit the form & prevent default
  $('form').on('submit', (event) => {
    event.preventDefault();

    // gather all user inputs
  let userEra = $('option[name=region]:selected').val();
    console.log(userEra)
  })

  
})
