import { useEffect, useState } from "react";

interface useGetInterface {
  path: string;
}

const useGet = ({ path }: useGetInterface) => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const baseUrl = "https://test.repid.uz/api/v1/common";
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
