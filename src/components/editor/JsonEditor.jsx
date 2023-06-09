import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function JsonEditor(props) {
  const [jsonValue, setJsonValue] = useState([]);

  const handlePaste = (event) => {
    event.preventDefault();
    setJsonValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.getData(jsonValue);
  };

  return (
    <>
      <div className="w-full md:w-[45vw] my-2 p-2">
        <div className="text-left text-[1.5rem]">Paste your JSON here</div>
        <form className="">
          <textarea
            className="w-[100%] bg-gray-900 text-white p-2 rounded h-[80vh]"
            type="text"
            onChange={handlePaste}
            value={jsonValue}
          />
        </form>

        <div className="flex flex-wrap justify-between my-2">
          <div className="flex flex-wrap">
            <a
              className=" m-1 text-white bg-gray-600 flex flex-row items-center px-2 py-1 rounded"
              href="https://github.com/Vivek3072"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
              Vivek3072
            </a>
            <a
              className=" m-1 text-white bg-sky-600 flex flex-row items-center px-2 py-1 rounded"
              href="https://www.linkedin.com/in/vivek-srivastava-2b3642202"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
              Linkedin
            </a>
          </div>

          <button
            className="bg-primary px-3 py-2 rounded text-white"
            onClick={handleSubmit}
          >
            View Balance Sheet
          </button>
        </div>
      </div>
    </>
  );
}
