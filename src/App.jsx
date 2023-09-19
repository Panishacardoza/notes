import NotesList from "./components/NotesList";
import { NoteProvider } from "./hooks/NoteContext";
import CreateNote from "./components/CreateNote";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <NoteProvider>
      <div>
        <Sidebar />
        <CreateNote />
        <NotesList />
      </div>
    </NoteProvider>
  );
};

export default App;
