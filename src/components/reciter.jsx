import { useState, useEffect } from "react";
import ReciterBox from "./ReciterBox";
import { useParams } from "react-router-dom";

function Reciter() {
  const [recitersData, setRecitersData] = useState([]);
  const [filteredReciters, setFilteredReciters] = useState([]);
  const { reciterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./api/reciters.json");
        const jsonData = await response.json();
        setRecitersData(jsonData);
        setFilteredReciters(jsonData); // Set initial filtered reciters
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Reset the search when the route changes
    setFilteredReciters(recitersData);
  }, [recitersData, reciterId]);

  function getItems(event) {
    const inputValue = event.target.value.toLowerCase();
    const filtered = recitersData.filter((reciter) =>
      reciter.name.toLowerCase().includes(inputValue)
    );

    setFilteredReciters(filtered.length > 0 ? filtered : recitersData);
  }

  return (
    <>
      <section className="mt-10 w-full h-[40vh] relative bg-goodblack text-white bg-goodBlack">
        <div className="hero-text flex flex-col absolute top-1/2 left-1/2 transform translate-y-[-50%] translate-x-[-50%] text-center text-2xl gap-2">
          <h2 className="mb-2">استمع لقارئك المفضل</h2>
          <input
            onChange={getItems}
            type="text"
            placeholder="اسم القارئ"
            className="px-6 py-2 rounded text-goodBlack bg-white text-center"
          />
        </div>
      </section>
      <section className="bg-goodBlack h-screen">
        <div className="reciters flex flex-row flex-wrap gap-2 text-white bold justify-center items-center">
          {filteredReciters.map((reciter) => (
            <ReciterBox key={reciter.id} name={reciter.name} id={reciter.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Reciter;
