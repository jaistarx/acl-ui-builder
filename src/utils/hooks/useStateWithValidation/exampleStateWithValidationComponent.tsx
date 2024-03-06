import React from "react";
import useStateWithValidation from "./useStateWithValidation";

export default function StateWithValidationComponent() {
  const [username, setUsername, isValid] = useStateWithValidation<string>(
    (name) => name.length > 5,
    ""
  );

  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );
}
