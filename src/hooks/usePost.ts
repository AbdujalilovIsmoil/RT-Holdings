import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface usePostTypes {
  lang: string;
}

interface successDataTypes {
  [key: string]: string;
}

const langSuccessData: successDataTypes = {
  ko: "귀하의 정보가 전송되었습니다.",
  uz: "Ma'lumotlaringiz yuborildi",
  ru: "Ваша информация отправлена.",
  en: "Your information has been sent.",
};

const langErrorData: successDataTypes = {
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

const usePost = ({ lang }: usePostTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function mutate<T>(data: T) {
    setIsLoading(true);
    const baseUrl: string = `https://test.repid.uz/api/v1/common/contact_us/`;

    axios
      .post(baseUrl, data)
      .then(_ => {
        toast.success(langSuccessData[lang], toastProps);
      })
      .catch(_ => {
        toast.error(langErrorData[lang], toastProps);
        setIsLoading(false);
      });
  }

  return { mutate, isLoading };
};

export default usePost;
