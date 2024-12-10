"use client";

import api from "@/services";
import { useEffect, useState } from "react";

interface useGetTypes {
  path: string;
}

const useGet = <T>({ path }: useGetTypes) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    api
      .get<T>(`https://api.rtholdings.uz/api/v1/common${path}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((data) => {
        setData(data.data);
      });
  }, [path]);

  return { data };
};

export default useGet;
