import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        if (!url) return;  // Avoid fetching if URL is not provided
  
        setIsLoading(true);
        try {
          const response = await fetch(url);
          
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const contentType = response.headers.get("content-type");
  
          if (contentType && contentType.includes("application/json")) {
            const result = await response.json();
            setData(result);
          } else {
            throw new Error("Received non-JSON response");
          }
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);  // Run the effect again if the URL changes
  
    return { data, isLoading, error };
  };
  
  export default useFetch;
  