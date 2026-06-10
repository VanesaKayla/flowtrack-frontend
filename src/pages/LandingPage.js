import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 border-b border-pink-100">
        <span className="text-2xl font-bold text-pink-500">FlowTrack</span>
        <button
          onClick={() => navigate('/tracker')}
          className="bg-pink-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-pink-600 transition text-sm">
          Try FlowTrack Today
        </button>
      </nav>

      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-16 bg-pink-50">
        <div className="max-w-lg">
          <p className="text-pink-500 font-semibold text-sm mb-2">FlowTrack — Period Tracker</p>
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-5">
            Your cycle is so much more than your period
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            It can affect everything — from your mood to your energy levels. 
            Understanding your cycle is more straightforward than you think.
          </p>
          <button
            onClick={() => navigate('/tracker')}
            className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-md">
            Try FlowTrack Today
          </button>
        </div>

        {/* Illustration */}
        <div className="mt-12 md:mt-0">
          <svg width="380" height="420" viewBox="0 0 380 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Phone */}
            <rect x="120" y="40" width="160" height="300" rx="24" fill="white" stroke="#fda4af" strokeWidth="3"/>
            <rect x="133" y="60" width="134" height="260" rx="12" fill="#fff0f5"/>
            {/* Calendar header */}
            <rect x="133" y="60" width="134" height="40" rx="12" fill="#f9a8d4"/>
            <text x="200" y="86" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">June 2026</text>
            {/* Cycle dots */}
            <circle cx="155" cy="125" r="10" fill="#fda4af"/>
            <circle cx="180" cy="125" r="10" fill="#fb7185"/>
            <circle cx="205" cy="125" r="10" fill="#fb7185"/>
            <circle cx="230" cy="125" r="10" fill="#fda4af"/>
            <circle cx="155" cy="155" r="10" fill="#fce7f3"/>
            <circle cx="180" cy="155" r="10" fill="#fce7f3"/>
            <circle cx="205" cy="155" r="10" fill="#fce7f3"/>
            <circle cx="230" cy="155" r="10" fill="#fce7f3"/>
            {/* Period label */}
            <rect x="145" y="180" width="110" height="28" rx="14" fill="#fb7185"/>
            <text x="200" y="199" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Period: Day 3</text>
            {/* Stats */}
            <rect x="145" y="220" width="50" height="50" rx="12" fill="white" stroke="#fda4af" strokeWidth="1.5"/>
            <text x="170" y="242" textAnchor="middle" fill="#fb7185" fontSize="10">Cycle</text>
            <text x="170" y="258" textAnchor="middle" fill="#fb7185" fontSize="14" fontWeight="bold">28d</text>
            <rect x="205" y="220" width="50" height="50" rx="12" fill="white" stroke="#fda4af" strokeWidth="1.5"/>
            <text x="230" y="242" textAnchor="middle" fill="#fb7185" fontSize="10">Next</text>
            <text x="230" y="258" textAnchor="middle" fill="#fb7185" fontSize="11" fontWeight="bold">Jul 8</text>
            {/* Bottom bar */}
            <rect x="155" y="290" width="90" height="8" rx="4" fill="#fda4af" opacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Features */}
      <div className="px-10 md:px-24 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Everything you need to know your body</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-pink-50 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M8 2v3M16 2v3M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-700 mb-2">Track Your Cycle</h3>
            <p className="text-gray-500 text-sm">Log your period start date, duration, and symptoms easily.</p>
          </div>
          <div className="bg-rose-50 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 0v10l6 3" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-700 mb-2">Smart Predictions</h3>
            <p className="text-gray-500 text-sm">Get accurate predictions for your next period based on your history.</p>
          </div>
          <div className="bg-fuchsia-50 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-fuchsia-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C12 21 4 13.5 4 8a8 8 0 0116 0c0 5.5-8 13-8 13z" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="8" r="2" fill="#fb7185"/>
              </svg>
            </div>
            <h3 className="font-bold text-gray-700 mb-2">Cycle History</h3>
            <p className="text-gray-500 text-sm">View and manage your complete cycle history anytime.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white text-center py-16 px-10">
        <h2 className="text-3xl font-bold mb-4">Start tracking your cycle today</h2>
        <p className="text-pink-100 mb-8">Free, private, and made for you.</p>
        <button
          onClick={() => navigate('/tracker')}
          className="bg-white text-pink-500 font-bold px-10 py-3 rounded-full hover:bg-pink-50 transition shadow-lg">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-400 text-sm border-t border-pink-100">
        © 2026 FlowTrack for Girlies — Vanesa Kayla Zahra
      </div>
    </div>
  );
}

export default LandingPage;