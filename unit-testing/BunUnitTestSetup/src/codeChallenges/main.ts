import { invalidCharacterCheck, missingValueCheck } from "../helpers/validationHelpers";

export function noBoringZeros(n: number): number {
    let count:number = 0;
    for (let i = n.toString().length - 1; i >= 0; i--) {
        
        if (n.toString()[i] == '0' ){
          count++
        } else {
          break
        }
      }
    
    return n / 10 ** count;
  }



export function buildString(...template: string[]): string {
  try {

      const unexpectedValue = template.some(val => typeof val !== 'string');
      if (unexpectedValue) {
          throw new Error('Unexpected value!');
      }

      const invalidResult =
          invalidCharacterCheck(template)     ||
          missingValueCheck(template)

      return invalidResult
          ? 'Not a valid value!'
          : `I like ${template.join(', ')}!`;
  } catch (error) {
      return 'Unexpected value!';
  }
}



export function nextId(ids: number[]): number {
  
  const sortedIds = [...new Set(ids.sort((a, b) => a - b))];

  for (let i = 0; i < ids.length; i++) {
    if (i !== sortedIds[i]){
      return i
    }
  }

  return ids.length
}