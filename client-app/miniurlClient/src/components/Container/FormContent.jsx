import { useState } from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

function FormContent() {
  const [fullUrl, setFullUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${serverUrl}/shorturl`, {
        fullUrl: fullUrl,
      });
      setFullUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" container mx-auto min-h-screen place-content-center px-6 py-10 lg:px-20 overflow-hidden">
      <div className=" flex flex-col items-center">
        <p className=" max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight mb-10 mt-16">
          The URL Shortener, Expand Your Reach.
        </p>
        <p className="max-w-3xl bg-gradient-to-br from-gray-300 to-gray-600 bg-clip-text text-center text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-xl md:leading-tight mb-8">
          Transforming long, unwieldy URLs into magical, short links with a
          flick of the wrist.
        </p>
        <form onSubmit={handleSubmit} className="w-full lg:w-3/4 ">
          <div className="relative">
            <input
              type="text"
              required
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
              style={{ boxShadow: "0px 4px 24px rgba(239,239,241, 0.3)" }}
              className=" block w-full p-4 ps-10 text-sm inset-4 border border-zinc-600  rounded-lg  focus:ring-violet-500 focus:ring-4 focus:border-violet-500 focus:outline-none bg-zinc-700  placeholder-zinc-400 "
              placeholder="Paste your link..."
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 mb-[-1px] bg-violet-700 hover:bg-violet-800 focus:ring-2 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Short Url
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContent;
