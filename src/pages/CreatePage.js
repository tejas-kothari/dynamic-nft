import { ReactComponent as DayNight } from "../assets/daynight.svg";
import { ReactComponent as TwentyFour } from "../assets/24h.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import cat from "../assets/images/cat.jpeg";

export default function CreatePage() {
  return (
    <div className="h-full flex flex-row">
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
      <div className=" h-full flex-1 items-start">
        <div className="h-full flex flex-col content-between w-10/12 m-auto">
          <div className="m-5 text-center font-light">
            <img src={cat} className="w-3/5 m-auto border-2 border-black" />
            <p className="mt-10">2K Widescreen</p>
            <p>1920 x 1080 px</p>
          </div>
          <div>
            <div className="table w-full text-indigo bg-indigo-light p-2 rounded-xl shadow-indigo_sm mt-5">
              <div className="table-row-group">
                <div className="table-row font-medium">
                  <div className="table-cell"></div>
                  <div className="table-cell">File Name</div>
                  <div className="table-cell">Time of Day</div>
                </div>
              </div>

              <div className="table-row text-sm ">
                <button className="table-cell bg-white text-indigo w-7/12">
                  Change File
                </button>
                <div className="table-cell">Cat.jpeg</div>
                <div className="table-cell">Day</div>
              </div>

              <div className="table-row text-sm ">
                <button className="table-cell w-7/12">Choose File...</button>
                <div className="table-cell"></div>
                <div className="table-cell">Night</div>
              </div>
            </div>
            <div className="mt-5  w-36">
              <div className="square ">
                <div className="square-content">
                  <div
                    className="content text-center flex "
                    style={{
                      borderRadius: " 0.5rem",
                    }}
                  >
                    <Plus className="h-1/2 w-1/2 m-auto items-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
