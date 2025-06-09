import { useState, useEffect } from "react";
import GridCard from "@/components/GridCard";
import type { Skip, ViewMode } from "@/lib/types";
import ListCard from "@/components/ListCard";
import Header from "@/components/Header";
import ActionBar from "@/components/ActionBar";
import ProgressBar from "@/components/Progress";
import Hero from "@/components/Hero";





const skips: Skip[] = [
  {
    id: 17934,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 162.5,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: false,
    image: "/placeholder.svg?height=150&width=200",
    popular: false,
    description: "Perfect for small home projects and garden clearance",
  },
  {
    id: 17935,
    size: 5,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 200.83,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    popular: true,
    description: "Ideal for bathroom renovations and small extensions",
  },
  {
    id: 17936,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    popular: false,
    description: "Great for kitchen refits and medium home projects",
  },
  {
    id: 17937,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 245.83,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    popular: false,
    description: "Suitable for large home clearances and renovations",
  },
  {
    id: 17938,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 296.67,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: false,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    description: "Perfect for commercial projects and large renovations",
  },
  {
    id: 17939,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 325,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: false,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    description: "Ideal for construction sites and major clearances",
  },
  {
    id: 17940,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 361.67,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: false,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    description: "Large capacity for extensive building projects",
  },
  {
    id: 17941,
    size: 16,
    hire_period_days: 7,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 425,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: false,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    description: "Heavy-duty skip for major construction work",
  },
  {
    id: 17942,
    size: 20,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 668.33,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: false,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    description: "Maximum capacity for large-scale projects",
  },
  {
    id: 17943,
    size: 40,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 730.83,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: false,
    allows_heavy_waste: true,
    image: "/placeholder.svg?height=150&width=200",
    description: "Industrial-grade skip for major developments",
  },
];

export default function SkipSelectionPage() {
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
              "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
            );
            const res = await response.json()
            console.log(res)
            console.log("++++++++++++++++++++++++++++++++++++++++++")
        }
        fetchData()
    },[])
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(
    skips.find((skip) => skip.popular) || null
  );
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <Header viewMode={viewMode} setViewMode={setViewMode} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />

        <ProgressBar />

        {/* Skip Cards */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {skips.map((skip) => (
              <GridCard
                key={skip.id}
                skip={skip}
                selectedSkip={selectedSkip}
                handleSkipSelect={handleSkipSelect}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-8 mb-16">
            {skips.map((skip, index) => (
              <ListCard
                key={skip.id}
                skip={skip}
                index={index}
                selectedSkip={selectedSkip}
                handleSkipSelect={handleSkipSelect}
              />
            ))}
          </div>
        )}

        {selectedSkip && <ActionBar selectedSkip={selectedSkip} />}

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center my-18">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Need Help Choosing?
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our skip size guide helps you find the perfect fit for your project.
            All images are for illustration purposes only. Actual skip
            appearance may vary. Prices include delivery, hire period, and
            collection within our standard service area.
          </p>
        </div>
      </div>
    </div>
  );
}
