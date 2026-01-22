import AppNavbar from "./components/Navbar";
import NotesContainer from "./components/NotesContainer";
import AddButton from "./components/AddButton";
import FavButton from "./components/FavButton";

const App = ({notes, setNote}) => {

  return (
    <main className="w-100 min-vh-100 h-auto bg-primary position-relative">
      <div className="position-fixed z-3 px-5 w-100">
        <AppNavbar />
      </div>

      <div className="px-5 pt-5 w-100 z-1">
        <NotesContainer notes={notes} setNote={setNote} />
      </div>

      <div className="position-fixed end-0 bottom-0 d-flex flex-column m-3 gap-3">
        <FavButton />
        <AddButton setNote={setNote} notes={notes} />
      </div>
    </main>
  );
};

export default App;
