const Main = () => {
  return (
    <main className="w-full h-screen relative bg-goodBlack text-white">
      <div className="hero-text flex flex-col absolute top-1/2 left-1/2 transform translate-y-[-50%] translate-x-[-50%] text-center text-2xl gap-2">
        <h1 className="text-brilliant font-extrabold text-4xl">
          القران الكريم
        </h1>
        <p>
          كل ما تحتاجه{" "}
          <span className="text-brilliant font-bold">في مكان واحد</span>
        </p>
      </div>
    </main>
  );
};

export default Main;
