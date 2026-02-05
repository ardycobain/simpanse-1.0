import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginGateProps {
  onLogin: (role: UserRole) => void;
  onCancel: () => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ onLogin, onCancel }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified Role Mapping for Demo
    if (password === 'admin123') onLogin('Admin');
    else if (password === 'verify123') onLogin('Verificator');
    else if (password === 'super123') onLogin('SuperAdmin');
    else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Akses Sistem</h2>
          <p className="text-slate-500 text-sm mb-8">Masukkan password sesuai peran Anda.</p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`w-full px-5 py-3 pr-12 border ${error ? 'border-red-500' : 'border-slate-200'} rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                placeholder="Password Role"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {error && <p className="text-red-500 text-[10px] ml-1">Kredensial tidak ditemukan.</p>}
            
            <button type="submit" className="w-full py-3.5 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
              Login Masuk
            </button>
            <button type="button" onClick={onCancel} className="w-full py-3 text-slate-400 font-medium text-sm hover:text-slate-600 transition-colors text-center">Kembali</button>
          </form>
        </div>
        <div className="bg-slate-50 p-4 text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest border-t border-slate-100">
          Hints: admin123, verify123, super123
        </div>
      </div>
    </div>
  );
};