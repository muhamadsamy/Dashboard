import { useEffect,useState } from "react";

export const useGetUsers=()=>{

const [users, setUsers] = useState([]); 

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const jsonData = await response.json();
                setUsers(jsonData.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUsers();
    }, []); 

    return users;
};
   