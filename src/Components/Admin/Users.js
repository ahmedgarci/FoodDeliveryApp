import { useEffect, useState } from "react";
import ErrorComponent from "../Common/ErrorComponent";
import LoadingComponent from "../Common/LoadingComponent";
import { Fetch } from "../../Hooks/Fetch";
import { DeleteComponent } from "../../Features/Delete";

function Users(){
  const { data, loading, error } = Fetch({
    url: "http://localhost:3500/users",
    method: "GET"
  });
  const [FetchedUsers,setFecthedUsers] = useState([])
  console.log(data);
  useEffect(() => {
    if (data) {
      setFecthedUsers(data);
    }
  }, [data]);
  


  const handleDelete = (id) => {
    setFecthedUsers((prevData) => prevData.filter((item) => item._id !== id));
  };


  if (error) return <ErrorComponent  error={error}/>;
  if (loading) return <LoadingComponent />;
    return(
        <section id="users" class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">Users</h2>
        <div class="bg-white p-6 rounded shadow">
          <table class="w-full text-left">
            <thead>
              <tr className="border-b p-4 text-center">
                <th >Username</th>
                <th >Email</th>
                <th >Status</th>
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
            {FetchedUsers && FetchedUsers.length > 0 && FetchedUsers.map((user) => (
              <tr className="text-center">
               <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.isActive? "Active": "Not Yet"}</td>
                <td>
                  <DeleteComponent
                  Id={user._id}
                  Url={"http://localhost:3500/users/"}
                  DeleteFunction={()=>handleDelete(user._id)
                  }
                  />
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </section>
    )
}
export {Users}