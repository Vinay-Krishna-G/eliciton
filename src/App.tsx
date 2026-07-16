import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="bg-[#fafaf8] min-h-screen text-[#1d1e20] selection:bg-[#85e8c5]/30 antialiased font-body">
      {/* Simple Sticky Navbar */}
      <Navbar />

      {/* Main Single Page Scroll Journey */}
      <main>
        <Home />
      </main>
    </div>
  );
}
