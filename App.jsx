import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { TrackerView } from './views/TrackerView'
import { DashboardView } from './views/DashboardView'
import { ManageView } from './views/ManageView'
import { generateMockData } from './utils/mockData'
import { getAllData, saveData } from './utils/storage'

function App() {
  const [currentView, setCurrentView] = useState('tracker')
  
  useEffect(() => {
    // Initialiser avec des données fictives si aucune donnée n'existe
    const existingData = getAllData()
    if (Object.keys(existingData).length === 0) {
      const mockData = generateMockData(30)
      saveData(mockData)
    }
  }, [])
  
  const renderView = () => {
    switch (currentView) {
      case 'tracker':
        return <TrackerView />
      case 'dashboard':
        return <DashboardView />
      case 'manage':
        return <ManageView />
      default:
        return <TrackerView />
    }
  }
  
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      {renderView()}
    </div>
  )
}

export default App

