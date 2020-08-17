import React, { useState, useEffect } from "react";
import FocusableInput from "./input";
// import "./styles.css";

const App = () => {
  const [focused, setFocused] = useState(false);
  const [word, setWord] = useState("");
  const [added, setAdded] = useState("");
  let newTyped;
  let timer;

  const handleChangeFocused = (e) => {
    setFocused(!focused);
  };

  useEffect(() => {
    // console.log("> Checkbox >", focused);
    // console.log("> WordState >",word);
  });

  const handleChangeInput = (e) => {
    console.log("-----OnChange Start-------");
    console.log(">-----newtyping-------<");

    e.persist();
    setWord(e.target.value);
    newTyped = e.target.value;
    // console.log("newTyped1", newTyped);
    console.log("word1", word);
    setAdded(newTyped.substring(word.length, newTyped.length));

    console.log("Added1", added);
    // if (timer) {
    //   clearTimeout(timer);
    // }
    timer = setTimeout(() => {
      console.log("-----setTimeout Start-------");
      // let newTypedAfter = e.target.value;
      setWord(e.target.value);
      setAdded(newTyped.substring(word.length, newTyped.length));
      console.log("Added>", added);

      newTyped = e.target.value;

      console.log("2sec passed--------");
      // console.log("newTyped2", newTyped);
      console.log("word2", word);
      if (newTyped.indexOf(word.valueOf)) {
        let newAdded = newTyped.substring(word.length, newTyped.length);
        console.log("Added2", added);
        console.log("New added after 3 sec >", newAdded);
      } else {
        console.log("Cannot compare.");
      }
      clearTimeout(timer);
      console.log("-----clearTimeoutt-------");
    }, 3000);
    console.log("-----OnChange Ends-------");
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
