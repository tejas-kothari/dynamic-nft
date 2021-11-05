import { ReactComponent as DayNight } from "../assets/daynight.svg";
import { ReactComponent as TwentyFour } from "../assets/24h.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import cat from "../assets/images/cat.jpeg";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreateDetails() {
  let history = useHistory();
  return (
    <div className="h-full flex flex-row ">
      <div className="bg-indigo-light w-96 rounded-r-lg p-8">
        <div>
          <p className="font-medium">Project Details</p>
          <div className="flex items-center justify-between my-5 border border-black rounded-2xl p-2 bg-white">
            <DayNight className="w-10 h-10 " />
            <p className="text-indigo">Day / Night</p>
          </div>
          <div className="flex items-center justify-between my-5 border border-black rounded-2xl p-2 bg-white">
            <img src={cat} className="border border-black w-20 " />
            <div className="text-indigo">
              <p>2K Widescreen</p>
              <p className="font-light">1920 x 1080 px</p>
            </div>
          </div>

          <div className="rounded-2xl p-2 bg-white text-indigo my-5 border border-black">
            <div className="flex items-center justify-between my-1 ">
              <p className="font-light">Cat.jpeg</p>
              <p>Day</p>
            </div>
            <hr className="my-2 border-indigo" />
            <div className="flex items-center justify-between my-1 ">
              <p className="font-light">Cat-night.jpeg</p>
              <p>Night</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-full  max-w-screen-md m-auto  w-10/12 flex flex-col justify-between"
        style={{ maxWidth: "566px" }}
      >
        <div className=" flex flex-col  items-end justify-between  m-5">
          <form className="self-start w-full">
            <p className="w-full">
              <label for="title">Title</label>
              <br />
              <input type="text" id="title" className="w-1/2" />
            </p>
            <p className="mt-4 w-full">
              <label for="description">Description</label>
              <br />
              <textarea type="text" id="description" className="w-full" />
            </p>
            <fieldset className="mt-4">
              <legend>Categories</legend>
              <p className="font-light text-indigo text-sm">
                Please select any 2
              </p>
              <div className="grid grid-cols-3">
                <p className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="category1"
                    value="photography"
                    className="my-0"
                  />
                  <label for="category1" className="font-light px-1">
                    Photography
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category1"
                    value="3d"
                    className="my-0"
                  />
                  <label for="category2" className="font-light px-1">
                    3D
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category3"
                    value="collage"
                    className="my-0"
                  />
                  <label for="category3" className="font-light px-1">
                    Collage
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category4"
                    value="painting"
                    className="my-0"
                  />
                  <label for="category4" className="font-light px-1">
                    Painting
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category5"
                    value="generative"
                    className="my-0"
                  />
                  <label for="category5" className="font-light px-1">
                    Generative
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category6"
                    value="minimalism"
                    className="my-0"
                  />
                  <label for="category6" className="font-light px-1">
                    Minimalism
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category7"
                    value="glitch"
                    className="my-0"
                  />
                  <label for="category7" className="font-light px-1">
                    Glitch
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category8"
                    value="text"
                    className="my-0"
                  />
                  <label for="category8" className="font-light px-1">
                    Text
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category9"
                    value="illustration"
                    className="my-0"
                  />
                  <label for="category9" className="font-light px-1">
                    Illustration
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category10"
                    value="mixedMedia"
                    className="my-0"
                  />
                  <label for="category10" className="font-light px-1">
                    Mixed-media
                  </label>
                </p>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    id="category11"
                    value="vector"
                    className="my-0"
                  />
                  <label for="category11" className="font-light px-1">
                    Vector
                  </label>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="flex  flex-row justify-between w-full m-5 mb-0">
          <div className="m-5 ml-0 ">
            <button className="self-start" onClick={() => history.push("/")}>
              Back
            </button>
          </div>
          <div className="m-5 mr-0 ">
            <button className="self-end ">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
