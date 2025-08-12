import axios from "axios";
import { api } from "@/services";
import { useState } from "react";
import { toast } from "react-toastify";
import { StringMap } from "@/typescript";

const langSuccessData: StringMap = {
  ko: "귀하의 정보가 전송되었습니다.",
  uz: "Ma'lumotlaringiz yuborildi",
  ru: "Ваша информация отправлена.",
  en: "Your information has been sent.",
};

const langErrorData: StringMap = {
  ko: "시스템 오류가 발생했습니다. 다시 시도해 주세요.",
  en: "A system error occurred, please try again.",
  ru: "Произошла системная ошибка, попробуйте еще раз.",
  uz: "Tizimda xatolik ro'y berdi, yana bir-bor urinib ko'ring.",
};

const toastProps = {
  autoClose: 5000,
  draggable: false,
  pauseOnHover: false,
};

const usePost = ({ lang }: StringMap) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function mutate<T>(data: T) {
    setIsLoading(true);

    axios
      .post(api.baseUrl, data)
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        toast.success(langSuccessData[lang], toastProps);
      })
      .catch((data) => {
        console.error(data);
        toast.error(langErrorData[lang], toastProps);
        setIsLoading(false);
      });
  }

  return { mutate, isLoading };
};

export default usePost;
