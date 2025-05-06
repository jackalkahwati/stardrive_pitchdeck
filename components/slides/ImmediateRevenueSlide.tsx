import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const rows = [
  { product: "Conjunction Feeds", range: "$250K–$1.25M", high: 1.25, confidence: "High" },
  { product: "Maneuver Detection", range: "$200K–$800K", high: 0.8, confidence: "High" },
  { product: "Threat Assessment", range: "$150K–$1.25M", high: 1.25, confidence: "High" },
  { product: "Predictive Analytics", range: "$100K–$750K", high: 0.75, confidence: "Medium-High" },
  { product: "Object Classification", range: "$300K–$1.5M", high: 1.5, confidence: "High" },
];

const confidenceColors: Record<string, string> = {
  High: "#38bdf8", // blue
  "Medium-High": "#60a5fa", // lighter blue
};

const ImmediateRevenueSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Immediate Revenue (12–18 mo)</h2>
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <BarChart data={rows} layout="vertical" margin={{ left: 100 }}>
          <YAxis type="category" dataKey="product" tick={{ fill: "#d1d5db", fontSize: 12 }} width={130} />
          <XAxis type="number" domain={[0, 1.5]} hide />
          <Tooltip formatter={(v) => `$${v.toFixed(2)}M`} labelFormatter={() => ""} />
          <Bar dataKey="high" label={{ position: "right", formatter: (_: any, __: any, props: any) => props?.payload?.range ?? "" }}>
            {rows.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={confidenceColors[entry.confidence] || "hsl(var(--primary))"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <p className="text-center text-gray-300 text-base md:text-lg">Projected Total: <span className="text-white font-semibold">$1M–$5.5M</span> in software-derived SDA feeds</p>
    <Legend payload={Object.entries(confidenceColors).map(([key, color]) => ({ value: key, type: "square", color }))} wrapperStyle={{ color: "#9ca3af", fontSize: "0.875rem" }} />
  </div>
);

export default ImmediateRevenueSlide; 