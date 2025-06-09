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
import image from "../assets/img.jpg";





interface ListCardProps {
  skip: Skip;
  index: number;
  selectedSkip: Skip | null;
  handleSkipSelect: (skip: Skip) => void;
}

const ListCard = ({
  skip,
  index,
  selectedSkip,
  handleSkipSelect,
}: ListCardProps) =>{
  const totalPrice = calculateTotalPrice(skip);

  return (
    <Card
      className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl p-0 overflow-hidden ${
        selectedSkip?.id === skip.id
          ? "ring-2 ring-purple-500 shadow-2xl bg-gradient-to-r from-purple-50 to-pink-50 scale-[1.02]"
          : "hover:scale-[1.01] bg-white/70 backdrop-blur-sm"
      } ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
      onClick={() => handleSkipSelect(skip)}
    >
      <CardContent className="p-0">
        <div
          className={`flex flex-col lg:flex-row ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse"
          } items-center`}
        >
          {/* Image Section */}
          <div className="relative lg:w-1/3 w-full">
            <div className="relative overflow-hidden rounded-t-lg lg:rounded-none lg:rounded-l-lg h-64 lg:h-80">
              <img
                src={image}
                alt={`${skip.size} yard skip`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
                <Badge className="bg-white/90 text-gray-900 font-bold text-lg px-3 py-1">
                  {skip.size} YD
                </Badge>
                {skip.popular && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
                    🔥 Popular
                  </Badge>
                )}
              </div>

              {/* Road Status Badges */}
              <div className="absolute bottom-4 left-4 flex flex-col space-y-2">
                {!skip.allowed_on_road && (
                  <Badge
                    variant="destructive"
                    className="flex items-center space-x-1 bg-red-500/90"
                  >
                    <AlertTriangle className="w-3 h-3" />
                    <span className="text-xs font-medium">Permit Required</span>
                  </Badge>
                )}
                {skip.allowed_on_road && (
                  <Badge className="flex items-center space-x-1 bg-green-500/90 text-white">
                    <Road className="w-4 h-4" />
                    <span className="text-sm font-medium">Road Legal</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3 w-full p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {skip.size} Yard Skip
                  </h3>
                  {selectedSkip?.id === skip.id && (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  {skip.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatHirePeriod(skip.hire_period_days)}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    {skip.allows_heavy_waste ? (
                      <>
                        <Weight className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">
                          Heavy waste allowed
                        </span>
                      </>
                    ) : (
                      <>
                        <Weight className="w-4 h-4 text-orange-500" />
                        <span className="text-orange-600">
                          Light waste only
                        </span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center space-x-1">
                    {skip.allowed_on_road ? (
                      <>
                        <Road className="w-4 h-4 text-green-600" />
                        <span className="text-green-600">Road legal</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span className="text-red-600">Permit required</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right space-y-4">
                <div className="space-y-1">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    £{totalPrice}
                  </div>
                  <div className="text-sm text-gray-500">
                    inc. VAT & delivery
                  </div>
                  <div className="text-xs text-gray-400">
                    (£{skip.price_before_vat} + £
                    {Math.round((skip.price_before_vat * skip.vat) / 100)} VAT)
                  </div>
                </div>

                <Button
                  size="lg"
                  className={`transition-all duration-300 px-8 py-3 ${
                    selectedSkip?.id === skip.id
                      ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSkipSelect(skip);
                  }}
                >
                  {selectedSkip?.id === skip.id ? (
                    <div className="flex items-center space-x-2">
                      <Check className="w-5 h-5" />
                      <span className="font-semibold">Selected</span>
                    </div>
                  ) : (
                    <span className="font-semibold">Select This Skip</span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ListCard;