
//Insertar estudiantes

db.estudiantes.insertMany([
  {
    "id_estudiante": 1,
    "nombre": "Carlos Pérez",
    "grado": 10,
    "edad": 16,
    "correo": "carlos.perez@colegio.edu"
  },
  {
    "id_estudiante": 2,
    "nombre": "María Gómez",
    "grado": 11,
    "edad": 17,
    "correo": "maria.gomez@colegio.edu"
  }
  // ... resto de estudiantes
]);

// Listar todos los estudiantes:

db.estudiantes.find().pretty();

//Buscar estudiante por ID:

db.estudiantes.find({ id_estudiante: 1 });

//Buscar estudiantes de grado 11:

db.estudiantes.find({ grado: 11 });

//Consultas con condiciones

//Estudiantes con edad mayor o igual a 16:

db.estudiantes.find({ edad: { $gte: 16 } });

//Estudiantes cuyo correo termina en @colegio.edu:

db.estudiantes.find({ correo: { $regex: "@colegio\\.edu$" } });

//Actualización y eliminación

//Cambiar correo de un estudiante:

db.estudiantes.updateOne(
  { id_estudiante: 1 },
  { $set: { correo: "c.perez@colegio.edu" } }
);

//Eliminar un estudiante:

db.estudiantes.deleteOne({ id_estudiante: 2 });



//Insertar profesores

db.profesores.insertMany([
  {
    "id_profesor": 1,
    "nombre": "Laura Martínez",
    "materia": "Matemáticas",
    "correo": "laura.martinez@colegio.edu",
    "años_experiencia": 8
  },
  {
    "id_profesor": 2,
    "nombre": "Andrés López",
    "materia": "Historia",
    "correo": "andres.lopez@colegio.edu",
    "años_experiencia": 12
  }
  // ... resto de profesores
]);

//Consultas básicas

//Ver todos los profesores:

db.profesores.find().pretty();

//Buscar profesor por ID:

db.profesores.find({ id_profesor: 1 });


//Profesores que dictan Matemáticas:

db.profesores.find({ materia: "Matemáticas" });

//Consultas con operadores

//Profesores con más de 10 años de experiencia:

db.profesores.find({ años_experiencia: { $gt: 10 } });

//Profesores cuyo nombre contiene "Martínez":

db.profesores.find({ nombre: { $regex: "Martínez", $options: "i" } });

//Actualización y eliminación

//Actualizar la materia de un profesor:

db.profesores.updateOne(
  { id_profesor: 1 },
  { $set: { materia: "Física" } }
);

//Eliminar un profesor:

db.profesores.deleteOne({ id_profesor: 2 });



//Insertar registros académicos

db.academicos.insertMany([
  {
    "id_registro": 1,
    "id_estudiante": 1,
    "id_profesor": 1,
    "materia": "Matemáticas",
    "nota_final": 4.5,
    "año": 2023
  },
  {
    "id_registro": 2,
    "id_estudiante": 2,
    "id_profesor": 2,
    "materia": "Historia",
    "nota_final": 3.8,
    "año": 2023
  }
  // ... resto de registros
]);

//Consultas básicas

//Ver todos los registros académicos:

db.academicos.find().pretty();

//Buscar notas de un estudiante específico:

db.academicos.find({ id_estudiante: 1 });

//Buscar calificaciones de una materia:

db.academicos.find({ materia: "Historia" });

//Consultas con condiciones

//Estudiantes que aprobaron (nota ≥ 3.0):

db.academicos.find({ nota_final: { $gte: 3.0 } });

//Registros de un año específico:

db.academicos.find({ año: 2023 });

//Notas entre 4.0 y 5.0:

db.academicos.find({ nota_final: { $gte: 4.0, $lte: 5.0 } });

//Actualización y eliminación

//Actualizar nota de un estudiante:

db.academicos.updateOne(
  { id_registro: 1 },
  { $set: { nota_final: 4.8 } }
);

