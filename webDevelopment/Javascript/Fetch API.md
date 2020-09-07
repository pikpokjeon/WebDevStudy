- Fetch API

-- 자바스크립트 환경에서 HTTP pipeline (request, respond)에 접근하고 통제하게 해주는 API

--- fetch() : 전역 메서드

```
  fetch('html').then((res) => ( res.text().then((text) => { doucment.querySelector('article).innerHTML = text })))

```
--- fetch('a') : 첫번째 인자 'a' 를 서버에 request 한다.
--- 서버가 a를 respond 할 때 까지 다른일 한다 = 비동기
--- respond 때는 .then(b) b를 실행한다.