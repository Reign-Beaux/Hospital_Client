import { ReponseModel } from "@/Domain/Models";
import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";

export const useAxios = () => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const get = async <T>(url: string) => {
    const response: AxiosResponse<ReponseModel<T>> = await axios.get(url, { signal });
    return response.data;
  };

  const post = async <T, R>(url: string, payload: R) => {
    const response: AxiosResponse<ReponseModel<T>> = await axios.post(url, payload, { signal });
    return response.data;
  };

  useEffect(() => {
    return () => {
      abortController.abort();
    };
  }, []);

  return { get, post };
};
