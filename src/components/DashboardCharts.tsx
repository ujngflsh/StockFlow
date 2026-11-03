import { Package } from 'lucide-react';
import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type MovementPoint = {
  day: string;
  in: number;
  out: number;
};

type CategoryPoint = {
  name: string;
  value: number;
};

type DashboardChartsProps = {
  movementChart: MovementPoint[];
  categories: CategoryPoint[];
  totalUnits: number;
};

const chartColors = ['#2563eb', '#14b8a6', '#f59e0b', '#8b5cf6', '#64748b'];

export default function DashboardCharts({
  movementChart,
  categories,
  totalUnits,
}: DashboardChartsProps) {
  return (
    <div className="dashboard-grid">
      <section className="panel chart-panel">
        <div className="panel-head">
          <div>
            <h3>Inventory movement</h3>
            <p>Stock in vs. stock out · Last 7 days</p>
          </div>
          <span className="legend">
            <i className="blue-dot" /> Stock in <i className="orange-dot" /> Stock out
          </span>
        </div>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={movementChart}>
              <defs>
                <linearGradient id="inFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.16} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#94a3b8', fontSize: 12 }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="in"
                name="Stock in"
                stroke="#2563eb"
                fill="url(#inFill)"
                strokeWidth={2.5}
              />
              <Area
                type="monotone"
                dataKey="out"
                name="Stock out"
                stroke="#f59e0b"
                fill="none"
                strokeWidth={2.5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="panel category-panel">
        <div className="panel-head">
          <div>
            <h3>Stock by category</h3>
            <p>Current unit distribution</p>
          </div>
        </div>
        {categories.length ? (
          <>
            <div className="donut">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categories}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={57}
                    outerRadius={78}
                    paddingAngle={3}
                  >
                    {categories.map((category, index) => (
                      <Cell
                        key={category.name}
                        fill={chartColors[index % chartColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-center">
                <b>{totalUnits.toLocaleString()}</b>
                <small>units</small>
              </div>
            </div>
            <div className="category-legend">
              {categories.map((category, index) => (
                <div key={category.name}>
                  <span>
                    <i style={{ background: chartColors[index % chartColors.length] }} />
                    {category.name}
                  </span>
                  <b>{category.value.toLocaleString()}</b>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="empty">
            <Package size={24} />
            <span>No category stock yet.</span>
          </div>
        )}
      </section>
    </div>
  );
}
