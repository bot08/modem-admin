import './App.css';
import StatusBar from './components/StatusBar.js'
import FirstBlock from './components/FirstBlock.js';
import SecondBlock from './components/SecondBlock.js';
import ThirdBlock from './components/ThirdBlock.js';
import SettingsBlock from './components/SettingsBlock.js';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <StatusBar/>
      <div className="max-w-7xl mx-auto pt-12 sm:pt-14 pb-4">
        {/* page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <FirstBlock/>
          <SecondBlock/>
          <ThirdBlock/>
          <SettingsBlock/>
        </div>
      </div>
    </div>
  );
}

export default App;