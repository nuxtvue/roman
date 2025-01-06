import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const UsersPage = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        import.meta.env.VITE_SERVER_DOMAIN + "/api/user/getall",
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.data.success) {
        setFetchedUsers(res.data.users);
      }
    };
    fetchUsers();
  }, []);

  const makeAdminHandler = async (user) => {
    console.log(user);
    const promt = window.confirm(
      `Вы уверены, что хотите сделать ${user.email} админом?`
    );
    console.log(promt);
    const res = await axios.post(
      import.meta.env.VITE_SERVER_DOMAIN + "/api/user/makeadmin",
      { userId: user._id },
      {
        withCredentials: true,
      }
    );
    if (res.data.success) {
      const updatedUsers = fetchedUsers.map((u) => {
        if (u._id === user._id && u.role !== "admin") {
          u.role = "admin";
        } else if (u._id === user._id && u.role === "admin") {
          u.role = "user";
        }
        return u;
      });
      setFetchedUsers(updatedUsers);
    }
    console.log(res);
  };
  return (
    <div className="w-full">
      <h2 className="text-center text-xl">Список всех пользователей</h2>
      <hr className="h-px my-4 bg-gray-600 border-0  w-1/2 mx-auto text-center" />
      <table className="mx-auto w-1/2">
        <thead className="text-center">
          <tr>
            <th className="text-center border border-gray-500 p-2 w-1">
              Порядковый номер
            </th>
            <th className="text-center border border-gray-500 p-2">Почта</th>
            <th className="text-center border border-gray-500 p-2 ">Роль</th>
            <th className="text-center border border-gray-500 p-2 ">
              Сделать админом
            </th>
          </tr>
        </thead>
        <tbody>
          {fetchedUsers.map((user, index) => {
            return (
              <tr key={user._id}>
                <td className="text-center border border-gray-500 p-2 ">
                  {index + 1}
                </td>
                <td className="text-center border border-gray-500 p-2 ">
                  {user.email}
                </td>
                <td className="text-center border border-gray-500 p-2 ">
                  {user.role}
                </td>
                <td className="text-center border border-gray-500 p-2 ">
                  <input
                    checked={user.role === "admin"}
                    type="checkbox"
                    onChange={() => makeAdminHandler(user)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
