import { useEffect, useState } from "react";

interface useGetInterface {
  path: string;
}

const useGet = ({ path }: useGetInterface) => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const request = await fetch(`${baseUrl}${path}`);

    const response = await request.json();

    setData(response.results ? response.results : response);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return data;
};

export default useGet;
