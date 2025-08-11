import { api } from "@/services";
import { useEffect, useState } from "react";

interface useGetInterface {
  path: string;
}

const useGet = ({ path }: useGetInterface) => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const request = await fetch(`${api.baseUrl}${path}`);

    const response = await request.json();

    setData(response.results ? response.results : response);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return data;
};

export default useGet;
