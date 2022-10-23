import axios from "axios";
import { useEffect, useState } from "react";

function useQuery<T>(url: string): [T | null | undefined, boolean] {
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

  return [value, error];
}

export default useQuery;
