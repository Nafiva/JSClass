/*
 name: Pig Latin
 Author: Nafiva Jeza
 Date: 07/04/23 
 Pseudo-code: 
function translateToPigLatin(word):
    if word length is 0 or 1:
        return "Input can't be translated."
    
    convert word to lowercase and store it in lowerWord
    
    define vowels as ['a', 'e', 'i', 'o', 'u']
    
    if lowerWord starts with a vowel:
        return lowerWord + 'way'
    
    if lowerWord starts with two consonants:
        return lowerWord from index 2 to end + lowerWord from index 0 to 1 + 'ay'
    
    return lowerWord from index 1 to end + lowerWord at index 0 + 'ay'


function translatePhraseToPigLatin(phrase):
    split phrase into words and store them in an array called words
    
    create an empty array called translations
    
    for each word in words:
        translate the word using translateToPigLatin() and store it in translatedWord
        add translatedWord to translations
    
    join the words in translations using a space and store the result in translatedPhrase
    
    return translatedPhrase


get user input and store it in userInput

translate userInput using translatePhraseToPigLatin() and store the result in translatedPhrase

print translatedPhrase

*/

function translateToPigLatin(word) {
    // Check if input is empty or a single letter
    if (word.length === 0 || word.length === 1) {
      return "Input can't be translated.";
    }
  
    // Convert the word to lowercase for easier comparison
    const lowerWord = word.toLowerCase();
  
    // Define vowels for comparison
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Check if the word starts with a vowel
    if (vowels.includes(lowerWord[0])) {
      return lowerWord + 'way';
    }
  
    // Check if the word starts with a consonant or two consonants
    if (!vowels.includes(lowerWord[0]) && !vowels.includes(lowerWord[1])) {
      return lowerWord.slice(2) + lowerWord.slice(0, 2) + 'ay';
    }
  
    return lowerWord.slice(1) + lowerWord[0] + 'ay';
  }
  
  function translatePhraseToPigLatin(phrase) {
    // Split the phrase into words
    const words = phrase.split(' ');
  
    // Translate each word and store the translations
    const translations = [];
    for (let i = 0; i < words.length; i++) {
      const translatedWord = translateToPigLatin(words[i]);
      translations.push(translatedWord);
    }
  
    // Join the translated words back into a phrase
    const translatedPhrase = translations.join(' ');
  
    return translatedPhrase;
  }
  
  // Get user input
  const userInput = prompt('Enter a phrase:');
  
  // Translate the phrase
  const translatedPhrase = translatePhraseToPigLatin(userInput);
  
  // Print the translated phrase
  console.log(translatedPhrase);