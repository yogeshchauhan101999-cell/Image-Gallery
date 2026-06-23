const Header = ({ setInputVal, handleChange, query }) => {
  return (
    <div className="py-5 flex flex-col items-center gap-5">
      <h1 className="text-4xl font-bold text-indigo-600">
        📸 Image Gellery - {query}
      </h1>

      <div>
        <input
          type="text"
          placeholder="search"
          className="py-1.5 px-3 w-75 border-2 border-indigo-600 outline-0 rounded-l"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          onClick={handleChange}
          className="bg-indigo-600 text-white font-medium py-2 px-8 rounded-r"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
