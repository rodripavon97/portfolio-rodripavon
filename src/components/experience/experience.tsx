import { ChevronRight } from "lucide-react";

export const Experience = () => {
    const experiences = [
    {
      title: "Ayudante docente de programación - Unsam",
      period: "Julio 2024 - Presente",
      open: true
    },
    {
      title: "Testing Manual - Grupo MSA",
      period: "Octubre 2023 - Noviembre 2024",
      open: true
    }
  ];

    return (
          <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 font-mono">~/work/experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-gray-700 pl-6 py-2">
                <div className="flex items-start gap-3">
                  <ChevronRight size={20} className="mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    )
}