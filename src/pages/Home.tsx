import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-16 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Desarrollador Full Stack
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Creando experiencias digitales excepcionales a través del código.
            Especializado en desarrollo web moderno y soluciones escalables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>Tecnologías modernas para la web</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                React, TypeScript, Tailwind CSS, Next.js
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
              <CardDescription>Servicios robustos y escalables</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Node.js, Express, PostgreSQL, MongoDB
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>DevOps</CardTitle>
              <CardDescription>Infraestructura y despliegue</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Docker, AWS, CI/CD, Git
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="px-8">
            Ver Proyectos
          </Button>
        </motion.div>
      </main>
    </div>
  );
};

export default Home; 