import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Wrapper from "@/app/components/Wrapper";

const AddPage = () => {
  return (
    <div>
      <Breadcrumb name="Add Page" subtitle="add-page" />
      <Wrapper>
        <div className="flex-col flex md:flex-row flex-wrap gap-4">
          <div className="w-full md:w-[49%]">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Page Name
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Add Page Name"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Slug
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter Slug"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Category
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter Category"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Sub Category
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter Sub Category"
            />
          </div>
          <div className="w-full md:w-[49%]">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Thumbnails
            </label>
            <label
              for="uploadFile1"
              class="bg-white text-gray-500 font-semibold text-base rounded max-w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-purple-300 border-dashed  font-[sans-serif]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-11 mb-2 fill-gray-500"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                  data-original="#000000"
                />
                <path
                  d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                  data-original="#000000"
                />
              </svg>
              Upload file
              <input type="file" id="uploadFile1" class="hidden" />
              <p class="text-xs font-medium text-gray-400 mt-2">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
            </label>
          </div>
          <div className="w-full md:w-[49%]">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Profile View
            </label>
            <label
              for="uploadFile1"
              class="bg-white text-gray-500 font-semibold text-base rounded max-w-full h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-purple-300 border-dashed  font-[sans-serif]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-11 mb-2 fill-gray-500"
                viewBox="0 0 32 32"
              >
                <path
                  d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                  data-original="#000000"
                />
                <path
                  d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                  data-original="#000000"
                />
              </svg>
              Upload file
              <input type="file" id="uploadFile1" class="hidden" />
              <p class="text-xs font-medium text-gray-400 mt-2">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>
            </label>
          </div>
          <div className="w-full md:w-full">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Discription
            </label>

            <textarea
              name=""
              className="block h-[250px] w-full rounded-md border-0 py-2 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id=""
            ></textarea>
          </div>
          <div className="w-full md:w-full bg-purple-50 py-2 px-4">
            <label
              HTMLfor="Post URL"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
             Page Url
            </label>
            <a href="http://localhost:3000/all-pages" className="text-blue-500">http://localhost:3000/all-pages</a>
          </div>
          <div className="w-full md:w-full mt-3">
            <button className="flex mx-auto justify-center rounded-lg text-md items-center font-semibold py-2.5 px-6 bg-slate-900 text-white hover:bg-slate-700">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AddPage;
