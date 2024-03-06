import React, { useState } from "react";
import useEventListener from "./useEventListener";

export default function EventListenerComponent() {
  const [key, setKey] = useState("");
  useEventListener<KeyboardEvent>("keydown", (e) => {
    setKey(e.key);
  });

  return <div>Last Key: {key}</div>;
}
