import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function Table(props) {
  const [file, setFile] = useState([]);
  const [allData, setAllData] = useState([]);
  const [variableData, setVariableData] = useState([]);

  useEffect(() => {
    if (props.file) {
      let newFile1 = JSON.parse(props.file);
      let newFile = JSON.parse(newFile1);
      console.log(newFile);
      let rows = newFile.item;
      setFile(rows);
      setAllData(newFile);
      setVariableData(newFile.variable);
    }
  }, [props.file]);

  const columns = [
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "method",
      selector: (row) => row.request.method,
    },
    {
      name: "path",
      selector: (row) => row.request.url.raw,
    },
    {
      name: "action",
      selector: (row) => row.name,
    },
  ];

  const variablesColumn = [
    {
      name: "name",
      selector: (row) => row.key,
    },
    {
      name: "value",
      selector: (row) => row.value,
    },
  ];

  return (
    <div className="p-4 rounded-md font-mono">
      {props.file ? (
        <div className="">
          <DataTable columns={columns} data={file ? file : {}} />
          <div className="p-1" />
          <DataTable columns={variablesColumn} data={file ? variableData : {}} />
        </div>
      ) : (
        <p className="font-mono">{"Please select a collection"}</p>
      )}
    </div>
  );
}

export default Table;
