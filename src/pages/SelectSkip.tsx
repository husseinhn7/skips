import { useState, useEffect } from "react";
import GridCard from "@/components/GridCard";
import type { Skip, ViewMode } from "@/lib/types";
import ListCard from "@/components/ListCard";
import Header from "@/components/Header";
import ActionBar from "@/components/ActionBar";
import ProgressBar from "@/components/Progress";
import Hero from "@/components/Hero";







export default function SkipSelectionPage() {
    const [skips, setSkips] = useState<Skip[] | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
              "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
            );
            const res = await response.json()
            console.log(res)
            setSkips(res)
        }
        fetchData()
    },[])
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(
    skips && skips.find((skip) => skip.popular) || null
  );
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const handleSkipSelect = (skip: Skip) => {
    setSelectedSkip(skip);
    };
    if (!skips) {
        return <div>
            loading ....
        </div>
    }

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
