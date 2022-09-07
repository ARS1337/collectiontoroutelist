import { useState } from "react";
import DataTable from "react-data-table-component";
import "./App.css";
import Header from "./components/Header";
import MainInput from "./components/MainInput";
import Table from "./components/Table";

function App() {
  const [file,setFile] = useState("")
  return (
    <div className="w-full h-full bg-stone-100">
      <Header />
      <MainInput setFile={setFile}/>
      <Table file={file}/>
    </div>
  );
}

export default App;
