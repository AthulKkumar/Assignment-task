import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Registration from './components/Registration';


function App() {

  const [alert, setAlert] = useState(null)

  // showAlert function to show alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <Registration showAlert={ showAlert } />

    </>
  );
}

export default App;
