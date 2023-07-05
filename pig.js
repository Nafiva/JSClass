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