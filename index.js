// assigning my MP3s to the piano keys!

const pianoKeys = document.getElementsByClassName('key')
console.log(pianoKeys)

let keyboard = [
  { name: 'a', color: 'white' },
  { name: 's', color: 'white' },
  { name: 'd', color: 'white' },
  { name: 'f', color: 'white' },
  { name: 'g', color: 'white' },
  { name: 'h', color: 'white' },
  { name: 'j', color: 'white' },
  { name: 'k', color: 'white' },
  { name: 'l', color: 'white' },
  { name: ';', color: 'white' },
  { name: 'w', color: 'black' },
  { name: 'e', color: 'black' },
  { name: 't', color: 'black' },
  { name: 'y', color: 'black' },
  { name: 'u', color: 'black' },
  { name: 'o', color: 'black' },
  { name: 'p', color: 'black' },
]

let sounds = [
  'piano-keys/key 1.wav',
  'piano-keys/key 2.wav',
  'piano-keys/key 3.wav',
  'piano-keys/key 4.wav',
  'piano-keys/key 5.wav',
  'piano-keys/key 6.wav',
  'piano-keys/key 7.wav',
  'piano-keys/key 8.wav',
  'piano-keys/key 9.wav',
  'piano-keys/key 10.wav',
  'piano-keys/key 11.wav',
  'piano-keys/key 12.wav',
  'piano-keys/key 13.wav',
  'piano-keys/key 14.wav',
  'piano-keys/key 15.wav',
  'piano-keys/key 16.wav',
  'piano-keys/key 17.wav',
]

// EVENT LISTENER //
document.addEventListener('keydown', function (e) {
  let pressed = e.key
  switch (pressed) {
    // white keys
    case 'a':
      playSound()
      break
    case 's':
      playSound()
      break
    case 'd':
      playSound()
      break
    case 'f':
      playSound()
      break
    case 'g':
      playSound()
      break
    case 'h':
      playSound()
      break
    case 'j':
      playSound()
      break
    case 'k':
      playSound()
      break
    case 'l':
      playSound()
      break
    case ';':
      playSound()
      break
    // black keys
    case 'w':
      playSound()
      break
    case 'e':
      playSound()
      break
    case 't':
      playSound()
      break
    case 'y':
      playSound()
      break
    case 'u':
      playSound()
      break
    case 'o':
      playSound()
      break
    case 'p':
      playSound()
      break
    default:
      console.log('not on keyboard')
  }

  // define play function AND animation!
  function playSound() {
    e.preventDefault()
    // If the event.key press letter is in the 'names' of keyboard array, then get the index of this key object.
    const keyPress = keyboard.find((keyboard) => keyboard.name === pressed)
    // Use the index of 'keyPress' to define the index for accessing sounds in the sounds array.
    if (keyPress) {
      index = keyboard.indexOf(keyPress)
    }
    let note = new Audio(sounds[index])
    note.play()
    // link play sound to 'piano keys' index + add 'active' styling class
    const played = pianoKeys[index]
    played.classList.add('active')
    // styling on 'key up'
    document.addEventListener('keyup', function (e) {
      played.classList.remove('active')
      const keyUp = keyboard.find((keyboard) => keyboard.name === pressed)
      if (keyUp) {
        upIndex = keyboard.indexOf(keyPress)
      }
      let up = pianoKeys[upIndex]
      // reduce opacity in css
      up.classList.add('release')
      // remove active class on 'key up'
      setTimeout(() => {
        up.classList.remove('release')
      }, 500)
    })
  }
})
