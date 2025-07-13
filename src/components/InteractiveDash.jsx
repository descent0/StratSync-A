import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight } from "lucide-react";

const barData = [
  { name: "Jan", risk: 12 },
  { name: "Feb", risk: 18 },
  { name: "Mar", risk: 10 },
  { name: "Apr", risk: 20 },
];

const pieData = [
  { name: "Retained", value: 76 },
  { name: "Churned", value: 24 },
];

const COLORS = ["#14b8a6", "#64748b"]; // teal and slate

export default function DashboardPreview() {
  return (
    <div className="w-full py-18 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl shadow-inner border border-dashed border-teal-300 dark:border-teal-800 p-6 flex flex-col justify-between text-teal-600 dark:text-teal-300">

      {/* Badge */}
      <div className="flex justify-center">
        <Badge
          variant="secondary"
          className="bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900/40 dark:to-emerald-900/40 text-teal-700 dark:text-teal-300 px-6 py-3 text-sm font-medium hover:scale-105 transition-transform cursor-pointer border border-teal-200/50 dark:border-teal-700/50"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          🚀 AI Risk Detection Enabled
          <ArrowRight className="w-4 h-4 ml-2" />
        </Badge>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4 items-center h-full px-2">
        {/* Bar Chart */}
        <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-lg p-4 rounded-xl border border-teal-200 dark:border-teal-700 shadow">
          <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-white">Monthly Risk Detections</h4>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={barData}>
              <XAxis dataKey="name" tick={{ fill: "#4b5563", fontSize: 12 }} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="risk" fill="#14b8a6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className="bg-white/80 dark:bg-slate-800/60 backdrop-blur-lg p-4 rounded-xl border border-teal-200 dark:border-teal-700 shadow flex flex-col items-center justify-center">
          <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-white">Retention Rate</h4>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={pieData}
                innerRadius={45}
                outerRadius={65}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-xs mt-2 text-gray-600 dark:text-gray-300">76% Retained, 24% Churned</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-700 dark:text-gray-400 mt-2">
        Live stats powered by Copilot AI
      </div>
    </div>
  );
}
