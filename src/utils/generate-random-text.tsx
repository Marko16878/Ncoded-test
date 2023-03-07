import { getRandomNumberInRange } from "./get-random-number-in-range";

export function generateRandomText(type: 'title' | 'body') {
    const words = [];
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    //The number of words in the text to be generated
    let numWords = (type === "title" ? getRandomNumberInRange(3, 10) : getRandomNumberInRange(15, 30));
    for (let i = 0; i < numWords; i++) {
        let word = i !== 0 ? '' : uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
        //The number of characters in one word
        let numCharacters = getRandomNumberInRange(1, 15);
        for (let j = 0; j < numCharacters; j++) {
            word += lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
        }
        words.push(word);
    }
    return words.join(' ');
}