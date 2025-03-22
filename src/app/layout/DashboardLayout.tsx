// layout/DashboardLayout.tsx
import { ReactNode } from "react";
import Header from "../main/components/Header";
import MenuBar from "../main/components/MenuBar";

interface LayoutProps {
    children: ReactNode; // Content of the specific page
}

const DashboardLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className="flex">
                <div className="w-[236px] h-screen border-r-1 border-gray-500">
                    <MenuBar />
                </div>
                <div className="flex-1">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
