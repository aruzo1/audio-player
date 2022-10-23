import { useEffect, useState } from "react";
import axios from "axios";

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

  const rest = { loading: value === undefined, error };
  return [value, rest] as [typeof value, typeof rest];
}

export default useQuery;
