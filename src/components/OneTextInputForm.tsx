import classNames from "classnames";
import { FormEvent, useEffect, useRef } from "react";

interface OneTextInputFormProps {
  value: string;
  setValue: (value: string) => void;
  inputName: string;
  className: string;
}

const OneTextInputForm = ({
  value = "",
  setValue,
  inputName,
  className,
}: OneTextInputFormProps) => {
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.value = value;
    }
  }, [value]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputEl.current) {
      setValue(inputEl.current.value);
    }
  };

  return (
    <form
      className={classNames("input-group", className)}
      onSubmit={handleSubmit}
    >
      <input
        ref={inputEl}
        type="text"
        className="form-control"
        placeholder={inputName}
        aria-label={inputName}
        defaultValue={value}
      />
      <button className="btn btn-primary" type="submit">
        Search {inputName}
      </button>
    </form>
  );
};

export default OneTextInputForm;
