import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [type, setType] = useState("Person");
  const [idn, setIdn] = useState("");
  const [photo, setPhoto] = useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );

  const handlePhotoChange = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const submitData = () => {
    if (!name || !lname || !type || !idn || !photo) {
      alert("Please fill all fields!");
    } else {
    }
  };

  const handleType = (e) => {
    setType(e.target.value);
    setIdn("");
  };
  return (
    <div className="App">
      <div className="justify-center">
        <h1 className="text-4xl font-bold mt-8 text-center">
          Contractor Registration
        </h1>
        <form
          method="POST"
          onSubmit={submitData}
          action="Contractor/Save"
          encType="multipart/form-data"
        >
          <div className="lg:w-1/2 md:w-2/3 mx-auto mt-16">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Last name
                  </label>
                  <input
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                    required
                    type="text"
                    id="lname"
                    name="lname"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="type"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Type of person
                  </label>
                  <select
                  required
                    onChange={handleType}
                    id="types"
                    className="bg-gray-50 border border-gray-300 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={"Person"} value="Person">
                      Person
                    </option>
                    <option value="Company">Company</option>
                  </select>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Identification number ({type === "Person" ? "PESEL 11 digits" : "NIP 10 digits"}
                    )
                  </label>
                  <input
                    onChange={(e) => setIdn(e.target.value)}
                    pattern={type === "Person" ? "[0-9]{11}" : "[0-9]{10}"}
                    required={"Please enter valid Id number"}
                    maxLength={type === "Person" ? 11 : 10}
                    type="tel"
                    inputMode="numeric"
                    id="idn"
                    name="idn"
                    value={idn}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Photo (JPG/JPEG)
                  </label>
                  <div className="row-span-full">
                    <input
                      className="col-span-1 block w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-white-700 dark:border-white-600 dark:placeholder-black-400 p-2"
                      id="file_input"
                      type="file"
                      onChange={handlePhotoChange}
                      accept='.jpg, .jpeg'
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <img
                  style={{aspectRatio:1/1}}
                    src={photo}
                    alt="profilephoto"
                    className="col-span-1 mt-4"
                  />
                </div>
              </div>
              <div className="p-2 w-full mt-8">
                <button
                  type="submit"
                  value="Submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;