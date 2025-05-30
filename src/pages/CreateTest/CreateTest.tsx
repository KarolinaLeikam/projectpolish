import { Link } from "react-router-dom";
import styles from "./CreateTest.module.css";
import { useState } from "react";

const token = localStorage.getItem("authToken");

export default function CreateTest() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [answers, setAnswers] = useState("");
  const [audiofile, setAudiofile] = useState<File | null>(null);

  const isButtonDisabled = !text || !answers;

  const createTest = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("answers", answers);
    formData.append("audiofile", audiofile as File);

    try {
      const response = await fetch("http://localhost:3000/api/tests/", {
        method: "POST",
        body: formData,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await response.json();

      if (json.text) {
        setTitle("");
        setText("");
        setAnswers("");
        setAudiofile(null);

        alert("Test created successfully");
      } else {
        alert("Failed to create test");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton}>
        <Link to="/">Go Back</Link>
      </button>
      <div className={styles.content}>
        <h2 className={styles.title}>Create New Test</h2>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="text">Text (use ___ for blanks)</label>
        <textarea
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <label htmlFor="odpowiedzi">Odpowiedzi (oddzielone przecinkami)</label>
        <input
          id="odpowiedzi"
          type="text"
          placeholder="mają, chce, kosztuje"
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        />
        <label htmlFor="file">Audio File</label>
        <input
          id="file"
          type="file"
          accept="audio/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            setAudiofile(file as File);
          }}
        />
        <button
          className={styles.button}
          onClick={createTest}
          disabled={isButtonDisabled}
          style={{
            backgroundColor: isButtonDisabled ? "grey" : "#0f1729",
          }}
        >
          Create Test
        </button>
      </div>
    </div>
  );
}
