import { useState, useEffect } from 'react';

function FetchDataComponent({ url , method , dataToSend=null}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url,{
          method:method,
          body:dataToSend,
          credentials:"include",
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        setData(result.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, [url]); 


  return {data,loading,error}
}

export default FetchDataComponent;
