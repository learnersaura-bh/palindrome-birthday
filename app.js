const dateOfBirth = document.querySelector("#date-of-birth")
const checkbutton = document.querySelector("#check-button")

function reverseStr(str){
var separateCharacters = str.split('');
var revSeparateCharacters = separateCharacters.reverse();
var joinCharacters = revSeparateCharacters.join('');
// var ulta = str.split('').reverse().join('');
return joinCharacters;
}

function isPalindrome(str){
 var reverse = reverseStr(str);
return str === reverse;
}

function changeDateToString(date){

    dateStr = { day : "" , month: "" , year : ""}

    if (date.day < 9){
       dateStr.day =  '0' + date.day
    }
    else{dateStr.day = date.day.toString(); }

    
    if (date.month < 10){
        dateStr.month = '0' + date.month;
     }
     else{dateStr.month = date.month.toString(); }

     dateStr.year = date.year.toString();

     return dateStr;
}

function getAllDateFormats(date){

    var dateStr = changeDateToString(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;


    return [ ddmmyyyy , mmddyyyy, yyyymmdd , ddmmyy , mmddyy, yymmdd];
}


function checkPalindromeForAllFormat(date){
    var listOfPalindromes = getAllDateFormats(date);

    var flag = false;

    for(var i=0; i<listOfPalindromes.length; i++){
        if(isPalindrome(listOfPalindromes[i])){
            flag= true;
            break;
        }
    }
return flag ;

}

function isLeapYear(year){
    if(year%400 === 0){
        return true;
    }
    if(year%100 === 0){
        return true;
    }
    if(year%4 === 0){
        return true;
    }
    
   else return false;
}

function getNextDate(date){
   var day = date.day + 1;
   var month = date.month;
   var year = date.year;


   var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   if (month === 2){
    if(isLeapYear(year)){
        if(day > 29){
            day = day+1
            month++
        }

    }
    else {
        if(day > 28){
            day = day+1;
            month++
        }
    }
}
   else {
    if(day > daysInMonth[month-1]){
        day=1;
        month++;
    }
   }
   if(month > 12){
    month = 1;
    year++
   }
   return{
    day : day,
    month : month,
    year : year,
   };
}

function getNextPalindromeDate(date){
    var ctr = 0;
    var nextDate = getNextDate(date);

    while(1){
        ctr = ctr+1
        var isPalindrome = checkPalindromeForAllFormat(nextDate);
        if (isPalindrome){
            break;
        }
        else{nextDate = getNextDate(nextDate);}
    }

return [ctr, nextDate]

}


var birthdayInput = document.querySelector("#date-of-birth");
var checkButton = document.querySelector("#check-button");
var showOutput = document.querySelector("#show-output");

function clickEventhandler(e){
   var bdayStr = birthdayInput.value;
   if(bdayStr!== ''){
    var listOfDate = bdayStr.split('-');
    var date = {
        day : Number(listOfDate[2]),
        month : Number(listOfDate[1]),
        year : Number(listOfDate[0])
    };
    var isPalindrome = checkPalindromeForAllFormat(date);

    if(isPalindrome){
        showOutput.innerText = "Yes It is palindrome date"
    }
    else {
       var [ctr , nextDate] = getNextPalindromeDate(date);
       showOutput.innerText = `The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you are ${ctr} days away from it `
    }
   }
else{showOutput.innerText = "**Please enter the Date, it should not be empty"}
}


checkButton.addEventListener("click" , clickEventhandler);