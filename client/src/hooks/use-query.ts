import { useEffect, useState } from "react";
import axios from "axios";

function useQuery<T>(url?: string, wait?: boolean) {
  const [value, setValue] = useState<T | null>();
  const [error, setError] = useState(false);
  const [invoke, setInvoke] = useState(false);

  useEffect(() => {
    if (url && (!wait || invoke)) {
      axios
        .get(url)
        .then((res) => setValue(res.data))
        .catch(() => {
          setValue(null);
          setError(true);
        });
    }
  }, [url, invoke, wait]);

  function query() {
    setInvoke(true);
  }

  const rest = { loading: value === undefined, error, query };
  return [value, rest] as [typeof value, typeof rest];
}

export default useQuery;
