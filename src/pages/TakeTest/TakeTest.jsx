import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function TakeTast() {
  const { id } = useParams();
  const [test, setTest] = useState([]);

  useEffect(() => {
    const getTest = async () => {
      const responce = await fetch(`http://localhost:3000/api/tests/${id}`);
      const data = await responce.json();
      setTest(data);
    };
    getTest();
  }, []);
  return (
    <div>
      <h2>Test:{id}</h2>
    
    </div>
  );
}
