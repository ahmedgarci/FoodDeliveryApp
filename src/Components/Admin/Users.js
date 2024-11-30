import { useEffect, useState } from "react";
import FetchDataComponent from "../../Functions/Hooks/useEffect/GetDataFromBackend";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";
import { DeleteComponent } from "./Delete";

function Users(){
  const { data, loading, error } = FetchDataComponent({
    url: "http://localhost:3500/users",
    method: "GET"
  });
  const [users,setUsers] = useState([data])

  useEffect(() => {
    setUsers(data);
  }, [data]);

  if (error) return <ErrorComponent  error={error}/>;
  if (loading) return <LoadingComponent />;
    return(
        <section id="users" class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Users</h2>
        <div class="bg-white p-6 rounded shadow">
          <table class="w-full text-left">
            <thead>
              <tr>
                <th class="border-b p-4">Username</th>
                <th class="border-b p-4">Email</th>
                <th class="border-b p-4">Status</th>
                <th class="border-b p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
            {users && users.length > 0 && users.map((user) => (
              <tr>
               <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td><DeleteComponent/></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </section>
    )
}
export {Users}