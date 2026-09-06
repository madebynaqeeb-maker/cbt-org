import { useEffect, useState } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    fetch(url)
      .then(async (res) => {
        const body = await res.json().catch(() => null);
        if (!res.ok) {
          throw new Error(
            (body && (body as { error?: string }).error) || 'Could not load data from the server.'
          );
        }
        return body;
      })
      .then((body) => {
        if (alive) setData(body as T);
      })
      .catch((err: unknown) => {
        if (alive) setError(err instanceof Error ? err.message : 'Something went wrong.');
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [url, nonce]);

  return { data, loading, error, refetch: () => setNonce((n) => n + 1) };
}
