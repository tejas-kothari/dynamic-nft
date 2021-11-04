import { ReactComponent as DayNight } from "../assets/daynight.svg";
import { ReactComponent as TwentyFour } from "../assets/24h.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import cat from "../assets/images/cat.jpeg";

export default function CreateDetails() {
  return (
    <div className="h-full flex flex-row ">
      <div className="bg-indigo-light w-96 rounded-r-lg p-8">
        <div className="square">
          <div className="square-content">
            <div className="p-5 content text-indigo hover:text-white text-center">
              <DayNight className=" m-auto p-1.5" />
              <p>Day / lala</p>
            </div>
          </div>
        </div>

        <div className="square">
          <div className="square-content">
            <div className="p-5 content text-indigo hover:text-white text-center">
              <TwentyFour className=" m-auto p-1.5" />
              <p>24 Hours</p>
            </div>
          </div>
        </div>

        <div className="square">
          <div className="square-content">
            <div className="p-5 content text-indigo hover:text-white text-center">
              <Plus className=" m-auto p-1.5" />
              <p>Custom</p>
            </div>
          </div>
        </div>

        <div className="square">
          <div className="square-content">
            <div className=" no-content"></div>
          </div>
        </div>

        <div className="square">
          <div className="square-content">
            <div className=" no-content"></div>
          </div>
        </div>

        <div className="square">
          <div className="square-content">
            <div className=" no-content"></div>
          </div>
        </div>
      </div>
      <div
        className="  max-w-screen-md m-auto h-full w-10/12"
        style={{ maxWidth: "566px" }}
      >
        <div className="h-full flex flex-col items-end justify-between  m-auto">
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

          <div className="m-5 ">
            <button className="self-end">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
