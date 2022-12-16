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

    if (dateStr.day < 10){
       dateStr.day =  '0' + date.day
    }
    else{dateStr.day = date.day.toString(); }

    
    if (dateStr.month < 10){
        dateStr.month =  '0' + date.month
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






var date = {
    day : 22,
    month : 2,
    year : 2022,
}

console.log(checkPalindromeForAllFormat(date));