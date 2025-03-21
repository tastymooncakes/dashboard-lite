import Link from "next/link";
import { Upload, LayoutDashboard, Image } from "lucide-react";

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
          href="/dashboard"
          className="w-[188px] h-[48px] flex items-center justify-start
                    gap-2 pl-4"
        >
          <LayoutDashboard size={20} />Dashboard
        </Link>
        <Link
          href="/assets"
          className="w-[188px] h-[48px] flex items-center justify-start
                    gap-2 pl-4"
        >
          <Image size={20} />My Assets
        </Link>
      </nav>
    </div>
  );
};

export default MenuBar;
