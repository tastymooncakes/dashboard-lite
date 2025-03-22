import Link from "next/link";
import { Upload, LayoutDashboard, Image, CircleUserRound } from "lucide-react";

const MenuBar = () => {
  return (
    <div className="flex flex-col w-[236px] items-center pt-[50px]">
      <nav className="flex flex-col text-lg space-y-5">
        <Link
          href="/upload"
          className="w-[188px] h-[48px] flex items-center justify-center 
                     bg-blue-500 text-white rounded-md hover:bg-blue-600
                     gap-2"
        >
          <Upload size={20} />Upload
        </Link>
        <Link
          href="/main/dashboard"
          className="w-[188px] h-[48px] flex items-center justify-start
                    gap-2 pl-4"
        >
          <LayoutDashboard size={20} />Dashboard
        </Link>
        <Link
          href="/main/myassets"
          className="w-[188px] h-[48px] flex items-center justify-start
                    gap-2 pl-4"
        >
          <Image size={20} />My Assets
        </Link>
        <Link
          href="/main/userprofile"
          className="w-[188px] h-[48px] flex items-center justify-start
                    gap-2 pl-4"
          >
            <CircleUserRound size={20} />My Account
        </Link>
      </nav>
    </div>
  );
};

export default MenuBar;
