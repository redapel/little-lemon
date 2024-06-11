import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      const success = submitAPI();
      await wait(1000);
      if (!success) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, response, submit };
}

export default useSubmit;
