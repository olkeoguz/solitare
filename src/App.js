import './app.css';
import PlayGround from './components/PlayGround';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className='green-table'>
      <DndProvider backend={HTML5Backend}>
        <PlayGround />
      </DndProvider>
    </div>
  );
}

export default App;
