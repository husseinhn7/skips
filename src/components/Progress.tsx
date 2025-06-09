import {
  Check,
  AlertTriangle,
  Truck,
  Calendar,
  CreditCard,
  MapPin,
  Trash2,
} from "lucide-react";


const steps = [
  { id: 1, name: "Location", icon: MapPin, status: "completed" },
  { id: 2, name: "Waste Type", icon: Trash2, status: "completed" },
  { id: 3, name: "Skip Size", icon: Truck, status: "current" },
  { id: 4, name: "Permits", icon: AlertTriangle, status: "upcoming" },
  { id: 5, name: "Schedule", icon: Calendar, status: "upcoming" },
  { id: 6, name: "Payment", icon: CreditCard, status: "upcoming" },
];

const ProgressBar = () => {
  const currentStepIndex = steps.findIndex((step) => step.status === "current");
  return (
    <div className="mb-16">
    

      {/* Desktop Steps */}
      <div className="hidden md:flex items-center justify-between max-w-4xl mx-auto">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex flex-col items-center space-y-3">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step.status === "completed"
                    ? "bg-green-500 text-white shadow-lg"
                    : step.status === "current"
                    ? "bg-purple-600 text-white shadow-lg ring-4 ring-purple-200"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {step.status === "completed" ? (
                  <Check className="w-7 h-7" />
                ) : (
                  <Icon className="w-7 h-7" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  step.status === "current"
                    ? "text-purple-600"
                    : "text-gray-600"
                }`}
              >
                {step.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile Steps */}
      <div className="md:hidden flex items-center justify-center space-x-2">
        <span className="text-sm font-medium text-gray-600">
          Step {currentStepIndex + 1} of {steps.length}:
        </span>
        <span className="text-sm font-bold text-purple-600">
          {steps[currentStepIndex].name}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
