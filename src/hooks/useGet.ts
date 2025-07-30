import { useEffect, useState } from "react";

interface useGetInterface {
  path: string;
}

const useGet = ({ path }: useGetInterface) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getRequest = async () => {
    const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);

    if (request.ok && request.status === 200) setIsLoading(false);
    else {
      setIsError(true);
      setIsLoading(false);
    }

    const response = await request.json();

    setData(response.results ? response.results : response);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return data;
};

export default useGet;
