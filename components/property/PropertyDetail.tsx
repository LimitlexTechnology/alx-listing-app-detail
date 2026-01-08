import React, { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const tabs = ["About", "What we offer", "Reviews", "Host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [active, setActive] = useState<string>("About");

  return (
    <div className="container mx-auto p-6">
      <header>
        <h1 className="text-3xl font-bold">{property.name.replace(/-/g, " ")}</h1>
        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
          <span className="text-yellow-500">★ {property.rating}</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
      </header>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <main className="lg:col-span-2">
          {/* Image grid */}
          <div className="grid grid-cols-2 gap-2">
            <img src={property.images?.[0] ?? property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
            {property.images?.slice(1, 4).map((img, i) => (
              <img key={i} src={img} alt={`${property.name}-${i}`} className="w-full h-48 object-cover rounded" />
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <nav className="flex space-x-4 border-b">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`py-2 px-3 -mb-px ${active === t ? "border-b-2 border-blue-600 font-semibold" : "text-gray-600"}`}
                >
                  {t}
                </button>
              ))}
            </nav>

            <div className="mt-4">
              {active === "About" && (
                <div>
                  <h2 className="text-xl font-semibold">About this property</h2>
                  <p className="mt-2 text-gray-700">{property.description}</p>
                </div>
              )}

              {active === "What we offer" && (
                <div>
                  <h2 className="text-xl font-semibold">What this place offers</h2>
                  <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {property.category.map((amenity, idx) => (
                      <li key={idx} className="bg-gray-100 p-2 rounded">{amenity}</li>
                    ))}
                  </ul>
                </div>
              )}

              {active === "Reviews" && <ReviewSection reviews={property.reviews} />}

              {active === "Host" && (
                <div>
                  <h2 className="text-xl font-semibold">About the host</h2>
                  {property.host && (
                    <div className="flex items-center mt-3">
                      {property.host.avatar && (
                        <img src={property.host.avatar} alt={property.host.name} className="w-12 h-12 rounded-full mr-3" />
                      )}
                      <div>
                        <p className="font-bold">{property.host.name}</p>
                        <p className="text-sm text-gray-600">Superhost</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>

        <div className="lg:col-span-1">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
