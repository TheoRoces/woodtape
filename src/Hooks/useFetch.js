import { useCallback } from "react";

export const useFetch = () => {
  // const user = JSON.parse(localStorage.getItem("AUTH-DATA"));
  // const { errors, success } = useError();
  const request = useCallback(
    /**
     *
     * @param {string} url
     * @param { method?: string, data?: any } options
     * @returns
     */
    (url, options) => {

      return fetch(url, {
        method: options?.method ?? "GET",
        body: JSON.stringify(options?.data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": options?.Authorization ?? ""
        },
      }).then(async (result) => {
        return result;
      }).catch((error) => {
      });
    },
    []
  );

  return { request };
};
