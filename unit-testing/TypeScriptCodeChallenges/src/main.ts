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

  