import axios from "axios";
import { useEffect, useState } from "react";

function useQuery<T>(url: string) {
  const [value, setValue] = useState<T | null>();
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setValue(res.data))
      .catch(() => {
        setValue(null);
        setError(true);
      });
  }, [url, setValue]);

  return { value, loading: value === undefined, error };
}

export default useQuery;
