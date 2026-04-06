import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

export const SummaryCards = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expenses;

  const cards = [
    { title: 'Total Balance', amount: balance, icon: <Wallet className="text-blue-500" /> },
    { title: 'Total Income', amount: income, icon: <TrendingUp className="text-green-500" /> },
    { title: 'Total Expenses', amount: expenses, icon: <TrendingDown className="text-red-500" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {cards.map((card) => (
        <div key={card.title} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{card.title}</p>
            <h3 className="text-2xl font-bold">${card.amount.toLocaleString()}</h3>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">{card.icon}</div>
        </div>
      ))}
    </div>
  );
};