// Chapter 2.1:Starting If

// Qs 1
function maxNumber(a,b) {
    if(a>b) console.log(`${a} is maximum`)
        else console.log(`${b} is maximum`)
}
// Qs 2
function divisibleBy5(a) {
    if(a%5 == 0) console.log(`${a} is divisible by 5`)
        else console.log(`${a} is not divisible by 5`)
}
// Qs 3
function posAndNeg(a){
    if (a>=0) {
        console.log(`${a} is positive`);
    }
    else{
        console.log(`${a} is negetive`);
    }
}
// Qs 4
function divisible(a,b){
    if(a%b == 0){
        console.log(`${a} is divisible by ${b}`);
    }
    else{
        console.log(`${a} is not divisible by ${b}`);
    }
}
// Qs 5
function singleDigitOrNot(a){
    if (a/10 == 0) {
        console.log(`${a} is single digit number`);
    } else {
        console.log(`${a} is bot single digit number`);
    }
}
// Qs 6
function leapYear(a){
    if (a%4 == 0) {
        console.log(`${a} is leap year`);
    } else {
        console.log(`${a} is not leap year`);
    }
}
// Qs 7
function evenOrOdd(a){
    if (a%2 == 0) {
        console.log(`${a} is even`);
    } else {
        console.log(`${a} is odd`);
    }
}
// Qs 8
function equality(a,b){
    if (a === b) {
        console.log(`two numbers are equal`);
    } else {
        console.log(`two numbers are not equal`);
    }
}
// Qs 9
function greaterArea(l,b,r){
    let area_of_rectangle = l*b;
    let circle_area = r*r*22/7;
    if(area_of_rectangle > circle_area){
        console.log(`Reactangle has greater area`);
    }
    else{
        console.log(`circle has greater area`);
    }
}
// Qs 10
function passOrFail(marks){
    if (marks  >= 50) {
        console.log(`Pass`);
    } else {
        console.log(`Fail`);
    }
}
// Qs 11
function triangle(a,b,c){
    if(a+b+c == 180){
        console.log(`Triangle is possible`);
    }
    else{
        console.log(`Triangle is not possible`);
    }
}
// Qs 12
function profitORLoss(buying_amount,selling_amount){
    if (buying_amount>selling_amount) {
        console.log(`Profit`);
    } else {
        console.log(`Loss`)
    }
}
// Chapter 2.2:Nested If
// Qs 1
function check(a,b,c){
    if (a>b && a>c) {
        return a;
    }
    else if(b>a && b>c) return b;

    return c;

}
// Qs 2
function canVote(age,Indian,time) {
    if (age >=18 && Indian == 1 && time>=5) {
        console.log(`Candidate can have voter card`)
    }
    else{
        console.log(`Candidate can't vote`)
    }
}
// Qs 3 is similar to Qs 2
// Qs 4--> Done
// Qs 5
function trianglePossibility( a,b,c){
    if (a+b >c && b+c>a && a+c>b) {
        return true;
    }
    return false;
}
// Qs 6
function typeOfTraiangle(a,b,c) {
    if (a == b && b == c) {
        console.log(`Triangle is equilateral`);
    }
    else if((a==b && b!=c) || (b==c && c!=a) || (c==a && a!=b)){
        console.log(`Isosceles triangle`);
    }
    else{
        console.log(`Scalen Triangle`);
    }
}
// Qs 7
function typeOfTraiangle2(a,b,c) {
    if( a<90 && b<90 && c<90){
        console.log(`Acute angled Triangle`);
    }
    else if(a>90 || b>90 || c>90){
        console.log(`Obtuse Angled Triangle`);
    }
    else if(a == 90 || b == 90 || c == 90){
        console.log(`right angled triangle`);
    }
}
// Qs 8

// Qs 9
function Season(month) {
    if(month == 12 || (month>=1 && month<=2)){
        console.log(`winter`);
    }
    if(month>=3 && month<=5){
        console.log(`Summer`)
    }
    if (month>=6 && month<=8) {
        console.log(`Monsoon`)
    }
    if (month >=9 && month<=11) {
        console.log(`Autumn`)
    }
}
// Qs 10 & Qs 11
function gradeAndRemarks(marks){
    if (marks > 90) {
        console.log(`A and Too good`)
    }
    else if(marks>=80 && marks<=90){
        console.log(`A and good`)
    }
    else if(marks<80 && marks>=60){
        console.log(`B and Average`)
    }
    else if(marks>=40 && marks<60){
        console.log(`C and Average`)
    }
    else if(marks<40 && marks>=20){
        console.log(`D and Average`)
    }
    else if(marks<20 && marks>=10){
        console.log(`Bad`)
    }
    else{
        console.log(`Too Bad`)
    }
}
// Qs 12
function roots(a,b,c){
    let r1 = (-b+Math.sqrt(b**2-4*a*c))/(2*a);
    let r2 = (-b-Math.sqrt(b**2-4*a*c))/(2*a);
    console.log(`roots are ${r1} and ${r2}`)
    if(r1 == r2){
        console.log(`roots are equal`)
    }
    else{
        console.log(`roots are not equal`)
    }
}
// Qs 13
function noOfDays(month,year) {
    if (year%4 == 0) {
        if(month == 2){
            console.log(`Number of days is 29`);
        }
        if(month%2 == 1){
            console.log(`Number of days 31`)
        }
        else if(month%2 == 0 && month!=2){
            console.log(`Number of days 30`)
        }
    } else {
        if(month == 2){
            console.log(`Number of days is 28`);
        }
        if(month%2 == 1){
            console.log(`Number of days 31`)
        }
        else if(month%2 == 0 && month!=2){
            console.log(`Number of days 30`)
        }
    }
}
// Qs 14
function positionOfAPoint(x,y) {
    if(x>0 && y>0){
        console.log(`First Quardinate`)
    }
    else if(x<0 && y>0){
        console.log(`Second Quardinate`)
    }
    else if(x<0 && y<0){
        console.log(`Third Quardinate`)
    }
    else if(x == 0 && y == 0){
        console.log(`Origin`)
    }
    else{
        console.log(`Fourth Quardinate`)
    }
}
// Qs 15
function totalPayableAmount(unit) {
    if (unit <= 200) {
        return unit*1;
    }
    else if(unit>=201 && unit <=400){
        return unit*2;
    }
    else if(unit>=401 && unit<=600){
        return unit*3;
    }
    else if(unit >= 601){
        return unit*4;
    }
    return -1;
}
// Qs 17

// Qs 18
function payableTax(salary) {
    if (salary<10000) {
        console.log(`tax is 0`)
    }
    else if(salary>=10000 && salary<20000){
        console.log(`Tax is ${(salary*10)/100}`)
    }
    else if(salary>=20000 && salary<30000){
        console.log(`Tax is ${(salary*20)/100}`)
    }
    else{
        console.log(`Tax is ${(salary*30)/100}`)
    }
}
