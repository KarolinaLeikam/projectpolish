import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Test.module.css";

type Test = {
  title?: string;
  text: string;
  answers: string[];
  audiofile?: string;
};

const getBorderStyle = (userAnswer: string, correctAnswer: string) => {
  console.log(userAnswer, correctAnswer);
  if (userAnswer === correctAnswer) {
    return "1px solid green";
  } else {
    return "1px solid red";
  }
};

export default function Test() {
  const userAnswers = useRef<string[]>([]);
  const results = useRef<boolean[]>([]);
  const { id } = useParams();
  const [checked, setChecked] = useState(false);
  const [test, setTest] = useState<Test | null>(null);

  useEffect(() => {
    const getTest = async () => {
      const response = await fetch(`http://localhost:3000/api/tests/${id}`);
      const data = await response.json();

      setTest(data);
    };
    getTest();
  }, []);

  const renderTest = useMemo(() => {
    if (!test) return null;

    const parts = test.text.split("__");
    const elements = [];

    for (let i = 0; i < parts.length; i++) {
      elements.push(<span key={`text-${i}`}>{parts[i]}</span>);
      if (i < parts.length - 1) {
        elements.push(
          <input
            key={`input-${i}`}
            type="text"
            style={{
              margin: "0 4px",
              width: "100px",
              border: checked
                ? getBorderStyle(userAnswers.current[i], test?.answers[i])
                : "1px solid black",
            }}
            onChange={(e) => {
              userAnswers.current[i] = e.target.value;
            }}
          />
        );
      }
    }

    return elements;
  }, [test, checked]);

  const checkAnswers = () => {
    const correctAnswers = test?.answers;
    console.log(correctAnswers);
    console.log(userAnswers.current);
    const isCorrect = userAnswers.current.every((answer, index) => {
      const isCorrect = answer === correctAnswers[index];
      results.current.push(isCorrect);
    });

    setChecked(true);

    if (isCorrect) {
      alert("You are correct!");
    } else {
      alert("You are incorrect!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{test?.title}</h2>
        {test?.audiofile && <audio src={test?.audiofile} controls />}
        {renderTest}
        <button onClick={checkAnswers}>Check Answers</button>
        {/* <label htmlFor="odpowiedzi">Odpowiedzi (oddzielone przecinkami)</label>
        <input id="odpowiedzi" type="text" placeholder="mają, chce, kosztuje" />
        <label htmlFor="file">Audio File</label>
        <input id="file" type="file" accept="audio/*" />
        <button className={styles.button}>Create Test</button> */}
      </div>
    </div>
  );
}
