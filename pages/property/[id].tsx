import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  
  // Wait for router to be ready before accessing query params
  if (!router.isReady) {
    return (
      <div className="container mx-auto p-6">
        <p>Loading...</p>
      </div>
    );
  }

  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) {
    return (
      <div className="container mx-auto p-6">
        <p>Property not found</p>
      </div>
    );
  }

  return (
    <div>
      <PropertyDetail property={property} />
    </div>
  );
}

