import React from "react";
import DataTable from "react-data-table-component";

function Table(props) {
  console.log(JSON.parse(props.file));
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return (
    <div className="p-4 rounded-md font-mono">
      {props.file ? (
        <DataTable columns={columns} data={data} />
      ) : (
        <p className="font-mono">{"Please select a collection"}</p>
      )}
    </div>
  );
}

export default Table;
