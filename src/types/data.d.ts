export type Inputs={
    exampleRequired: string;
};

interface Todo{
    id:string;
    text:string;
}

export interface TodoState{
    todos:Todo[];
}
export interface RootState{
    todos:TodoState;
}

type EditedInput = {
    neweditedtext: string;
  };