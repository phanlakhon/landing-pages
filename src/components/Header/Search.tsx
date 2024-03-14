import { Icon } from "@iconify/react";

export function Search() {
  return (
    <div className="relative rounded-md shadow-sm w-[500px] h-[45px] hidden xl:block">
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full h-full rounded-md border-0 py-1.5 pl-4 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-700 sm:text-sm sm:leading-6 focus:outline-none"
        placeholder="Keywords"
      />
      <div className="absolute inset-y-1 right-0 flex items-center">
        <button className="bg-primary w-[45px] h-[45px] rounded-r-md flex justify-center items-center">
          <Icon
            icon="bitcoin-icons:search-filled"
            className="text-xl text-white"
          />
        </button>
      </div>
    </div>
  );
}
