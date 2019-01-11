function cct_getInfo(text){
  var cctInfo = []; //creates empty array for capture info
  cctInfo['num_character'] = text.length; //created a 'num_character' object property set to total char length of input

  text=$.trim(text); //removes empty spaces from end of text input
  var processedText=text.replace(/(\w)[-_'](\w)/gi,"$10$2"); //replaces all instances of '_' '-' and ''' that occur between ALPHA characters with '0'
  processedText=processedText.replace(/(\d)[,.](\d)/gi,"$10$2"); //replaces all instances of ',' and '.' that occur between NUMBERIC characters with '0'

  var wordList=processedText.split(/[\s\n]+/); //transforms input string into array of strings, splitting at empty spaces and new line breaks

  cctInfo['num_word']=0; //creates 'num_word' property, initializing it at 0
  if(processedText.length>0) {
    cctInfo['num_word'] = wordList.length; //if the inputted string is not empty after manipulation, the number of words is set to equal the number of elements in the wordList array.
  }
  //syllable counts
  cctInfo['num_syllable']=0; //creates a 'num_syllable' property set to 0
  var num_syllable=0;

  for(var i=0;i<wordList.length;i++){
    var num_syllable_of_word=getSyllable(wordList[i]); //calls getSyllable function on each wordList array element
    num_syllable+=num_syllable_of_word; //adds the integer result of the getSyllabe function to the total syllable count for string input
  }

  cctInfo['num_syllable']=num_syllable; //creats a 'num_syllable' property set to result of string syllable check

  return cctInfo; //returns cctInfo object back from function. Each time this runs, updated properties are returned for character count, word count, and syllable count
}

function getSyllable(word){
  word = word.toLowerCase();      //word.downcase!
  if(word.length==0)  //returns a 0 if the word has no length ('')
    return 0;
  if(word.length <= 2) { //if the word is less than 3 characters, it is automatically assinged a syllable length of 1
    return 1;
  }                             //return 1 if word.length <= 2
  // word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, ''); //removes any 'y' at the beginning of a word so it does not count as a vowel
  var syllable_match=word.match(/[aeiouy]{1,2}/g);
  if(syllable_match)
    return syllable_match.length;                    //word.scan(/[aeiouy]{1,2}/).size
  else
    return 1;
}
