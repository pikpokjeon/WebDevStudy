//서식 문자열

// %o : 객체를 가리키는 하이퍼링크로 변환 (노드지원x)
// %d : 정수값으로 (노드는 숫자로)
// %s : 문자열로
// %f : 부동소수점으로 (노드지원x)
const name = "yaejin";
const height = 199.99;

// console 메서드 : 받는 인수와 표시하는 문자열같음

// console.log   
console.log("그의 이름은 %s 이며 키는 %f 입니다", name, height);

// console.info
// console.warn
// console.error

const b = {x:1,y:2};
// 객체의 프로퍼티를 목록으로
// console.dir(b)

// 타이머 : 특정 코드의 실행시간을 측정
console.time("a_time");
let a = prompt("이름을 적어주세요");
console.timeEnd("a_time");  // a_time : 000,000 ms 처리에 소요된 시간