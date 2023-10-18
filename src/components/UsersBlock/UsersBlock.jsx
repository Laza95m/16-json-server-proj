import { UseContext } from '../../UseContext';

const UsersBlock = () => {
  const { data, deleteUser } = UseContext();

  return (
    <>
      {data?.length &&
        data.map((el, i) => (
          <div key={i} className="content">
            <img src={el.url} alt="image" />
            <h2>{el.name}</h2>
            <p>Age: {el.age}</p>
            <button onClick={() => deleteUser(el.id)}>Delete</button>
          </div>
        ))}
    </>
  );
};

export default UsersBlock;
