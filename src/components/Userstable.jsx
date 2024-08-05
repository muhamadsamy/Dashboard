
import { useEffect, useState } from "react";
import Cards from "./Cards";
import { PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom";
import { useGetUsers } from "../hooks/useGetUsers";

function Userstable() {
   // const [users,setUsers]=useState([]);
      const users= useGetUsers();
      console.log(users);
    
    return ( 
        <div className="mx-8 flex flex-col">
            <Cards />
            <div className="flex min-w-full mt-8 border-b border-gray-200 shado rounded-lg overflow-hidden">
            <table className="min-w-full">
                <thead>
                    <tr className="text-left">
                        <th className="table-heads">Name</th>
                        <th className="table-heads">Status</th>
                        <th className="table-heads">Email</th>
                        <th className="table-heads">Edit</th>
                        <th className="table-heads">Delete</th>
                    </tr>

                </thead>
                <tbody className="bg-white">
                    {users.length>0 && users.map(user =>(
                        <tr>
                        <td className="px-6 py-6 ">
                            <Link to={`/profile/${user.id}`} className="flex items-center" >
                            <img className="w-10 h-10 rounded-full"
                                 src={user.image}
                                 alt="admin dashboard ui"
                                 />
                                 <p className="tex-sm text-gray-900 font-medium ml-4">{user.firstName} {user.lastName}</p>
                                 </Link>

                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{user.email}</td>
                        <td className="px-6 py-4">
                            <span className={` py-1 px-2 text-xs font-semibold rounded-fill ${user.age>40 ? "text-red-800 bg-red-100 ":" bg-green-100 text-green-800"}`}>
                                {user.age >40 ?"Inactive" :"Active"} </span></td>
                            <td className="px-6 py-4">
                                <PencilSquareIcon className="w-6 h-6 text-blue-400"/>

                            </td>
                            <td className="px-6 py-4">
                                <TrashIcon className="w-6 h-6 text-red-400" />
                            </td>
                    </tr>

                    ))}
                    
                </tbody>
            </table>
            </div>
       
    </div>);
}

export default Userstable;