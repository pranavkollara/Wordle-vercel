"use client";
import Keyboard from "../modules/Keyboard";
import { useState, useEffect, useRef } from "react";
import Letters from "../modules/Letters";
import Wait from "../modules/Wait";
import Win from "../modules/Win";
import Notwin from "../modules/Notwin";

export default function Home({ user, name }) {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const userAddedRef = useRef(false);
  const wordFetch = useRef(false);
  const addedtry = useRef(false);
   
  useEffect(() => {
    async function TRY() {
      if (addedtry.current) return;
      addedtry.current = true;
      console.log("okay");
      const response = await fetch(`https://wordle-vercel-chi.vercel.app/try/${user}`, {
        method: "PATCH"
      });
    }
    TRY();
  }, [user]);

  useEffect(() => {
    async function adduser() {
      if (userAddedRef.current) return; // Prevent running more than once
      userAddedRef.current = true;
      // console.log("okay");
      const response = await fetch(`https://wordle-vercel-chi.vercel.app/adduser/${user}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user,
          name: name,
        }),
      });
    }
    adduser();
  }, [user, name]);
  // https://random-word-api.herokuapp.com/word?length=5&lang=en
  // https://random-word.ryanrk.com/api/en/word/random/?length=5

  useEffect(() => {
    const fetchData = async () => {
      if(wordFetch.current) return;
      wordFetch.current=true;
      try {
        const response = await fetch(
          "https://random-word.ryanrk.com/api/en/word/random/?length=5"
        );
        const data = await response.json();
        setCorrectAnswer(data[0].toLowerCase());
        setLoading(false);
      } catch (error) {
        console.error("Error fetching word:", error);
      }
    };

    fetchData();
  }, []);

  console.log(correctAnswer);

  const [currentGuess, setcurrentGuess] = useState("");
  const [guesschecker, setguesschecker] = useState("1234");
  const [letters, setletters] = useState("");
  const [guess1, setguess1] = useState("     ");
  const [guess2, setguess2] = useState("     ");
  const [guess3, setguess3] = useState("     ");
  const [guess4, setguess4] = useState("     ");
  const [guess5, setguess5] = useState("     ");
  const [guess6, setguess6] = useState("     ");
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);
  const [col5, setcol5] = useState(false);
  const [col6, setcol6] = useState(false);
  const [loading, setLoading] = useState(true);

  const [guess, setguess] = useState(1);

  function addGuess(e) {
    if (guess == 1) {
      setguess1(e.target.value);
      setcurrentGuess(e.target.value);
    } else if (guess == 2) {
      setguess2(e.target.value);
      setcurrentGuess(e.target.value);
    } else if (guess == 3) {
      setguess3(e.target.value);
      setcurrentGuess(e.target.value);
    } else if (guess == 4) {
      setguess4(e.target.value);
      setcurrentGuess(e.target.value);
    } else if (guess == 5) {
      setguess5(e.target.value);
      setcurrentGuess(e.target.value);
    } else if (guess == 6) {
      setguess6(e.target.value);
      setcurrentGuess(e.target.value);
    }
  }

  function handleEnter(e) {
    //console.log(e);
    if (currentGuess.length == 5) {
      if (e.key === "Enter") {
        if (guess == 1) {
          setcol1(true);
          setguess(2);
          setletters(letters + guess1);
        } else if (guess == 2) {
          setcol2(true);
          setguess(3);
          setletters(letters + guess2);
        } else if (guess == 3) {
          setcol3(true);
          setguess(4);
          setletters(letters + guess3);
        } else if (guess == 4) {
          setcol4(true);
          setguess(5);
          setletters(letters + guess4);
        } else if (guess == 5) {
          setcol5(true);
          setguess(6);
          setletters(letters + guess5);
        } else if (guess == 6) {
          setcol6(true);
          setletters(letters + guess6);
          setguess(7);
        }

        setguesschecker(currentGuess);
        setcurrentGuess("");
      }
    }
  }

  if (loading) {
    return <Wait></Wait>;
  }

  const isWIn = guesschecker == correctAnswer;
  const isNotwin = guess > 6 && guesschecker !== correctAnswer;

  return (
    <div className="w-full h-full">
      <div className="absolute w-full h-[91%]">
        {isWIn && <Win word={correctAnswer} guesses={guess} user={user}/>}
        {isNotwin && <Notwin word={correctAnswer} guesses={guess} user={user} />}
      </div>

      {(isWIn || isNotwin) && (
        <div className="w-screen h-[91%] bg-black/75 absolute z-40"></div>
      )}

      {/* <h1 className=' text-center  text-4xl font-serif '>Word Game</h1> */}
      <div className="flex flex-col items-center h-fit">
        <div className="mb-5 mt-4 ">
          <input
            type="text"
            // autoFocus

            spellCheck={false}
            value={currentGuess}
            minLength={5}
            maxLength={5}
            className="input w-full h-1/2 max-w-xs cursor-default focus:outline-none decoration-transparentc bg-transparent text-transparent border-none absolute z-40"
            onChange={addGuess}
            onKeyDown={handleEnter}
          />

          <Letters word={guess1} answer={correctAnswer} col={col1}></Letters>
          <Letters word={guess2} answer={correctAnswer} col={col2}></Letters>
          <Letters word={guess3} answer={correctAnswer} col={col3}></Letters>
          <Letters word={guess4} answer={correctAnswer} col={col4}></Letters>
          <Letters word={guess5} answer={correctAnswer} col={col5}></Letters>
          <Letters word={guess6} answer={correctAnswer} col={col6}></Letters>
        </div>
        <Keyboard guessedLetters={letters} answer={correctAnswer}></Keyboard>
      </div>
    </div>
  );
}
