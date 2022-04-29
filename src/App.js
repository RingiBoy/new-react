import React from "react";
import { CatsForm } from "./components/CatsForm";
import { DogsForm } from "./components/DogsForm";

const App = () => {
  return (
    <div>
      <div className={'flex'}>
<CatsForm/>
<DogsForm/>
      </div>
      <hr />

      <div className={'flex'}>

      </div>
    </div>
  );
};

export default App;
