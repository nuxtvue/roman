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
  });
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
