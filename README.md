📚 Proyecto MongoDB - Gestión Académica
📌 Descripción

Este proyecto modela un sistema académico usando MongoDB, representando la información de una institución educativa (colegio o universidad).

El sistema está dividido en múltiples colecciones que abarcan los actores y procesos más importantes en el ámbito académico:

Estudiantes 👩‍🎓 → Registro de alumnos con datos personales y académicos.

Profesores 👨‍🏫 → Información del personal docente.

Materias 📖 → Cursos o asignaturas dictadas.

Eventos académicos 📅 → Actividades extracurriculares y culturales.

Registros académicos (notas) 📝 → Evaluaciones y desempeño estudiantil.

El objetivo principal es aplicar operaciones CRUD (Create, Read, Update, Delete), consultas con operadores y expresiones regulares, simulando un sistema real de gestión escolar/universitario.

⚙️ Creación de la Base de Datos
use gestion_academica;


Justificación: Se crea una base de datos única (gestion_academica) para centralizar toda la información institucional.

📂 Colecciones y Datos
🔹 1. Estudiantes
db.estudiantes.insertMany([
  { "id_estudiante": 1, "nombre": "Carlos Pérez", "grado": 10, "edad": 16, "correo": "carlos.perez@colegio.edu" },
  { "id_estudiante": 2, "nombre": "María Gómez", "grado": 11, "edad": 17, "correo": "maria.gomez@colegio.edu" }
]);


✅ Justificación:

Se incluyen atributos básicos (nombre, grado, edad, correo) para identificar y gestionar al estudiante.

El id_estudiante garantiza unicidad y sirve de referencia en los registros académicos.

🔹 2. Profesores
db.profesores.insertMany([
  { "id_profesor": 1, "nombre": "Laura Martínez", "materia": "Matemáticas", "correo": "laura.martinez@colegio.edu", "años_experiencia": 8 },
  { "id_profesor": 2, "nombre": "Andrés López", "materia": "Historia", "correo": "andres.lopez@colegio.edu", "años_experiencia": 12 }
]);


✅ Justificación:

Se documenta el nombre, materia, correo y años_experiencia porque son datos relevantes para clasificar y asignar cursos.

El id_profesor sirve para vincular materias y registros académicos.

🔹 3. Materias
db.materias.insertMany([
  { "id_materia": 1, "nombre": "Matemáticas", "creditos": 4, "profesor_asignado": "Laura Martínez" },
  { "id_materia": 2, "nombre": "Historia", "creditos": 3, "profesor_asignado": "Andrés López" }
]);


✅ Justificación:

Se incluyen nombre, creditos y profesor_asignado para modelar la estructura académica.

Los créditos permiten calcular la carga académica.

🔹 4. Eventos Académicos
db.eventos.insertMany([
  { "id_evento": 1, "titulo": "Semana de la Ciencia", "fecha": "2023-08-15", "ubicacion": "Auditorio Principal" },
  { "id_evento": 2, "titulo": "Olimpiadas Matemáticas", "fecha": "2023-09-10", "ubicacion": "Salón 204" }
]);


✅ Justificación:

Se agregan titulo, fecha y ubicacion porque son los datos clave para organizar un evento.

Los eventos complementan la vida académica más allá de las materias.

🔹 5. Registros Académicos
db.academicos.insertMany([
  { "id_registro": 1, "id_estudiante": 1, "id_profesor": 1, "materia": "Matemáticas", "nota_final": 4.5, "año": 2023 },
  { "id_registro": 2, "id_estudiante": 2, "id_profesor": 2, "materia": "Historia", "nota_final": 3.8, "año": 2023 }
]);


✅ Justificación:

Se registran evaluaciones con referencias a id_estudiante y id_profesor.

La nota_final y el año permiten evaluar desempeño y hacer reportes históricos.

🔍 Consultas CRUD
📘 Estudiantes
db.estudiantes.find().pretty(); // Listar todos
db.estudiantes.find({ grado: 11 }); // Buscar por grado
db.estudiantes.updateOne({ id_estudiante: 1 }, { $set: { correo: "c.perez@colegio.edu" } }); // Actualizar correo
db.estudiantes.deleteOne({ id_estudiante: 2 }); // Eliminar estudiante


✅ Justificación: Consultas que permiten gestionar estudiantes de manera dinámica (buscar, actualizar, eliminar).

📘 Profesores
db.profesores.find({ materia: "Matemáticas" });
db.profesores.find({ años_experiencia: { $gt: 10 } });
db.profesores.updateOne({ id_profesor: 1 }, { $set: { materia: "Física" } });
db.profesores.deleteOne({ id_profesor: 2 });


✅ Justificación: Permite identificar docentes por materia, experiencia o cambios en asignaciones.

📘 Materias
db.materias.find().pretty();
db.materias.find({ creditos: { $gte: 4 } });
db.materias.updateOne({ id_materia: 1 }, { $set: { profesor_asignado: "Carlos Ruiz" } });


✅ Justificación: Se facilita la administración de cursos según créditos o asignaciones docentes.

📘 Eventos
db.eventos.find({ titulo: { $regex: "Ciencia", $options: "i" } });
db.eventos.updateOne({ id_evento: 2 }, { $set: { fecha: "2023-09-20" } });
db.eventos.deleteOne({ id_evento: 1 });


✅ Justificación: Uso de expresiones regulares para búsquedas flexibles y operaciones básicas de mantenimiento.

📘 Registros Académicos
db.academicos.find({ id_estudiante: 1 });
db.academicos.find({ nota_final: { $gte: 3.0 } }); // Estudiantes aprobados
db.academicos.find({ nota_final: { $gte: 4.0, $lte: 5.0 } }); // Rango de notas
db.academicos.updateOne({ id_registro: 1 }, { $set: { nota_final: 4.8 } });


✅ Justificación: Consultas enfocadas en evaluación de desempeño académico y control de calificaciones.

📌 Conclusión

Este proyecto demuestra cómo MongoDB puede gestionar de manera flexible la información de un sistema educativo.

Se aplicaron operaciones CRUD en todas las colecciones.

Se usaron operadores lógicos y comparativos para consultas avanzadas.

Se incluyó el uso de expresiones regulares para búsquedas dinámicas.

👉 En conjunto, estas prácticas permiten manejar estudiantes, profesores, materias, eventos y evaluaciones de manera eficiente en una institución educativa.

✍️ Realizado por:

Cristian Perez

Juan Sebastián Gualdrón