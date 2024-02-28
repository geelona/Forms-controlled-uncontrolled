import "./App.scss";
import UncontrolledForm from "./components/Uncontrolled/uncontrolledForm";
import ControlledForm from "./components/Controlled/controlledForm";

function App() {
  return (
    <>
      <div className="wrapper flex items-center justify-center flex-col gap-10 py-8">
        <UncontrolledForm></UncontrolledForm>
        <ControlledForm></ControlledForm>
      </div>
    </>
  );
}

export default App;
