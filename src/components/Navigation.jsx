import { LayoutDashboard, CheckSquare, Settings } from 'lucide-react'
import { cn } from '../utils/cn'

export function Navigation({ currentView, onViewChange }) {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-slate-100">dope-a-bit</span>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => onViewChange('tracker')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                currentView === 'tracker'
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              )}
            >
              <CheckSquare size={18} />
              <span className="hidden sm:inline">Tracker</span>
            </button>
            <button
              onClick={() => onViewChange('dashboard')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                currentView === 'dashboard'
                  ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              )}
            >
              <LayoutDashboard size={18} />
              <span className="hidden sm:inline">Dashboard</span>
            </button>
            <button
              onClick={() => onViewChange('manage')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg transition-all",
                currentView === 'manage'
                  ? "bg-slate-700 text-slate-200 border border-slate-600"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              )}
            >
              <Settings size={18} />
              <span className="hidden sm:inline">Gérer</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

