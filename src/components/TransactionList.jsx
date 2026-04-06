import { useFinanceStore } from '../store/useFinanceStore';
import { Trash2, Plus } from 'lucide-react';

export const TransactionList = () => {
  const { transactions, role, deleteTransaction } = useFinanceStore();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h4 className="text-lg font-semibold">Recent Transactions</h4>
        {role === 'Admin' && (
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Plus size={18} /> Add Transaction
          </button>
        )}
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-gray-500 text-sm">
          <tr>
            <th className="p-4 font-medium">Date</th>
            <th className="p-4 font-medium">Category</th>
            <th className="p-4 font-medium">Type</th>
            <th className="p-4 font-medium text-right">Amount</th>
            {role === 'Admin' && <th className="p-4 font-medium text-center">Action</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {transactions.map((t) => (
            <tr key={t.id} className="hover:bg-gray-50 transition">
              <td className="p-4 text-sm">{t.date}</td>
              <td className="p-4 text-sm font-medium">{t.category}</td>
              <td className="p-4 text-sm capitalize">
                <span className={`px-2 py-1 rounded-full text-xs ${t.type === 'income' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {t.type}
                </span>
              </td>
              <td className={`p-4 text-sm text-right font-bold ${t.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                {t.type === 'income' ? '+' : '-'}${t.amount}
              </td>
              {role === 'Admin' && (
                <td className="p-4 text-center">
                  <button onClick={() => deleteTransaction(t.id)} className="text-red-400 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};