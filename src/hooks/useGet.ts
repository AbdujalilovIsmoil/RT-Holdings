import { api } from "@/services";
import { StringMap } from "@/typescript";
import { useEffect, useState } from "react";

const useGet = ({ path }: StringMap) => {
  const [data, setData] = useState([]);

  const getRequest = async () => {
    const request = await fetch(`${api.baseUrl}${path}`, {
      headers: {
        accept: "application/vnd.api+json",
        Authorization: "Basic cG9zdGdyZXM6MQ==",
      },
    });

    const response = await request.json();

    setData(response.results ? response.results : response);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return data;
};

export default useGet;
