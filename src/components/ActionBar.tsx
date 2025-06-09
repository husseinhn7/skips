import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Skip } from "@/lib/types";
import { calculateTotalPrice } from "@/lib/utils";

const ActionBar = ({ selectedSkip }: { selectedSkip: Skip }) => {
    const totalPrice = calculateTotalPrice(selectedSkip);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                {selectedSkip.size} Skip
              </h3>
              <p className="text-gray-600">
                £{totalPrice} • {selectedSkip.hire_period_days} day hire period
              </p>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 px-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 flex items-center space-x-2 px-8 shadow-lg"
            >
              <span className="font-semibold">Continue to Permits</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
