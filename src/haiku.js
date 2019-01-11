export class Haiku {

  constructor(string) {
    let lines = this.newFromString(string)
    this.lineOne = lines[0];
    this.lineTwo = lines[1];
    this.lineThree = [2];
  }

  checkLength(haikuArray) {
    if (haikuArray.length != 3) {
      return "Haiku length invalid"
    }
  }

  newFromString(userString) {
    let haikuArray = userString.split(/\r?\n/);
    console.log(haikuArray);
    return haikuArray;
  }

  vowelFriendsCount(string) {
    const vowels = /[aeiouy]{2,}/ig;

    let vowelFriends = string.match(vowels).length

    return vowelFriends;

  }

  vowelCabooseCheck(string) {
    if (string.match(/[aeiou]$/i).length != null) {
      return 1;
    }

  }

  syllableCount(string) {
    debugger;
    let vowelCount = this.vowelCount(string,'v');
    let vowelFriendsCount = this.vowelFriendsCount(string);
    let syllables = vowelCount - vowelFriendsCount;

    return syllables;

  }



  vowelCount(string, returnType) {
    const vowels = /[aeiouy]/ig;
    const consonants = /[bcdfghjklmnpqrstvwxz]/ig;
    const dipthongs = ['oi', 'oy', 'ou', 'ow', 'au', 'aw', 'oo'];

    let counterVowels = string.match(vowels).length;
    let counterConsonants = string.match(consonants).length;

    let charTypes = [counterVowels, counterConsonants];

    if (returnType.toLowerCase() == 'v') {
      return charTypes[0];
    } else if (returnType.toLowerCase() == 'c') {
      return charTypes[1];
    }
    return "Invalid returnType. Must use 'v/c' second argurment in function call."
  }

}
