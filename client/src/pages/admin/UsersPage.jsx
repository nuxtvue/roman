import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { motion } from "motion/react";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
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
                    className="rounded-md w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => makeAdminHandler(user)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
};

export default UsersPage;
