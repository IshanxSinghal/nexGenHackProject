export default function Stats() {
    const stats = [
      { icon: "🧑‍🤝‍🧑", value: "1M+", label: "Lives Saved", color: "text-green-500" },
      { icon: "📈", value: "99.99%", label: "Safety Rate", color: "text-blue-500" },
      { icon: "🛡️", value: "24/7", label: "Emergency Support", color: "text-red-500" },
    ];
  
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-16 bg-gray-50">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className={`text-5xl mb-4 ${s.color}`}>{s.icon}</span>
            <h3 className="text-2xl font-bold">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </section>
    );
  }
  