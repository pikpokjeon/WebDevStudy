- Vuex?

--- 복잡한 app 컴포넌트들을 간의 데이터 전달을 효율적으로 관리해주는 라이브러리
--- 주요속성 State (data), Getters (computed), mutations (method), actions (비동기method)

-- Vuex 컨셉

--- state : 컴포넌트 간에 공유하는 데이터 data()
--- view : 데이터를 표시하는 화면 template
--- action : 입력에 따라 데이터를 변경하는 methods <-> Backend API  (ex: axios)
--- mutation : state 변경하는 methods <-> Devtools

-- Vuex 구조

--- 컴포넌트(view) -> 비동기 로직 (action) -> 동기 로직 (mutation) -> 상태 (state)


--- MVC 패턴에서 발생하는 구조적 오류 해결
--- 컴포넌트 간 데이터 전달 명시
--- 여러 개의 컴포넌트에서 같은 데이터를 업데이트하는 동기화 문제 해결

-- Flux?

--- Unidirectional data flow  (데이터의 흐름이 여러 갈래로 나뉘지 않고 '단방향'으로만 처리)
--- action (event emitted) -> dispatcher (modify data) -> model (the data) -> view (show in client view) 