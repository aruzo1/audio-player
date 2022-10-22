import { useEffect, useState } from "react";

function usePromise<T>(func: (...args: any) => Promise<any>) {
  const [value, setValue] = useState<T | undefined | null>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    func()
      .then((data) => setValue(data))
      .catch(() => {
        setError(true);
        setValue(null);
      })
      .finally(() => setLoading(false));
  }, [func, setLoading]);

  return { value, loading, error };
}

export default usePromise;
