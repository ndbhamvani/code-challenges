export function invalidCharacterCheck(template: string[]):boolean {
    const invalidChars = '!£$%^&*@#~?'
    const joinedTemplate = template.join(',');
    const individualTemplateChars = [...joinedTemplate]

    return individualTemplateChars.some(char => invalidChars.includes(char))
        
}



export function missingValueCheck(template: string[]):boolean {
    return template.some(val => val === '') || template.length === 0;
}