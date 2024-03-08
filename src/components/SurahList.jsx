// eslint-disable-next-line react/prop-types
const SurahList = ({ name, id, setSurahId }) => {
  return (
    <div className="surah w-full">
      <div className="link w-full flex justify-center items-center">
        <button
          className="w-[80%] my-0 mx-auto p-4 bg-brilliant text-goodBlack font-extrabold rounded"
          onClick={() => setSurahId(id)}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default SurahList;
