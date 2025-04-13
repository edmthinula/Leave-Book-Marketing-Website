
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type PlanFeature = {
  name: string;
  basicIncluded: boolean;
  standardIncluded: boolean;
  premiumIncluded: boolean;
};

const features: PlanFeature[] = [
  {
    name: "Annual Leave Loop",
    basicIncluded: true,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Leave Request Management",
    basicIncluded: true,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Approval Workflow",
    basicIncluded: true,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Role-Based Access Control",
    basicIncluded: true,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Admin Dashboard",
    basicIncluded: true,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Email Notifications",
    basicIncluded: false,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Leave Balance Tracking",
    basicIncluded: false,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Company Calendar",
    basicIncluded: false,
    standardIncluded: true,
    premiumIncluded: true,
  },
  {
    name: "Leave Balance Tracking (Enhanced)",
    basicIncluded: false,
    standardIncluded: false,
    premiumIncluded: true,
  },
  {
    name: "Medical Document Upload",
    basicIncluded: false,
    standardIncluded: false,
    premiumIncluded: true,
  },
  {
    name: "Report Export Functionality",
    basicIncluded: false,
    standardIncluded: false,
    premiumIncluded: true,
  },
];

export function FeatureComparison() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-brand-blue/5">
            <th className="p-4 text-left font-medium text-brand-dark border-b">Features</th>
            <th className="p-4 text-center font-medium text-brand-dark border-b">Basic</th>
            <th className="p-4 text-center font-medium text-brand-dark border-b">Standard</th>
            <th className="p-4 text-center font-medium text-brand-dark border-b">Premium</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index} 
              className={cn(
                "hover:bg-brand-blue/5 transition-colors",
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              )}
            >
              <td className="p-4 border-b text-brand-gray">{feature.name}</td>
              <td className="p-4 border-b text-center">
                {feature.basicIncluded ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <Minus className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="p-4 border-b text-center">
                {feature.standardIncluded ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <Minus className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
              <td className="p-4 border-b text-center">
                {feature.premiumIncluded ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <Minus className="h-5 w-5 text-gray-300 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
