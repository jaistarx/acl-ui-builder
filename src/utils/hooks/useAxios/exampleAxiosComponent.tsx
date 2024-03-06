import React, { useCallback, useEffect, useState } from "react";
import useAxios from "./useAxios";

export default function AxiosComponent() {
  const [id, setId] = useState(1);
  const { loading, error, response, execute } = useAxios();

  // const deleteId = () => {
  //   execute(`https://jsonplaceholder.typicode.com/todos/${id}`, {
  //     method: "delete",
  //   });
  // };

  useEffect(() => {
    execute(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }, [execute, id]);

  return (
    <div>
      <>
        <div>{id}</div>
        <button onClick={() => setId((currentId) => currentId + 1)}>
          Increment ID
        </button>
        <button
          onClick={() =>
            setId((currentId) => (currentId > 1 ? currentId - 1 : 1))
          }
        >
          decrement ID
        </button>
        {/* <br></br>
        <button onClick={reexecute}>re execute</button>
        <br></br>
        <button onClick={deleteId}>delete</button> */}
        <div>Loading: {loading.toString()}</div>
        <div>{JSON.stringify(response?.data, null, 2)}</div>
        <div>{JSON.stringify(error?.message, null, 2)}</div>
      </>
    </div>
  );
}