//Eliminar un registro académico:

db.academicos.deleteOne({ id_registro: 2 });



//Insertar todas las materias

db.materias.insertMany([
  {
    "codigo_materia": "MAT",
    "nombre": "Matemáticas",
    "area": "Ciencias Exactas",
    "tipo": "Obligatoria",
    "descripcion": "Estudio de conceptos numéricos y algebraicos"
  },
  {
    "codigo_materia": "LEN",
    "nombre": "Lengua Castellana",
    "area": "Humanidades",
    "tipo": "Obligatoria",
    "descripcion": "Estudio del idioma español y literatura"
  },
  // ... resto de materias
]);

//Consultas básicas

//Ver todas las materias:

db.materias.find().pretty();

//Buscar una materia por código:

db.materias.find({ codigo_materia: "MAT" });

//Buscar materias por área:

db.materias.find({ area: "Humanidades" });

//Buscar materias electivas:

db.materias.find({ tipo: "Electiva" });

//Buscar materias de ciencias:

db.materias.find({ area: "Ciencias" });

//Consultas con operadores

//Materias que sean obligatorias y del área de Humanidades:

db.materias.find({ area: "Humanidades", tipo: "Obligatoria" });

//Materias que pertenezcan a Ciencias Exactas o Tecnología:

db.materias.find({ area: { $in: ["Ciencias Exactas", "Tecnología"] } });

//Materias con descripción que contenga la palabra "estudio":

db.materias.find({ descripcion: { $regex: "estudio", $options: "i" } });

//Actualización y eliminación

//Actualizar descripción de Informática:

db.materias.updateOne(
  { codigo_materia: "INF" },
  { $set: { descripcion: "Uso de herramientas tecnológicas y programación básica" } }
);

//Eliminar una materia (ejemplo: Pre ICFES):

db.materias.deleteOne({ codigo_materia: "PRE" });



//Insertar eventos

db.eventos.insertMany([
  {
    "nombre": "Feria Científica Anual",
    "fecha": "2023-06-20",
    "hora": "09:00",
    "ubicacion": "Gimnasio",
    "grados_participantes": [6, 7, 8, 9, 10, 11],
    "tipo": "académico",
    "descripcion": "Exhibición de proyectos científicos estudiantiles"
  },
  {
    "nombre": "Día del Deporte",
    "fecha": "2023-08-15",
    "hora": "08:00",
    "ubicacion": "Cancha principal",
    "grados_participantes": [6, 7, 8, 9, 10, 11],
    "tipo": "deportivo",
    "descripcion": "Competencias deportivas entre grados"
  },
  // ... resto de eventos
]);

//Consultas básicas

//Ver todos los eventos:

db.eventos.find().pretty();

//Buscar un evento por nombre:

db.eventos.find({ nombre: "Feria Científica Anual" });

//Buscar eventos de un tipo específico:

db.eventos.find({ tipo: "deportivo" });

//Consultas con condiciones

//Eventos en los que participa el grado 11:

db.eventos.find({ grados_participantes: 11 });

//Eventos posteriores al 1 de julio de 2023:

db.eventos.find({ fecha: { $gte: "2023-07-01" } });

//Eventos académicos que incluyan grado 9:

db.eventos.find({ tipo: "académico", grados_participantes: 9 });

//Consultas con expresiones regulares

//Eventos con nombre que contenga la palabra "día":

db.eventos.find({ nombre: { $regex: "día", $options: "i" } });

//Eventos cuya descripción contenga "proyectos":

db.eventos.find({ descripcion: { $regex: "proyectos", $options: "i" } });

//Actualización y eliminación

//Cambiar ubicación de un evento:

db.eventos.updateOne(
  { nombre: "Día del Deporte" },
  { $set: { ubicacion: "Estadio Municipal" } }
);

//Eliminar un evento cultural:

db.eventos.deleteOne({ tipo: "cultural" });