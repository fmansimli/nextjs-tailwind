import type { NextPage } from "next";
import { FormEvent } from "react";
import { MyButton, MyInput } from "../components/ui";
import { useSchema } from "../hooks/hook";
import { personSchema } from "../schemas/person.s";

const hobbies = ["sport", "sky-diving", "jumping", "tennis", "soccer"];

const test: NextPage = () => {
  const form = useSchema(personSchema);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log("ff", form.validate());
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="">
        <form onSubmit={submitHandler} onReset={form.resetForm}>
          <div className="mt-6 mb-6">
            <MyInput
              label="name"
              name="name"
              onChange={form.updateField}
              onBlur={form.blurField}
            />
            <br />
            <br />
            <MyInput
              label="surname"
              name="surname"
              onChange={form.updateField}
              onBlur={form.blurField}
            />
            <br />
            <br />
          </div>
          <div className="container flex border-2 self-center p-5 gap-6">
            {hobbies.map((hobbie, index) => (
              <div className="flex gap-5 items-center" key={index}>
                <label htmlFor={`hobbie${index}`}>{hobbie}</label>
                <input
                  id={`hobbie${index}`}
                  type="checkbox"
                  name="hobbies"
                  value={hobbie}
                  onChange={form.updateList}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-6">
            <MyButton type="submit">submit</MyButton>
            <MyButton type="reset">reset</MyButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default test;
