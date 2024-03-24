function FormContent() {
  return (
    <div className=" container mx-auto min-h-screen place-content-center px-6 py-10 lg:px-20 overflow-hidden">
      <div className=" flex flex-col items-center">
        <p className=" max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight mb-10 mt-16">
          The URL Shortener, Made for you
        </p>
        <p className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-xl font-medium leading-tight text-transparent sm:text-2xl sm:leading-tight md:text-xl md:leading-tight mb-8">
          Transforming long, unwieldy URLs into magical, short links with a
          flick of the wrist.

        </p>
  
        <div className=" w-full relative">
          <input
            type="text"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste your link..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 mb-[-1.5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Short Url
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormContent;
