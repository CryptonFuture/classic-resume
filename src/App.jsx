import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

function App() {
   const downloadPDF = () => {
    const element = document.querySelector('.resume-page');

    if (!element) return;

    const options = {
      margin: 0,
      filename: 'Muhammad-Asad-Ali-Akbar-Resume.pdf',

      image: {
        type: 'jpeg',
        quality: 1,
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,
      },

      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
        compress: true,
      },

      pagebreak: {
        mode: ['avoid-all'],
      },
    };

    html2pdf()
      .set(options)
      .from(element)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        // Force single A4 page
        if (pdf.internal.getNumberOfPages() > 1) {
          const pageCount = pdf.internal.getNumberOfPages();

          for (let i = pageCount; i > 1; i--) {
            pdf.deletePage(i);
          }
        }
      })
      .save();
  };
  return (
      <div className="min-h-screen py-6 sm:py-10 px-3 sm:px-6">

      {/* <div className="max-w-[900px] mx-auto mb-4 flex justify-end no-print">
        <button
          onClick={downloadPDF}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sidebar text-white text-sm font-medium rounded-lg hover:bg-sidebar-dark transition-colors shadow"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div> */}

      <div
        id="resume"
        className="resume-page max-w-[900px] mx-auto bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden"
      >

        <Sidebar />

        <MainContent />

      </div>
    </div>
  );
}

export default App;