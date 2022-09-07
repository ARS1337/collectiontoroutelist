import React, { useState } from "react";

const MainInput = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = React.createRef();

  const onFileChange = (e) => {
    let fileContents = new FileReader(e.target.files[0]);
    fileContents.addEventListener("load", () => {
        let res = JSON.stringify(fileContents.result)
      setSelectedFile(res);
      props.setFile(res)
    });
    fileContents.readAsText(e.target.files[0]);
  };

  return (
    <div className="flex items-center justify-center flex-col py-12">
      <div>
        <input type="file" onChange={onFileChange} ref={fileInput} />
      </div>
    </div>
  );
};
export default MainInput;
