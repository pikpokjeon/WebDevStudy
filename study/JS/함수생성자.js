//function 생성자
let x = 1;
const square = new Function( 'return x+x');

//첫번째 인자는 인수의 이름을 나타내는 문자열, 두번째 인수는 함수의 body 문자열
//new Function(인수이름,함수몸통,..,..) 차례로 n개 열거
const square2 = new Function('x', 'return x+x');

//함수생성자의 단점은??몰까->악성스크립트 해킹문제

//함수생성자 장점?? 함수리터럴에 래퍼객체(???) 제공