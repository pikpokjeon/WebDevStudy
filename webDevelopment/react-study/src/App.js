import React, { useState, useEffect } from "react";
import FocusableInput from "./FocusableInput";
import "./styles.css";

const App = () => {
  const [focused, setFocused] = useState(false);
  const [word, setWord] = useState("");
  const [timer, setTimer] = useState(undefined);

  const handleChangeFocused = (e) => {
    setFocused(!focused);
  };

  useEffect(() => {
    // console.log("> Checkbox >", focused);
  });

  const handleChangeInput = (e) => {
    // e.persist();
    const content = e.target.value; //인풋 전체입력값

    if (timer) { //setTimeout 객체 상태값 확인,
      clearTimeout(timer); //돌아가고 있는 타이머호출종료
    }

    let newTimer = setTimeout(() => {
      setWord(content); //전체 입력값을 word에 저장
      const added = content.substring(word.length); //이전에 저장된 word값

      console.log("Added >", added);

      setTimer(undefined);//새로 할당된 타임라인 없애기
    }, 1000);

    setTimer(newTimer); //타이머 할당
  };

  return (
    <div>
      <FocusableInput
        focused={focused}
        onChange={handleChangeInput}
        word={word}
      />
      <input type="checkbox" checked={focused} onChange={handleChangeFocused} />
      &nbsp;focused
    </div>
  );
};

export default App;
