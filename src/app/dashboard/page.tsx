import Header from "./components/Header";
import MenuBar from "./components/MenuBar";

const Dashboard = () => {
    return <div>
        <Header />
        <div className="w-[236px] h-screen border-r-1 border-gray-500">
            <MenuBar />
        </div>
    </div>
}

export default Dashboard;