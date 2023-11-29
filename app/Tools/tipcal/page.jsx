import React from "react";

const page = () => {
  return (
    <div className="bg-white text-gray-800 h-80 flex justify-center gap-3 mt-10 w-screen sm:flex flex-wrap">
<div class="p-4 w-96 h-[375px] bg-gray-100 rounded-lg shadow-md">
  <label class="block text-gray-700 text-sm font-bold mb-2" for="price">Price:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="price" />
  
  <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="tip">Tip %:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="tip" />
  
  <label class="block text-gray-700 text-sm font-bold mb-2 mt-4" for="people">Number of people:</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="people" />
  
  <button class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Calculate
  </button>
</div>

      <div className="p-4 w-96 h-[375px] bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Qr Code of Password</h1>
        <div className="border p-2 rounded bg-white">qr code</div>
      </div>
    </div>
  );
};

export default page;
