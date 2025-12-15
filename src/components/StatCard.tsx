interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

const StatCard = ({ value, label, sublabel }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="text-4xl font-bold text-gold mb-2">{value}</div>
      <div className="font-semibold text-lg">{label}</div>
      {sublabel && <div className="text-sm opacity-80 mt-1">{sublabel}</div>}
    </div>
  );
};

export default StatCard;
