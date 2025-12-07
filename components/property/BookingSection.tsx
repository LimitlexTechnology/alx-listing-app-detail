import React, { useMemo, useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const a = new Date(checkIn);
    const b = new Date(checkOut);
    const diff = Math.ceil((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const total = nights * price;

  return (
    <aside className="w-full lg:w-80 bg-white p-6 shadow-md rounded-lg">
      <div>
        <h3 className="text-2xl font-semibold">${price}/night</h3>
        <p className="text-sm text-gray-500 mt-1">Includes taxes and fees</p>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-2 rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-2 rounded"
        />
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>nights</span>
          <span>{nights}</span>
        </div>
        <div className="flex justify-between font-semibold mt-2">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <button
        disabled={nights === 0}
        className={`mt-4 w-full py-2 px-4 rounded text-white ${nights === 0 ? "bg-gray-400" : "bg-green-600"}`}
        onClick={() => alert(nights > 0 ? `Reserved for ${nights} nights  $${total}` : "Select dates")}
      >
        Reserve now
      </button>
    </aside>
  );
};

export default BookingSection;
