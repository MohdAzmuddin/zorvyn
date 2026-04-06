import { create } from 'zustand';

export const useFinanceStore = create((set) => ({
  role: 'Admin', // Default role: 'Admin' or 'Viewer'
  transactions: [
    { id: 1, date: '2024-03-01', amount: 2500, category: 'Salary', type: 'income' },
    { id: 2, date: '2024-03-05', amount: 150, category: 'Food', type: 'expense' },
    { id: 3, date: '2024-03-07', amount: 50, category: 'Transport', type: 'expense' },
    { id: 4, date: '2024-03-10', amount: 200, category: 'Shopping', type: 'expense' },
  ],
  setRole: (role) => set({ role }),
  addTransaction: (tx) => set((state) => ({ 
    transactions: [tx, ...state.transactions] 
  })),
  deleteTransaction: (id) => set((state) => ({
    transactions: state.transactions.filter(t => t.id !== id)
  })),
}));