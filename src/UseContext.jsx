import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Context = createContext();

export const UseContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const [newUrl, setNewurl] = useState('');
  const newUser = {
    name: newName,
    age: newAge,
    url: newUrl,
    id: data.length + 1,
  };

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addNewUser = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:3000/users', newUser);

      setData(response.data);
      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        newUser,
        setNewName,
        setNewAge,
        setNewurl,
        addNewUser,
        deleteUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
