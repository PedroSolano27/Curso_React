import './App.css';
import DynamicStyle from './components/DynamicStyle';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  return (
    <>
      <Title/>
      <DynamicStyle/>
      <Form userName="Pedro Solano" userEmail="pedro@123"/>
    </>
  );
}

export default App;