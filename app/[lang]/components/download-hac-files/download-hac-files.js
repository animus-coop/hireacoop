'use client'

import { useEffect, useRef } from "react";

export default function DownloadHacFiles() {
  const hasDownloaded = useRef(false);

  useEffect(() => {
    if (!hasDownloaded.current) {
      const fileUrl = '/hac.zip';
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'hac.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      hasDownloaded.current = true;
    }
  }, []);

  return;
}