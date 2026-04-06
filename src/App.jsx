import { useFinanceStore } from './store/useFinanceStore';
import { SummaryCards } from './components/SummaryCards';
import { Charts } from './components/Charts';
import { TransactionList } from './components/TransactionList';

function App() {
  const { role, setRole, transactions } = useFinanceStore();

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">FinanceDash</h1>
          <p className="text-gray-500">Welcome back, {role}!</p>
        </div>
        
        {/* Role Toggle Switch */}
        <div className="flex items-center gap-3 bg-white p-2 rounded-lg border border-gray-200">
          <span className="text-xs font-medium text-gray-500 uppercase px-2">Role:</span>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="bg-gray-50 border-none text-sm font-semibold focus:ring-0 cursor-pointer"
          >
            <option value="Admin">Admin</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <SummaryCards transactions={transactions} />
        <Charts data={transactions} />
        
        <section className="mb-6">
          <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 items-center">
            <div className="bg-blue-500 p-2 rounded-lg text-white">💡</div>
            <p className="text-sm text-blue-800">
              <strong>Insight:</strong> Your highest spending category this month is <strong>Food</strong>. 
              You could save $150 by reducing dining out!
            </p>
          </div>
        </section>

        <TransactionList />
      </main>
    </div>
  );
}

export default App;