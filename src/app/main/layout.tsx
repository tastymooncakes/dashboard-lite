import { ReactNode } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="w-[236px] h-screen border-r-1 border-gray-500">
                    <MenuBar />
                </div>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
