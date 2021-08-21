import PlayGround from './components/PlayGround';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import Header from './components/Header';
import GameFinished from './components/GameFinished';

function App() {
  return (
    <div className='green-table'>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <PlayGround />
        <GameFinished/>
      </DndProvider>
    </div>
  );
}

export default App;
