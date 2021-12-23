import s from "./Charts.module.css";
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from "recharts";

export default function Charts() {
  const data = [
    {
      name: "Свинина",
      amt: 500,
    },
    {
      name: "Овощи",
      amt: 300,
    },
    {
      name: "Консервы",
      amt: 100,
    },
    {
      name: "Фрукты",
      amt: 400,
    },
    {
      name: "Говядина",
      amt: 600,
    },
  ];

  const sortedData = data.sort((a, b) => b.amt - a.amt);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text x={x + width / 2} y={y} textAnchor="middle">{`${value}`}</text>
    );
  };

  return (
    <ResponsiveContainer height={300} width="50%" className={s.chartContainer}>
      <BarChart width={600} height={300} data={sortedData} margin={{ top: 30 }}>
        <Tooltip />
        <XAxis dataKey="name" />
        <Bar
          dataKey="amt"
          fill="#FF751D"
          barSize={40}
          label={renderCustomBarLabel}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
