import { FaBowlRice } from "react-icons/fa6"; // or: import { MdSoupKitchen } from "react-icons/md";

export default function Head() {
  return (
    <header>
      {/* top banner */}
      <div className="bg-[#fdf1e9] border-y border-gray-300 py-2 flex justify-center items-center">
        <FaBowlRice className="mr-2 text-orange-500 text-2xl" />
        <span className="text-2xl font-medium">
          ChefExpress service is available only in Bangalore and Gurugram.
        </span>
      </div>

      {/* you can put your logo/nav below */}
      {/* <nav className="...">...</nav> */}
    </header>
  );
}
