import { createContext, useState } from 'react';

export const LyricsContext = createContext();

export const baseURL = 'https://api.lyrics.ovh';

export default function LyricsProvider({ children }) {
  const [response, setResponse] = useState('');
  const [songInfo, setSongInfo] = useState('');
  const [shouldShowLoader, setShouldShowLoader] = useState(false);

  const contextValues = {
    response,
    setResponse,
    songInfo,
    setSongInfo,
    shouldShowLoader,
    setShouldShowLoader,
  };

  return <LyricsContext.Provider value={contextValues}>{children}</LyricsContext.Provider>;
}
