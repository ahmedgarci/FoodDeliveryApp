import { useState, useEffect } from 'react';

function FetchDataComponent({ url , method }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url,{method:method});
        if (!response.ok) {
          throw new Error("error while importing data ");
        }
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        setError("oops error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); 


  return {data,loading,error}
}

export default FetchDataComponent;
