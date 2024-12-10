import api from "@/services";
import { toast } from "react-toastify";
import { dataTypes, postDataTypes } from "@/typescript/types";

interface postTypes {
  path: string;
  data?: dataTypes;
  onError?: () => void;
  onSuccess?: () => void;
}

const usePost = ({ path }: postTypes) => {
  const onSuccess = () => {
    toast.success("Successfuly", { delay: 2000, pauseOnHover: false });
  };

  const onError = () => {
    toast.error("Error", { delay: 2000, pauseOnHover: false });
  };

  const mutate = (data: postDataTypes) => {
    try {
      api
        .post(`https://api.rtholdings.uz/api/v1/common${path}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          onSuccess();
        });
    } catch {
      onError();
    }
  };

  return { mutate };
};

export default usePost;
