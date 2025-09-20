import { DndContext } from "@dnd-kit/core";
import "./App.css";
import { Panel } from "./components";
import { DateRecordsProvider } from "./context";
import { useHandleDnd } from "./hooks";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";

function AppContent() {
  const { handleDragEnd } = useHandleDnd();

  return (
    <DndContext modifiers={[restrictToWindowEdges]} onDragEnd={handleDragEnd}>
      <div className="App">
        <Panel />
      </div>
    </DndContext>
  );
}

function App() {
  return (
    <DateRecordsProvider>
      <AppContent />
    </DateRecordsProvider>
  );
}

export default App;
