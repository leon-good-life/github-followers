import { useState } from "react";
import FollowersList from "./features/followers/Followers";
import OneTextInputForm from "./components/OneTextInputForm";

function App() {
  const [username, setUsername] = useState("leon-good-life");
  return (
    <div className="container mt-5 mb-5">
      <OneTextInputForm
        value={username}
        setValue={setUsername}
        inputName="user"
        className="mb-2"
      />
      <FollowersList {...{ username, setUsername }} />
    </div>
  );
}

export default App;
