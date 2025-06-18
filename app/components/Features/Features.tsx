import Feature from "../Feature/Feature";

export default function Features() {
  const features = [
    {
      id: "1",
      title: "AI Summary Optimization",
      text: "We write a professional and engaging LinkedIn summary using AI.",
    },
    {
      id: "2",
      title: "Strategic Keywords",
      text: "We enhance your visibility in recruiter searches.",
    },
    {
      id: "3",
      title: "Experience Restructuring",
      text: "We rewrite your roles and achievements to showcase your best.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          What We Do for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              text={feature.text}
              isWide={index === 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
