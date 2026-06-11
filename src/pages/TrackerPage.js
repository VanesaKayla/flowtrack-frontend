import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'https://flowtrack-backend-production-6bba.up.railway.app';

function TrackerPage() {
  const navigate = useNavigate();
  const [cycles, setCycles] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [form, setForm] = useState({ start_date: '', duration: '', cycle_length: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [deleteModal, setDeleteModal] = useState({ open: false, id: null });

  const fetchCycles = async () => {
    const res = await axios.get(`${API}/cycles`);
    setCycles(res.data.payload);
  };

  const fetchPrediction = async () => {
    try {
      const res = await axios.get(`${API}/cycles/prediction`);
      setPrediction(res.data.payload);
    } catch {
      setPrediction(null);
    }
  };

  useEffect(() => {
    fetchCycles();
    fetchPrediction();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/cycles`, {
        start_date: form.start_date,
        duration: parseInt(form.duration),
        cycle_length: form.cycle_length ? parseInt(form.cycle_length) : null,
        notes: form.notes || null,
      });
      setForm({ start_date: '', duration: '', cycle_length: '', notes: '' });
      setMessage('Siklus berhasil ditambahkan!');
      fetchCycles();
      fetchPrediction();
    } catch {
      setMessage('Gagal menambahkan siklus.');
    }
    setLoading(false);
    setTimeout(() => setMessage(''), 3000);
  };

  const confirmDelete = (id) => {
    setDeleteModal({ open: true, id });
  };

  const handleDelete = async () => {
    await axios.delete(`${API}/cycles/${deleteModal.id}`);
    setDeleteModal({ open: false, id: null });
    fetchCycles();
    fetchPrediction();
  };

  return (
    <div className="min-h-screen bg-pink-50">

      {/* Custom Delete Modal */}
      {deleteModal.open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Hapus Data Siklus?</h3>
            <p className="text-gray-500 text-sm mb-6">Data yang dihapus tidak dapat dikembalikan.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal({ open: false, id: null })}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl font-medium hover:bg-gray-50 transition">
                Batal
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 text-white py-2 rounded-xl font-medium hover:bg-red-600 transition">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white border-b border-pink-100 shadow-sm">
        <button onClick={() => navigate('/')} className="text-2xl font-bold text-pink-500">
          FlowTrack
        </button>
        <span className="text-gray-400 text-sm">My Tracker</span>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">

        {/* Prediction Card */}
        {prediction && (
          <div className="bg-white rounded-2xl shadow p-5 border border-pink-100">
            <h2 className="text-lg font-semibold text-pink-500 mb-3">Prediksi Siklus Berikutnya</h2>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-pink-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">Periode Terakhir</p>
                <p className="font-bold text-pink-600">
                  {new Date(prediction.last_period).toISOString().split('T')[0]}
                </p>
              </div>
              <div className="bg-rose-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">Rata-rata Siklus</p>
                <p className="font-bold text-rose-500">{prediction.avg_cycle_length} hari</p>
              </div>
              <div className="bg-red-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">Prediksi Berikutnya</p>
                <p className="font-bold text-red-500">{prediction.predicted_next}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-5 border border-pink-100">
          <h2 className="text-lg font-semibold text-pink-500 mb-4">Catat Siklus Baru</h2>
          {message && (
            <p className={`text-sm mb-3 ${message.includes('berhasil') ? 'text-green-500' : 'text-red-400'}`}>
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-sm text-gray-600">Tanggal Mulai *</label>
              <input type="date" required value={form.start_date}
                onChange={e => setForm({ ...form, start_date: e.target.value })}
                className="w-full border border-pink-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Durasi Menstruasi (hari) *</label>
              <input type="number" required min="1" max="10" value={form.duration}
                onChange={e => setForm({ ...form, duration: e.target.value })}
                placeholder="contoh: 5"
                className="w-full border border-pink-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Panjang Siklus (hari)</label>
              <input type="number" min="21" max="45" value={form.cycle_length}
                onChange={e => setForm({ ...form, cycle_length: e.target.value })}
                placeholder="contoh: 28 (opsional)"
                className="w-full border border-pink-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Catatan</label>
              <input type="text" value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
                placeholder="mood, gejala, dll (opsional)"
                className="w-full border border-pink-200 rounded-xl px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition">
              {loading ? 'Menyimpan...' : 'Simpan Siklus'}
            </button>
          </form>
        </div>

        {/* List */}
        <div className="bg-white rounded-2xl shadow p-5 border border-pink-100">
          <h2 className="text-lg font-semibold text-pink-500 mb-4">Riwayat Siklus</h2>
          {cycles.length === 0 ? (
            <p className="text-gray-400 text-center text-sm py-4">Belum ada data siklus.</p>
          ) : (
            <div className="space-y-3">
              {cycles.map(cycle => (
                <div key={cycle.id} className="flex justify-between items-center bg-pink-50 rounded-xl px-4 py-3">
                  <div>
                    <p className="font-semibold text-pink-600">{cycle.start_date?.split('T')[0]}</p>
                    <p className="text-xs text-gray-500">
                      Durasi: {cycle.duration} hari
                      {cycle.cycle_length && ` · Siklus: ${cycle.cycle_length} hari`}
                      {cycle.notes && ` · ${cycle.notes}`}
                    </p>
                  </div>
                  <button onClick={() => confirmDelete(cycle.id)}
                    className="text-red-400 hover:text-red-600 text-sm font-medium">
                    Hapus
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default TrackerPage;