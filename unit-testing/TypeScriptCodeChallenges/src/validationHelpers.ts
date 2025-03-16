export function invalidCharacterCheck(template: string[]):boolean {
    const joinedTemplate = template.join(',');
        const splitTemplate = joinedTemplate.split('');
        let invalidCharCount: number = 0;

        for (let letter in splitTemplate) {
            for (let char of '!£$%^&*@#~?') {
                splitTemplate[letter].includes(char) ? invalidCharCount++ : 0;
            }
        }

        return invalidCharCount > 0 
}



export function missingValueCheck(template: string[]):boolean {
    return template.some(val => val === '') || template.length === 0;
}