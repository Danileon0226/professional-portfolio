import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { Link, useNavigate } from "react-router-dom";

const CV = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleDownload = () => {
    if (cvRef.current) {
      html2pdf()
        .from(cvRef.current)
        .save("Daniel_Alejandro_Salgado_Leon_CV.pdf");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav
        className="text-sm mb-6 flex items-center gap-2 text-gray-500"
        aria-label="Breadcrumb"
      >
        <Link to="/" className="hover:underline text-blue-600">
          Inicio
        </Link>
        <span className="mx-1">/</span>
        <span className="font-semibold text-gray-700">CV</span>
      </nav>
      {/* Botón de volver */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-blue-600 hover:underline focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        Volver
      </button>
      <div
        ref={cvRef}
        className="bg-white text-gray-900 rounded-lg shadow p-6 md:p-10 text-base md:text-lg"
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
          DANIEL ALEJANDRO SALGADO LEÓN
        </h1>
        <p className="mb-2 text-center text-sm md:text-base">
          📧 danielalejandrosalgadoleon@gmail.com | 📱 (+57) 311 750 2382 | 🌐{" "}
          <a
            href="https://linkedin.com/in/daniel-alejandro-salgado-leon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/daniel-alejandro-salgado-leon
          </a>
        </p>
        <hr className="my-4" />
        <h2 className="text-lg md:text-2xl font-bold mt-4">
          PERFIL PROFESIONAL
        </h2>
        <p className="mb-4">
          Desarrollador Frontend & FullStack con más de 3 años de experiencia
          construyendo interfaces de usuario modernas, responsivas y altamente
          optimizadas. Experto en React, Next.js, React Native y Express.js, con
          fuerte enfoque en la experiencia del usuario, el rendimiento web y la
          arquitectura escalable. Apasionado por transformar ideas en productos
          digitales de alto impacto mediante código limpio, pruebas continuas y
          diseño de interfaces atractivas.
        </p>
        <h2 className="text-lg md:text-2xl font-bold mt-4">
          EXPERIENCIA PROFESIONAL
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>
            <b>Software Engineer Front - Periferia IT</b> (Oct 2024 –
            Actualidad)
            <br />
            Establecí estándares de desarrollo y optimización de rendimiento en
            frontend y backend.
            <br />
            Participé en el desarrollo de soluciones empresariales para clientes
            como Terpel y Cavipetrol, con React, Express y sistemas escalables.
            <br />
            Diseñé interfaces intuitivas, responsivas y modernas con altos
            estándares de accesibilidad.
          </li>
          <li>
            <b>FullStack Developer - TecnoTics S.A.S</b> (Jul 2023 – Oct 2024)
            <br />
            Lideré el desarrollo de plataformas como Apps for the World, Vlipz
            Cimarrona, y Terminal del Sur, usando React, Express y Node.js.
            <br />
            Incrementé el rendimiento de aplicaciones en +50% aplicando
            optimizaciones en código y pruebas automatizadas.
            <br />
            Implementé soluciones personalizadas centradas en UX/UI y
            mantenibilidad.
          </li>
          <li>
            <b>Frontend Developer Jr. - Crystal S.A.S</b> (Dic 2022 – Jun 2023)
            <br />
            Desarrollo de dashboards empresariales con React y MUI.
            <br />
            Implementación de servicios backend en C# con arquitectura MVC.
            <br />
            Participación activa en sprints ágiles, entregando features
            funcionales y testeadas.
          </li>
        </ul>
        <h2 className="text-lg md:text-2xl font-bold mt-4">
          HABILIDADES DESTACADAS
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            <b>Frontend:</b> React, React Native, Next.js, Material UI, Tailwind
            CSS
          </li>
          <li>
            <b>Backend:</b> Node.js, Express.js, C# (MVC)
          </li>
          <li>
            <b>Testing:</b> Jest, React Testing Library
          </li>
          <li>
            <b>DevOps & Tools:</b> Git, GitHub, Figma, Postman, Vercel
          </li>
          <li>
            <b>Soft Skills:</b> Comunicación efectiva, liderazgo técnico,
            pensamiento analítico
          </li>
          <li>
            <b>Idiomas:</b> Español (nativo), Inglés (intermedio-avanzado)
          </li>
        </ul>
        <h2 className="text-lg md:text-2xl font-bold mt-4">
          FORMACIÓN ACADÉMICA
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            <b>Técnico Laboral en Desarrollo de Software - CESDE (2023)</b>
            <br />
            Reconocimiento a mejor desempeño académico.
            <br />
            Beca de Excelencia Comfama.
            <br />
            Formación en arquitectura web, principios SOLID y diseño ágil.
          </li>
          <li>
            <b>
              Diplomado en Mercadeo Digital - Universidad Pontificia Bolivariana
              (2022)
            </b>
            <br />
            Mejor Proyecto en Estrategias de Marketing Digital.
            <br />
            Dominio en SEO, SEM, campañas, analítica web y growth hacking.
          </li>
        </ul>
        <h2 className="text-lg md:text-2xl font-bold mt-4">
          PROYECTOS DESTACADOS
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            <b>Apps for the World:</b> Desarrollo completo de la plataforma web
            para gestión de contenidos y exposición internacional de productos
            digitales.{" "}
            <a
              href="https://appsfortheworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              appsfortheworld.com
            </a>
          </li>
          <li>
            <b>HemoGroup:</b> Aplicación para agendamiento de citas médicas y
            pruebas de laboratorio.{" "}
            <a
              href="https://hemogroup.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              hemogroup.netlify.app
            </a>
          </li>
          <li>
            <b>Construredes:</b> Portal web responsivo para empresa
            constructora.{" "}
            <a
              href="https://construredes.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              construredes.netlify.app
            </a>
          </li>
          <li>
            <b>Tecnotics:</b> Plataforma de soluciones tecnológicas con landing
            pages y optimización SEO.{" "}
            <a
              href="https://tecnotics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              tecnotics.com
            </a>
          </li>
        </ul>
        <h2 className="text-lg md:text-2xl font-bold mt-4">
          INTERESES Y VALORES PERSONALES
        </h2>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>
            Disciplina y crecimiento personal mediante entrenamiento físico
            constante.
          </li>
          <li>
            Innovación tecnológica y desarrollo continuo de proyectos propios.
          </li>
          <li>
            Trabajo colaborativo, comunicación clara y liderazgo positivo.
          </li>
        </ul>
      </div>
      <button
        onClick={handleDownload}
        className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold text-base shadow transition"
      >
        Descargar PDF
      </button>
    </div>
  );
};

export default CV;
