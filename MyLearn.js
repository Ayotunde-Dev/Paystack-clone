/*
 assignment
 nested if, if else, switch, else if
 */
number = 12;
  let foodClass ="oil"
  
if (number > 5) {
    console.log('number is greater than 5') 
    if (number % 2 == 0) {
        console.log('number is divisible by 2')
        if (number / 2 > 5) {
            console.log('the number is not less than 10')
            if (number * 2 == 24) {
                console.log('the number is 12')
                
            }
        }
    }
}

if (number < 5) {
    console.log('number is less than 5')
} else {
    console.log('number is not less than 5')
     if (number % 2 != 0) {
        console.log('number is odd')
    } else 
    {
        console.log('number is even')
        if (number >= 5 && number <= 12) {
            console.log('number is between 5 and 12')
        } else {
            console.log('number is unknown')
            
        }
    }
}

let food = 'eba';

switch (food) {
    case 'rice':
        console.log('this is rice')
        break;
    case 'eba':
        console.log('this is eba')
         switch (food) {
            case 'eba':
                console.log('i dont like eba')
                break;
        
            default:
                console.log('I like eba')
                break;
        }

    default:
        console.log('food is not known')
        break;
}

let digit = 15;

if (digit > 10) {
    console.log('double digit'); if (digit > 15) {
        console.log('greater than 15')
    } else {
        console.log('less than 15'); if (digit % 2 == 0) {
            console.log('number is even and between 10 and 14')
            
        } else {
            console.log('number is odd and between 10 and 14'); if (digit < 13) {
                console.log('number is less than 13')
            } else {
                console.log('number is greater than 13'); if (number == 15) {
                    console.log('i got the number')
                    
                }
                else { 
                    console.log('try again')
                }
            }
        }
    }
} else {
    console.log('single digit')
    
}