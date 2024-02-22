import { useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    try {
      doRequest();
    } catch (error) {
      console.log({ error });
    }
  }, []);

  return <div>Signing you out...</div>;
};
