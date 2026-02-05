
import React from 'react';
import { UserRole } from '../types';

export const SuperAdminDashboard: React.FC = () => {
  const users = [
    { id: '1', name: 'Budi (Admin)', role: 'Admin', email: 'budi@admin.com' },
    { id: '2', name: 'Siti (Verifikator)', role: 'Verificator', email: 'siti@verify.com' },
    { id: '3', name: 'Rahmat (Super)', role: 'SuperAdmin', email: 'rahmat@boss.com' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manajemen Pengguna</h2>
          <p className="text-slate-500 text-sm">Kelola hak akses dan peran dalam sistem.</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-100">
          + Tambah User Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                user.role === 'SuperAdmin' ? 'bg-purple-100 text-purple-600' : 
                user.role === 'Verificator' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {user.role[0]}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.role}</span>
            </div>
            <h3 className="font-bold text-slate-800">{user.name}</h3>
            <p className="text-xs text-slate-500 mb-4">{user.email}</p>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-lg hover:bg-slate-100">Ubah Peran</button>
              <button className="py-2 px-3 bg-red-50 text-red-500 text-[10px] font-bold rounded-lg hover:bg-red-100">Hapus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
