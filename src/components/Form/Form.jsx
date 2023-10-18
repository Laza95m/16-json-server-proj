import { UseContext } from '../../UseContext';

const Form = () => {
  const { newUser, setNewName, setNewAge, setNewurl, addNewUser } =
    UseContext();

  return (
    <form className="block1">
      <input
        onChange={(e) => setNewName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setNewAge(e.target.value)}
        type="number"
        placeholder="Age"
      />
      <input
        onChange={(e) => setNewurl(e.target.value)}
        type="url"
        placeholder="Url"
      />
      <input onClick={() => addNewUser(newUser)} type="submit" value="Add" />
    </form>
  );
};

export default Form;
