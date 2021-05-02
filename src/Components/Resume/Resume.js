import React,{ useState } from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from '../../Images/mahamudhasan mithoon(2).pdf';

export default function Resume() {
        const [numPages, setNumPages] = useState(null);
        const [pageNumber, setPageNumber] = useState(1);
      
        function onDocumentLoadSuccess({ numPages }) {
          setNumPages(numPages);
        }
  return (
      <div>
    <Document file={samplePDF}
     onLoadSuccess={onDocumentLoadSuccess}
     >
      <Page pageNumber={pageNumber} />
    </Document>
    </div>
  )
    }
