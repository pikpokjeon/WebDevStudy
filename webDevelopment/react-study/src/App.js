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
    console.log("-----OnChange Start-------");
    console.log(">> newtyping <<");

    e.persist();

    const content = e.target.value;

    if (timer) {
      clearTimeout(timer);
    }

    let newTimer = setTimeout(() => {
      console.log("-----setTimeout Start-------");
      const added = content.substr(word.length);
      setWord(content);
      console.log("Added>", added);

      setTimer(undefined);

      console.log("/---clearTimeout----/");
    }, 3000);
    console.log("-----OnChange Ends-------");
    setTimer(newTimer);
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
