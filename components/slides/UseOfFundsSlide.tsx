import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const items = [
  { amount: 2.5, label: "AstroShield scaling", color: "#60a5fa" },
  { amount: 5.5, label: "Coilgun prototype + field testing", color: "#38bdf8" },
  { amount: 1.0, label: "Orbital variant R&D", color: "#0ea5e9" },
  { amount: 1.0, label: "Ops runway", color: "#0284c7" },
];

const UseOfFundsSlide: React.FC = () => (
  <div className="space-y-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Use of Funds: $10M Raise</h2>
    <div className="h-72 w-full flex justify-center items-center">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={items}
            dataKey="amount"
            nameKey="label"
            innerRadius={50}
            outerRadius={90}
            paddingAngle={2}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {items.map((entry, index) => (
              <Cell key={`c-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" formatter={(value: string) => <span className="text-gray-300 text-sm">{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <p className="text-center text-gray-300 text-base md:text-lg max-w-xl mx-auto">
      Goal: <span className="text-white font-semibold">24-month path</span> to intercept validation & SDA integration
    </p>
  </div>
);

export default UseOfFundsSlide; 