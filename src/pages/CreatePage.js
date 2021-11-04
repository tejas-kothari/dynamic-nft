import { ReactComponent as DayNight } from "../assets/daynight.svg";
import { ReactComponent as TwentyFour } from "../assets/24h.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import cat from "../assets/images/cat.jpeg";

export default function CreatePage() {
  let history = useHistory();

  return (
    <div className="h-full flex flex-row ">
      <div className="bg-indigo-light w-96 rounded-r-lg p-8">
        <div className="square">
          <div className="square-content">
            <div className="p-5 content text-indigo hover:text-white text-center">
              <DayNight className=" m-auto p-1.5" />
              <p>Day / Night</p>
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
      <div className="  max-w-screen-md m-auto h-full">
        <div className="h-full flex flex-col items-end justify-between w-10/12 m-auto">
          <div className="m-5 text-center font-light">
            <img src={cat} className="w-3/5 m-auto border-2 border-black" />
            <p className="mt-10">2K Widescreen</p>
            <p>1920 x 1080 px</p>
            <div className="mt-16">
              <div className=" text-left table w-full text-indigo bg-indigo-light rounded-xl shadow-indigo_sm mt-5">
                <div className="table-row-group">
                  <div className="table-row font-medium ">
                    <div className="table-cell"></div>
                    <div className="table-cell py-2">File Name</div>
                    <div className="table-cell">Time of Day</div>
                  </div>
                </div>

                <div className="table-row bg-white text-sm ">
                  <button className="table-cell bg-indigo text-white w-7/12 ml-2">
                    Change File
                  </button>
                  <div className="table-cell">Cat.jpeg</div>
                  <div className="table-cell">Day</div>
                </div>

                <div className="table-row text-sm ">
                  <button className="table-cell w-7/12 ml-2">
                    Choose File...
                  </button>
                  <div className="table-cell"></div>
                  <div className="table-cell">Night</div>
                </div>
              </div>
              <div className="flex flex-row content-center mt-5">
                <button className=" p-0 w-10 h-10">
                  <div
                    className="content text-center flex border-none"
                    style={{
                      borderRadius: " 0.5rem",
                    }}
                  >
                    <Plus className="h-1/2 w-1/2 m-auto items-center " />
                  </div>
                </button>
                <p className="self-center ml-5 text-indigo">
                  Add Sunrise / Sunset
                </p>
              </div>
            </div>
          </div>

          <div className="m-5 ">
            <button
              className="self-end"
              onClick={() => history.push("/createdetails")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
