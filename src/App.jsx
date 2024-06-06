
import React from 'react';
import PortfolioEmbed from './Pages/Portfolio';




function App() {
  return (
    <div className="App">
      <header className="App-header bg-gradient-to-r from-[#765B4D] to-[#7E675A] py-6 text-white">
        <h1 className="text-3xl font-bold text-center">
          Sharon Mwende's Portfolio
        </h1>
      </header>
      <main className="mt-0 p-0">
        <PortfolioEmbed />
      </main>
    </div>
  );
}

export default App;