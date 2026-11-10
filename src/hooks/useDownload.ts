import { useCallback } from 'react';
import { toast } from 'sonner';

export function useDownload() {
  const downloadPDF = useCallback(async (elementId: string, filename: string) => {
    const toastId = toast.loading('Generating PDF…');
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const element = document.getElementById(elementId);
      if (!element) { toast.error('Document element not found', { id: toastId }); return; }

      const canvas = await html2canvas(element, {
        scale: 2, useCORS: true, allowTaint: true, logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const isLandscape = canvas.width > canvas.height;
      const pdf = new jsPDF({
        orientation: isLandscape ? 'landscape' : 'portrait',
        unit: 'px',
        format: isLandscape ? [canvas.width / 2, canvas.height / 2] : [canvas.width / 2, canvas.height / 2],
      });
      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(`${filename}.pdf`);
      toast.success('PDF downloaded!', { id: toastId });
    } catch (err) {
      console.error(err);
      toast.error('PDF generation failed', { id: toastId });
    }
  }, []);

  const downloadImage = useCallback(async (elementId: string, filename: string, format: 'png' | 'jpg') => {
    const toastId = toast.loading(`Generating ${format.toUpperCase()}…`);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const element = document.getElementById(elementId);
      if (!element) { toast.error('Document element not found', { id: toastId }); return; }

      const canvas = await html2canvas(element, {
        scale: 2, useCORS: true, allowTaint: true, logging: false,
        backgroundColor: '#ffffff',
      });

      const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
      const quality = format === 'png' ? undefined : 0.95;
      const dataUrl = format === 'png' ? canvas.toDataURL(mimeType) : canvas.toDataURL(mimeType, quality);

      const link = document.createElement('a');
      link.download = `${filename}.${format}`;
      link.href = dataUrl;
      link.click();
      toast.success(`${format.toUpperCase()} downloaded!`, { id: toastId });
    } catch (err) {
      console.error(err);
      toast.error('Image generation failed', { id: toastId });
    }
  }, []);

  const printDocument = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) { toast.error('Document not found'); return; }

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) { toast.error('Pop-up blocked. Allow pop-ups to print.'); return; }

    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        try { return Array.from(sheet.cssRules).map((r) => r.cssText).join('\n'); }
        catch { return ''; }
      })
      .join('\n');

    printWindow.document.write(`
      <html><head><title>Print Document</title>
      <style>${styles}</style>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet"/>
      </head>
      <body style="margin:0;padding:0;">${element.outerHTML}</body></html>
    `);
    printWindow.document.close();
    printWindow.onload = () => { printWindow.print(); };
    toast.success('Print dialog opened');
  }, []);

  return { downloadPDF, downloadImage, printDocument };
}
