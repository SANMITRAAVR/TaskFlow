function StatsCard({ title, value }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg">

      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className="text-4xl font-bold text-white mt-4">
        {value}
      </p>

    </div>
  );
}

export default StatsCard;