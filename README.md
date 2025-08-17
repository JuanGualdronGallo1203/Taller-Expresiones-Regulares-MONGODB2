📚 Proyecto MongoDB - Gestión Académica
📌 Descripción

Este proyecto modela un sistema académico en MongoDB, con colecciones que representan la información de un colegio/universidad:

Estudiantes 👩‍🎓

Profesores 👨‍🏫

Materias 📖

Eventos académicos 📅

Registros académicos (notas) 📝

El objetivo es aplicar operaciones CRUD y consultas con operadores y expresiones regulares en MongoDB.

⚙️ Creación de la Base de Datos
use gestion_academica;

📂 Colecciones y Datos

🔹 1. Estudiantes
db.estudiantes.insertMany([
  { "id_estudiante": 1, "nombre": "Carlos Pérez", "grado": 10, "edad": 16, "correo": "carlos.perez@colegio.edu" },
  { "id_estudiante": 2, "nombre": "María Gómez", "grado": 11, "edad": 17, "correo": "maria.gomez@colegio.edu" }
]);

🔹 2. Profesores
db.profesores.insertMany([
  { "id_profesor": 1, "nombre": "Laura Martínez", "materia": "Matemáticas", "correo": "laura.martinez@colegio.edu", "años_experiencia": 8 },
  { "id_profesor": 2, "nombre": "Andrés López", "materia": "Historia", "correo": "andres.lopez@colegio.edu", "años_experiencia": 12 }
]);

🔹 3. Materias
db.materias.insertMany([
  { "id_materia": 1, "nombre": "Matemáticas", "creditos": 4, "profesor_asignado": "Laura Martínez" },
  { "id_materia": 2, "nombre": "Historia", "creditos": 3, "profesor_asignado": "Andrés López" }
]);

🔹 4. Eventos
db.eventos.insertMany([
  { "id_evento": 1, "titulo": "Semana de la Ciencia", "fecha": "2023-08-15", "ubicacion": "Auditorio Principal" },
  { "id_evento": 2, "titulo": "Olimpiadas Matemáticas", "fecha": "2023-09-10", "ubicacion": "Salón 204" }
]);

🔹 5. Registros Académicos
db.academicos.insertMany([
  { "id_registro": 1, "id_estudiante": 1, "id_profesor": 1, "materia": "Matemáticas", "nota_final": 4.5, "año": 2023 },
  { "id_registro": 2, "id_estudiante": 2, "id_profesor": 2, "materia": "Historia", "nota_final": 3.8, "año": 2023 }
]);

🔍 Consultas CRUD
📘 Estudiantes

Listar todos:

db.estudiantes.find().pretty();


Buscar por grado:

db.estudiantes.find({ grado: 11 });


Actualizar correo:

db.estudiantes.updateOne({ id_estudiante: 1 }, { $set: { correo: "c.perez@colegio.edu" } });


Eliminar estudiante:

db.estudiantes.deleteOne({ id_estudiante: 2 });

📘 Profesores

Profesores de Matemáticas:

db.profesores.find({ materia: "Matemáticas" });


Más de 10 años de experiencia:

db.profesores.find({ años_experiencia: { $gt: 10 } });


Actualizar materia:

db.profesores.updateOne({ id_profesor: 1 }, { $set: { materia: "Física" } });


Eliminar profesor:

db.profesores.deleteOne({ id_profesor: 2 });

📘 Materias

Todas las materias:

db.materias.find().pretty();


Buscar por créditos:

db.materias.find({ creditos: { $gte: 4 } });


Actualizar profesor asignado:

db.materias.updateOne({ id_materia: 1 }, { $set: { profesor_asignado: "Carlos Ruiz" } });

📘 Eventos

Buscar evento por título (regex):

db.eventos.find({ titulo: { $regex: "Ciencia", $options: "i" } });


Actualizar fecha:

db.eventos.updateOne({ id_evento: 2 }, { $set: { fecha: "2023-09-20" } });


Eliminar evento:

db.eventos.deleteOne({ id_evento: 1 });

📘 Registros Académicos

Notas de un estudiante:

db.academicos.find({ id_estudiante: 1 });


Estudiantes aprobados (nota ≥ 3):

db.academicos.find({ nota_final: { $gte: 3.0 } });


Rango de notas:

db.academicos.find({ nota_final: { $gte: 4.0, $lte: 5.0 } });


Actualizar nota:

db.academicos.updateOne({ id_registro: 1 }, { $set: { nota_final: 4.8 } });

📌 Conclusión

Este proyecto demuestra cómo usar MongoDB para manejar información académica con múltiples colecciones relacionadas. Se aplicaron operaciones CRUD, búsquedas con condiciones y expresiones regulares, útiles en un sistema escolar/universitario.

realizado por: Cristian Perez y Juan Sebastian Gualdron