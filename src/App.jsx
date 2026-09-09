import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen py-6 sm:py-10 px-3 sm:px-6">
      {/* Download button */}
      {/* <div className="max-w-[900px] mx-auto mb-4 flex justify-end no-print">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sidebar text-white text-sm font-medium rounded-lg hover:bg-sidebar-dark transition-colors shadow"
        >
          <Download className="w-4 h-4" />
          Download / Print PDF
        </button>
      </div> */}

      {/* Resume Paper */}
      <div className="resume-page max-w-[900px] mx-auto bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Main Content */}
        <MainContent />
      </div>
    </div>
  );
}

export default App;