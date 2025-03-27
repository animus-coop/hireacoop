'use client'

import { useEffect, useRef } from "react";

export default function DownloadHacFiles({ filename }) {
  const hasDownloaded = useRef(false);

  useEffect(() => {
    if (!hasDownloaded.current) {
      const fileUrl = `/${filename}`;
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      hasDownloaded.current = true;
    }
  }, [filename]);

  return;
}