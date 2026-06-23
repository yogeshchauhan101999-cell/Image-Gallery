const Card = ({ data }) => {
  return (
    <div className="w-75 h-fit border-2 border-indigo-600 rounded-[15px] p-2 flex flex-col gap-3 hover:scale-105 transition-all duration-400">
      <div className="w-full h-60">
        <img
          src={data?.src?.medium}
          alt=""
          className="w-full h-full rounded-t-[15px] aspect-auto"
        />
      </div>

      <h2 className="text-lg text-gray-600 font-semibold">
        {data?.photographer}
      </h2>
      <button className="bg-green-600 w-full py-2 rounded-2xl">Download</button>
    </div>
  );
};

export default Card;
