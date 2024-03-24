import { ImArrowUpRight2 } from "react-icons/im";

function Header() {
  return (
    <div className=" container mx-auto py-4 px-6 lg:px-20 border-b-2 border-zinc-700">
      <div className=" flex items-center gap-1 ">
        <h1 className="  font-bold select-none text-md">Mini</h1>
        <span className=" mb-2">
          <ImArrowUpRight2 style={{ width: "10px" }} />
        </span>
      </div>
    </div>
  );
}

export default Header;
