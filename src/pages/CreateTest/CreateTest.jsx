import { Link } from 'react-router-dom';
import styles from './CreateTest.module.css';
import { useState } from 'react';
export default function CreateTest() {
  const [title,setTitle] = useState('');
  const [question,setQuestion] = useState('');
  const [answer,setAnswer] = useState('');
  const [audio,setAudio] = useState(null);
  const [questionsList, setQuestionsList] = useState([]);

  const handleAddQuestion = () => {
    if (title && question && answer) {
      const newItem = {
        title: title,
        text: question,
        answers: answer.split(',').map(a => a.trim()), // превращаем строку в массив
        audiofile: audio, // можно сохранить как File или ссылку
        
      };
      setQuestionsList([...questionsList, newItem]);
      setQuestion();
      setAnswer();
      setAudio();
    }
  };
  
  const handleCreateTest = async () => {
    const token = localStorage.getItem('authToken');

    const body = {
      title,
      token,
      questions: questionsList,
    };

    const response = await fetch('http://localhost:3000/api/tests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Create New Test</h2>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="text">Text (use ___ for blanks)</label>
        <textarea name="text" id="text" value={question} onChange={(e)=>setQuestion(e.target.value)}></textarea>
        <label htmlFor="odpowiedzi">Odpowiedzi (oddzielone przecinkami)</label>
        <input id="odpowiedzi" type="text" placeholder="mają, chce, kosztuje" value={answer} onChange={(e)=>setAnswer(e.target.value)} />
        <label htmlFor="file">Audio File</label>
        <input id="file" type="file" accept="audio/*" value={audio} onChange={(e)=>setAudio(e.target.value)} />
        <Link className={styles.button} to="/">
          Create Test
        </Link>
      </div>
    </div>
  );
}
}