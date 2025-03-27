import { getDictionary } from '@/get-dictionary';
import DownloadHacFiles from '../components/download-hac-files';


export default async function Collaborate({
  params: { lang }
}) {
  const dictionary = await getDictionary(lang);


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <DownloadHacFiles/>
      <h1>{dictionary['share']['text']}</h1>
    </div>
  );
}
