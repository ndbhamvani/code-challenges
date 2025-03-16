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
        const invalidChars: string = '!£$%^&*@#~?';

        const unexpectedValue = template.some(val => typeof val !== 'string');
        if (unexpectedValue) {
            throw new Error('Unexpected value!');
        }

        const joinedTemplate = template.join(',');
        const splitTemplate = joinedTemplate.split('');
        let invalidCharCount: number = 0;

        for (let letter in splitTemplate) {
            for (let char of invalidChars) {
                splitTemplate[letter].includes(char) ? invalidCharCount++ : 0;
            }
        }

        const invalidResult =
            invalidCharCount > 0 ||
            template.some(val => val === '') ||
            template.length === 0;

        return invalidResult
            ? 'Not a valid value!'
            : `I like ${template.join(', ')}!`;
    } catch (error) {
        return 'Unexpected value!';
    }
}

  