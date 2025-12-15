import React from "react";

const CardsOverlay = () => {
  return (
    <div className="h-[1000vh] bg-gray-100">
      {/* Card 1 */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-red-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 1
        </div>
      </section>

      {/* Card 2 */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-yellow-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 2
        </div>
      </section>

      {/* Card 3 */}
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>
      <section className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-80 h-48 bg-green-400 rounded-xl shadow-lg flex items-center justify-center text-white text-xl">
          Card 3
        </div>
      </section>

      {/* Extra scroll space */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-700">End of cards</div>
      </section>
    </div>
  );
};

export default CardsOverlay;
