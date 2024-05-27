import { Outlet } from 'react-router';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from './Components/Navbar/Navbar';
import { UserProvider } from './Context/useAuth';


function App() {
  return (
    <>
        <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  )
}

export default App;
