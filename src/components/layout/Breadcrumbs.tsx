import { Link, useLocation } from "react-router-dom";

const breadcrumbNameMap: Record<string, string> = {
  "": "Inicio",
  projects: "Proyectos",
  about: "Sobre mí",
  workstation: "Estación de trabajo",
  cv: "CV",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // No mostramos breadcrumbs en la home
  if (pathnames.length === 0) return null;

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <nav
        className="flex text-sm text-muted-foreground mb-6"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center hover:underline font-medium text-foreground"
            >
              Inicio
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={to} className="inline-flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                {isLast ? (
                  <span className="font-semibold text-foreground">
                    {breadcrumbNameMap[value] || value}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:underline font-medium text-foreground/80"
                  >
                    {breadcrumbNameMap[value] || value}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
