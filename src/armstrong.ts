// armstrong.ts

export class Armstrong {
    private numberStr: string;
  
    constructor(numberStr: string) {
      this.numberStr = numberStr;
    }
      
        private calculateArmstrongValue(): number {
          const digits = this.numberStr.split('').map(Number);
          const numDigits = digits.length;
          const armstrongValue = digits.reduce((total, digit) => total + Math.pow(digit, numDigits), 0);
          return armstrongValue;
        }
      
        isArmstrongNumber(): boolean {
          const number = parseInt(this.numberStr, 10);
          if (isNaN(number)) {
            return false; 
          }
      
          const armstrongValue = this.calculateArmstrongValue();
          return armstrongValue === number;
        }
      }
  
  

  