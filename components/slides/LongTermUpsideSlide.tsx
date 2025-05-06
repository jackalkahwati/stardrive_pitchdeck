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
  { product: "API Subscriptions", range: "$2M–$8M", high: 8, readiness: "Moderate" },
  { product: "Visualized Threat Intel", range: "$3M–$10M", high: 10, readiness: "Moderate" },
  { product: "DoD/Allied Kinetic Contracts", range: "$5M–$12M", high: 12, readiness: "Moderate-High" },
  { product: "Commercial Hosting (Classified)", range: "$3M–$7M", high: 7, readiness: "Medium" },
];

const readinessColors: Record<string, string> = {
  "Moderate-High": "#38bdf8",
  Moderate: "#60a5fa",
  Medium: "#93c5fd",
};

const LongTermUpsideSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Long-Term Upside (2–3 Years)</h2>
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <BarChart data={rows} layout="vertical" margin={{ left: 140 }}>
          <YAxis type="category" dataKey="product" tick={{ fill: "#d1d5db", fontSize: 12 }} width={160} />
          <XAxis type="number" domain={[0, 12]} hide />
          <Tooltip formatter={(v) => `$${v}M`} labelFormatter={() => ""} />
          <Bar dataKey="high" label={{ position: "right", formatter: (_: any, __: any, props: any) => props?.payload?.range ?? "" }}>
            {rows.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={readinessColors[entry.readiness] || "hsl(var(--primary))"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <p className="text-center text-gray-300 text-base md:text-lg max-w-xl mx-auto">
      Dual revenue stream: <span className="text-white font-semibold">software intelligence</span> + <span className="text-white font-semibold">hardware intercepts</span>
    </p>
    <Legend payload={Object.entries(readinessColors).map(([key, color]) => ({ value: key, type: "square", color }))} wrapperStyle={{ color: "#9ca3af", fontSize: "0.875rem" }} />
  </div>
);

export default LongTermUpsideSlide; 