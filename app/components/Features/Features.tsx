export default function Features() {
  const features = [
    {
      title: "AI Summary Optimization",
      text: "We write a professional and engaging LinkedIn summary using AI.",
    },
    {
      title: "Strategic Keywords",
      text: "We enhance your visibility in recruiter searches.",
    },
    {
      title: "Experience Restructuring",
      text: "We rewrite your roles and achievements to showcase your best.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What We Do for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${
                index === 2 ? "md:col-span-2" : ""
              } bg-white border border-gray-200 rounded-md p-8 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
