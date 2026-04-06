import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export const Charts = ({ data }) => {
  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

  // Mocking category data for the Pie Chart
  const categoryData = [
    { name: 'Food', value: 400 },
    { name: 'Rent', value: 1200 },
    { name: 'Shopping', value: 300 },
    { name: 'Misc', value: 200 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-80">
        <h4 className="text-lg font-semibold mb-4">Balance Trend</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 h-80">
        <h4 className="text-lg font-semibold mb-4">Spending by Category</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={categoryData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};