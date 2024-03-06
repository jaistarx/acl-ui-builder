import React from "react";
import useAsync from "./useAsync";

export default function AsyncComponent() {
  const { loading, error, value } = useAsync<any>(() => {
    return new Promise((resolve, reject) => {
      const success = false;
      setTimeout(() => {
        success ? resolve("Hi") : reject("Error");
      }, 1000);
    });
  });

  return (
    <div>
      <div>Loading: {loading.toString()}</div>
      <div>{error ? JSON.stringify(error) : ""}</div>
      <div>{value ? JSON.stringify(value) : ""}</div>
    </div>
  );
}
