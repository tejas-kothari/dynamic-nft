import { ReactComponent as MarketLogo } from "../assets/market.svg";
import { ReactComponent as PencilLogo } from "../assets/pencil.svg";

export default function Sidebar() {
  return (
    <div
      className="fixed flex flex-col bg-blue-600 rounded-r-lg w-16 top-20 pt-5"
      style={{
        height: "calc(100vh - 3rem - 2 * 2rem)",
      }}
    >
      <div
        className="bg-blue-50 rounded-l-lg h-12 p-2 flex justify-center items-center"
        style={{
          marginLeft: "20%",
          paddingRight: "calc(20% + 0.5rem)",
        }}
      >
        <PencilLogo />
      </div>
      <div
        className="rounded-l-lg h-12 p-2 flex justify-center items-center"
        style={{ marginLeft: "20%", paddingRight: "calc(20% + 0.5rem)" }}
      >
        <MarketLogo />
      </div>
    </div>
  );
}
