import './App.css';
import Form from './components/Form/Form';
import UsersBlock from './components/UsersBlock/UsersBlock';

const App = () => {
  return (
    <>
      <div className="app">
        <Form />
        <div className="block2">
          <UsersBlock />
        </div>
      </div>
    </>
  );
};

export default App;
