export const Scores = (props) => {
  const { fleet, maxHits, shots } = props;

  return (
    <div className="flex flex-col w-6/12 lg:w-2/12 mb-5 lg:mr-4 lg:mb-0">
      <div className="flex">
        <div className="h-24 w-full bg-gray-200 flex flex-col items-center justify-center">
          <h1 className="text-3xl">
            {shots}/{maxHits}
          </h1>
          <hr className="w-full border border-blue-400 my-1" />
          <h2 className="text-xl">Intentos</h2>
        </div>
      </div>
      {fleet && (
        <div className="flex flex-1 flex-col justify-evenly">
          {fleet.map((ship) => (
            <div key={ship.id} className="flex items-center mt-2 px-3">
              <h2
                className={`${
                  ship.hitPoints - ship.hits === 0
                    ? "text-red-400 "
                    : "text-gray-400"
                } mr-2`}
              >
                {ship.name}
              </h2>
              <div className="flex">
                {[...Array(ship.hitPoints - ship.hits).keys()].map((_, idx) => (
                  <div
                    key={`circle-${idx}`}
                    className={`h-4 w-4 rounded-xl border-2 mr-2`}
                  />
                ))}
                {[...Array(ship.hits).keys()].map((_, idx) => (
                  <div
                    key={`circle-${idx}`}
                    className={`h-4 w-4 rounded-xl border-2 border-red-400 mr-2 bg-red-300`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
