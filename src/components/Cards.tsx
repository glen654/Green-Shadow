export function Cards() {
  return (
    <div className="container p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg h-50 ">
          <div>
            <h6 className="mb-4 text-xl">Number Of Fields</h6>
            <h2 className="text-right flex items-center">
              <i className="fab fa-delicious text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Fields <span>351</span>
            </p>
          </div>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg h-50 ">
          <div>
            <h6 className="mb-4 text-xl">Number Of Staff</h6>
            <h2 className="text-right flex items-center">
              <i className="fa-solid fa-people-group text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Staff <span>351</span>
            </p>
          </div>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-50 ">
          <div>
            <h6 className="mb-4 text-xl">Number Of Vehicles</h6>
            <h2 className="text-right flex items-center">
              <i className="fa-solid fa-truck text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Vehicles <span>351</span>
            </p>
          </div>
        </div>

        <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg h-50">
          <div>
            <h6 className="mb-4 text-xl">Number Of Equipments</h6>
            <h2 className="text-right flex items-center">
              <i className="fa-solid fa-trowel text-2xl mr-2"></i>
              <span className="mt-4 text-lg">486</span>
            </h2>
            <p className="mt-4 flex justify-between text-sm">
              Used Equipments <span>351</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
