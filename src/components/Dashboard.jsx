import Sidebar from "./Sidebar";
import Userstable from "./Userstable";

function Dashboard() {
    const username=localStorage.getItem("username");
    return ( 
        <div className="flex flex-row w-full">
        <Sidebar/>
        <div className="w-full md:w-3/4 min-h-screen">
        <h1 className="text-4xl text-left font-semibold mb-12 ml-8 pt-12">Welcome {username} to Dashboard</h1>
        <Userstable />
        </div>
        
        </div>
     );
}

export default Dashboard;