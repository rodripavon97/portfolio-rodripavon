import { Twitter, Linkedin, Github } from "lucide-react"
import { redes } from "../../utils/redes"

export const HeroSection = () => {

    return (
        <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Hola<sup className="text-2xl">©</sup>
                    <br />
                    Soy Rodrigo Pavon
                </h1>
                <div className="flex gap-4 mb-8">
                    {redes.map((red) => (
                        <a key={red.name} href={red.link} className="text-gray-400 hover:text-blue-400 transition">
                            {red.icon}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center">
                <p className="text-gray-300 text-lg leading-relaxed">
                    Un desarrollador de software creativo, con especialización en Desarrollo Frontend en React y estados globales como Zustand, y con conocimientos con Kotlin.
                    Haciendo cosas bonitas y útiles para que la gente las use.
                </p>
            </div>
        </div>)
}