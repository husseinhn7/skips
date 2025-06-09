import {
  Check,
  AlertTriangle,
  Calendar,
  Weight,
  RouteIcon as Road,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Skip } from "@/lib/types";
import { calculateTotalPrice, formatHirePeriod } from "@/lib/utils";
import image from "../assets/img.jpg"


const GridCard = ({
    skip,
    selectedSkip,
    handleSkipSelect,
}: {
    skip: Skip;
    selectedSkip: Skip | null;
    handleSkipSelect: (skip: Skip) => void;
}) => {
    const totalPrice = calculateTotalPrice(skip)

    return (
      <Card
        className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl p-0 overflow-hidden bg-amber-600 ${
          selectedSkip?.id === skip.id
            ? "ring-2 ring-purple-500 shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50 scale-[1.02]"
            : "hover:scale-[1.01] bg-white/70 backdrop-blur-sm"
        }`}
        onClick={() => handleSkipSelect(skip)}
      >
        <CardContent className="p-0">
          <div className="relative">
            <div className="relative overflow-hidden rounded-t-lg h-48">
              <img
                src={ image}
                alt={`${skip.size} yard skip`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-3 right-3">
                <Badge className="bg-white/90 text-gray-900 font-bold">
                  {skip.size} YD
                </Badge>
              </div>

              {skip.popular && (
                <div className="absolute top-3 left-3">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
                    🔥 Popular
                  </Badge>
                </div>
              )}

              {/* Road Status Badge */}
              <div className="absolute bottom-3 left-3 flex flex-col space-y-1">
                {!skip.allowed_on_road && (
                  <Badge
                    variant="destructive"
                    className="flex items-center space-x-1 bg-red-500/90"
                  >
                    <AlertTriangle className="w-3 h-3" />
                    <span className="text-xs">Permit Required</span>
                  </Badge>
                )}
                {skip.allowed_on_road && (
                  <Badge className="flex items-center space-x-1 bg-green-500/90 text-white">
                    <Road className="w-3 h-3" />
                    <span className="text-xs">Road Legal</span>
                  </Badge>
                )}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  {skip.size} Yard Skip
                </h3>
                {selectedSkip?.id === skip.id && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {skip.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{formatHirePeriod(skip.hire_period_days)}</span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  {skip.allows_heavy_waste ? (
                    <>
                      <Weight className="w-3 h-3" />
                      <span>Heavy waste allowed</span>
                    </>
                  ) : (
                    <>
                      <Weight className="w-3 h-3 text-orange-500" />
                      <span className="text-orange-600">Light waste only</span>
                      return{" "}
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    £{totalPrice}
                  </div>
                  <div className="text-xs text-gray-500">inc. VAT</div>
                </div>
                <Button
                  size="sm"
                  className={`transition-all duration-300 ${
                    selectedSkip?.id === skip.id
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkipSelect(skip);
                  }}
                >
                  {selectedSkip?.id === skip.id ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    "Select"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
}

export default GridCard;
