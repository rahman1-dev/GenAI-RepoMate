import React from "react";

const Card = () => {
  return (
    <div className="group min-h-32 rounded-xl border border-stone-200 bg-white p-5 transition duration-200 hover:border-blue-300 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-base font-semibold text-stone-900">Card</div>
          <div className="mt-2 text-sm text-stone-500">Repository summary</div>
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-blue-500 transition group-hover:scale-110" />
      </div>
    </div>
  );
};

export default Card;
