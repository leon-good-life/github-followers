import { useEffect, useRef } from "react";

const SearchUserForm = ({ setUsername, username = "" }) => {
  const usernameInputEl = useRef(null);

  useEffect(() => {
    usernameInputEl.current.value = username;
  }, [username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(usernameInputEl.current.value);
  };

  return (
    <form className="input-group mt-5" onSubmit={handleSubmit}>
      <input
        ref={usernameInputEl}
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        defaultValue={username}
      />
      <button className="btn btn-outline-secondary" type="submit">
        Search user followers
      </button>
    </form>
  );
};

export default SearchUserForm;
