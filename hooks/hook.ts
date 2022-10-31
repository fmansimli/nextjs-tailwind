import { useReducer } from "react";
import { Schema } from "./schema";
import { Util } from "./util";

interface IState {
  ok: boolean;
  data: {
    [key: string]: {
      value: string | number | boolean | [];
      error: string;
      touched: boolean;
      ok: boolean;
    };
  };
}

interface IEvent {
  target: {
    name: string;
    value: string | number | boolean;
    type: string;
  };
}

enum Actions {
  BLUR = "TO",
  CHANGE = "CH",
  VALIDATE = "VA",
}

const reducer = (state: IState, action: any) => {
  switch (action.type) {
    case Actions.CHANGE:
      return { ...state, data: { ...state.data, ...action.payload } };

    case Actions.VALIDATE:
      return action.payload;

    default:
      return action.payload;
  }
};

export const useSchema = (schema: Schema, initial = {}) => {
  const [state, dispatch] = useReducer(reducer, Util.init(schema, initial));

  const validate = () => {
    const plain = Util.plain(state.data);
    const vdata = schema.validate(plain);
    const payload = Util.shape(vdata);
    dispatch({ type: Actions.VALIDATE, payload });

    return vdata;
  };

  const updateNative = (name: string) => {
    return (value: any) => {
      updateField({ target: { name, value, type: "str" } });
    };
  };

  const blurNative = (name: string) => {
    return (value: any) => {
      updateField({ target: { name, value, type: "str" } });
    };
  };

  const updateList = (e: IEvent) => {
    let { name, value } = e.target;

    const val = [...state.data[name].value, value];
    console.log(state.data[name]);
    return;
    dispatch({
      type: Actions.CHANGE,
      payload: { [name]: { ok: true, value, error: "", touched: false } },
    });
  };

  const updateField = (e: IEvent) => {
    let { name, type, value } = e.target;
    const val = type === "number" ? Number(value) : value;

    if (state.data[name].touched) {
      const { message, ok } = schema.validateField(name, { [name]: val });
      dispatch({
        type: Actions.CHANGE,
        payload: {
          [name]: { ok, value: val, error: message, touched: true },
        },
      });
    } else {
      dispatch({
        type: Actions.CHANGE,
        payload: {
          [name]: { ok: true, value: val, error: "", touched: false },
        },
      });
    }
  };

  const blurField = (e: IEvent) => {
    let { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    if (!value) return;
    const { message, ok } = schema.validateField(name, { [name]: val });
    dispatch({
      type: Actions.CHANGE,
      payload: { [name]: { ok, value: val, error: message, touched: true } },
    });
  };

  const resetForm = () => {
    const payload = Util.init(schema, initial);
    dispatch({ type: "", payload });
  };

  return {
    ok: state.ok,
    data: state.data,
    updateField,
    updateNative,
    updateList,
    blurField,
    blurNative,
    validate,
    resetForm,
  };
};
