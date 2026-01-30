import AppNavbar from "./components/Navbar";
import NotesContainer from "./components/NotesContainer";
import AddButton from "./components/AddButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "./hooks/useAuth";

const App = () => {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <main className="w-100 min-vh-100 h-auto bg-primary position-relative">
      <div className="position-fixed z-3 px-5 w-100">
        <AppNavbar />
      </div>

      <div className="px-5 pt-5 w-100 z-1">
        <NotesContainer />
      </div>

      <div className="position-fixed end-0 bottom-0 d-flex flex-column m-3 gap-3">
        <AddButton />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        theme="light"
      />
    </main>
  );
};

export default App;
