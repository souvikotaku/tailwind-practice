import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-900 grid h-screen place-content-center">
      <div className="bg-white p-10 rounded-lg group hover:cursor-pointer hover:bg-red-500">
        <h1 className="text-7xl text-center text-blue-400 group-hover:text-white">
          Hello World
        </h1>
      </div>
    </div>
  );
}

export default App;
