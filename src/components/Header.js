import algo from "../assets/images/algoIcon.png";

export default function Header() {
  return (
    <div className="h-12 bg-indigo-light flex justify-between items-center px-5">
      <div>Logo</div>
      <div className=" h-full flex w-full justify-end items-center">
        <div className="mx-2">Connect wallet</div>
        <div className="h-full w-auto p-2">
          <img src={algo} className="h-full" />
        </div>
      </div>
    </div>
  );
}
