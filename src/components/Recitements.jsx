import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState, useEffect } from "react";
import SurahList from "./SurahList";

export default function Recitements() {
  const [recitementsData, setRecitementsData] = useState({});
  const [surahId, setSurahId] = useState(null);
  const [surahName, setSurahName] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/sudais.json");
        const jsonData = await response.json();
        setRecitementsData(jsonData);
        setSurahName(jsonData.quranaudio);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const clickedSurah =
    recitementsData.quranaudio &&
    recitementsData.quranaudio.find((surah) => surah.surah === surahId);

  console.log(clickedSurah);
  console.log(surahName);
  return (
    <section className="w-full mt-2">
      <div className="surahList flex flex-col gap-4 justify-center items-center w-full mb-28">
        {Array.isArray(surahName) &&
          surahName.map((surah) => (
            <SurahList
              key={surah.id}
              name={surah.name}
              id={surah.surah}
              setSurahId={(surahId) => setSurahId(surahId)}
            />
          ))}
      </div>
      <div className="surah w-full fixed bottom-0">
        <AudioPlayer src={clickedSurah && clickedSurah.url} autoPlay />
      </div>
    </section>
  );
}
