function countWordOccurrences(sentence: string, word: string): number {
  let words = sentence.toLowerCase().split(" ");
  const output = words.filter((w) => w === word.toLowerCase());
  return output.length;
}

console.log(countWordOccurrences("I love typescript", "typescript"));
