import React from "react";
import { useStore, useActions } from "../store";

export default function Notification() {
  // Pull the msg from store
  const auth = useStore(state => state.auth);

  // Pull the set action from store
  const login = useActions(actions => actions.auth.login);

  return (
    <div>
      <button onClick={() => login({ username: "admin", password: "admin" })}>
        YEET
      </button>
      <h1>{JSON.stringify(auth)}</h1>
    </div>
  );
}
