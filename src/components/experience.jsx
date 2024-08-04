
export function Experience() {
    return (
        <section id="experience" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Experiencia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card left aos-init aos-animate">
                <h3 className="text-xl font-bold mb-2">Desarrollador Back-End</h3>
                <p className="text-muted-foreground mb-4">HIGHTECH Process Counselours. | 2024  - Actualmente</p>
                
                <p className="text-muted-foreground mb-3 text-sm" >Tecnologías Utilizadas: PHP, Laravel, JavaScript, MySQL</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Lidere la Implementación de funcionalidades en los sistemas backend, resolví errores operativos y optimicé el rendimiento del sistema, obteniendo una mejora del 30% en la velocidad de los procesos.</li>
                  <li>Trabajé en entornos locales y dockerizados, aplicando el modelo MVC y la arquitectura de 3 capas.</li>
                  <li>Realicé pruebas y documentación con Postman, reduciendo el tiempo de resolución de errores.</li>
                  <li>Gestioné actividades y objetivos diarios con Trello, y participé activamente en reuniones diarias (Dailys).</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Practicante de Desarrollador Full-Stack</h3>
                <p className="text-muted-foreground mb-4">WAX Revolution. | 2023 - 2023</p>
                <p className="text-muted-foreground mb-3 text-sm" >Tecnologías Utilizadas: PHP, Laravel, JavaScript, MySQL</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Mantuve y desarrollé proyectos existentes, asegurando su correcta operación y optimizando su desempeño.</li>
                  <li>Planeé e integré servicios, expandiendo las capacidades, el alcance y mejorando la experiencia de usuario.</li>
                  <li>Optimicé funcionalidades, contribuyendo significativamente a la eficiencia y escalabilidad del sistema, 
                    logrando un aumento del 10% en el rendimiento sin comprometer la seguridad.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
}