/*
 * Las caras de Clío · contenido de las ocho estaciones
 * Redacción propia a partir del tema 1 de la asignatura (apuntes y presentación), de las obras
 * base del tema 3 y de la investigación citada en datos/referencias.js. Citas literales breves y atribuidas.
 *
 * Esquema de estación:
 *   id, num, titulo, sub, lema, idea, prediccion{q, o[]}, sintesis[], conceptos[{t,d}], cita{texto, fuente},
 *   matices[{t,d}], aula[], docente{duracion, dinamica, preguntas[]}, refs[], retos[]
 * Tipos de reto: clasificar · ordenar · test · numerico (ver js/retos.js).
 */
window.ESTACIONES = [

/* ===================================================================== 1 */
{
  id: "e1", num: 1,
  titulo: "Los tres espejos",
  sub: "Qué es la Historia y qué pasados conviven en la escuela",
  lema: "¿Recordamos el pasado o lo reconstruimos desde el presente?",
  idea: "La Historia no es el pasado, sino el conocimiento que se construye sobre él con un método. Junto a ella conviven otras representaciones del pasado (la escolar y la cotidiana) que el alumnado trae consigo.",
  prediccion: {
    q: "Antes de empezar: ¿la historia que aprendiste en el colegio es la misma que escriben los historiadores?",
    o: ["Sí: es la misma, solo que más resumida", "No: responde a otras finalidades y a otra lógica", "No hay diferencia porque el pasado es uno solo"]
  },
  sintesis: [
    "El tema se abre con tres voces. Para <strong>Lucien Febvre</strong>, el ser humano «no se acuerda del pasado; siempre lo reconstruye»: parte del presente y desde él interpreta lo que fue. <strong>Marc Bloch</strong> une ambos extremos: la incomprensión del presente nace de la ignorancia del pasado, pero es vano querer comprender el pasado sin saber nada del presente. <strong>Josep Fontana</strong> reivindica la utilidad social de la Historia como la ciencia social más próxima a la vida cotidiana y la única que abarca lo humano en su totalidad.",
    "La Historia es una disciplina cuyo objeto es el pasado de las sociedades en un espacio y un tiempo determinados. Su método descansa en las <strong>fuentes</strong>: con ellas se construye el relato y se extraen conclusiones, y se apoya en otras ciencias (Geografía, Sociología, Antropología) para precisar sus investigaciones. Heródoto llamó a su obra <em>historíe</em>, palabra que significaba «investigación» o «indagación».",
    "Siguiendo a <strong>Mario Carretero</strong> (2007, p. 36), a quien citan Prats y Santacana (2011, p. 14), el tema distingue tres representaciones del pasado: la <strong>historia escolar</strong> (la que aprendimos de niños), la <strong>historia cotidiana</strong>, que funciona como memoria colectiva (por ejemplo, la Fiesta del Charco de La Aldea de San Nicolás), y la <strong>historia académica</strong> o historiográfica, que cultivan historiadores y científicos sociales según la lógica de su disciplina.",
    "Las tres conviven en el aula: el alumnado llega con relatos familiares, fiestas, películas y redes sociales. El trabajo docente no consiste en ignorarlos, sino en convertirlos en objeto de análisis y en acercar la historia escolar a la lógica de la historia académica. Por eso el tema afirma que la educación debe incorporar «sin ninguna restricción» la Historia con mayúscula: la que la comunidad científica reconoce como conocimiento alcanzado."
  ],
  conceptos: [
    { t: "Historia (disciplina)", d: "Conocimiento científico del pasado de las sociedades, construido con fuentes y método, situado en un espacio y un tiempo." },
    { t: "Historia escolar", d: "Versión del pasado seleccionada y transmitida por la escuela con finalidades educativas e instructivas." },
    { t: "Historia cotidiana", d: "Representación colectiva del pasado presente en fiestas, tradiciones y relatos de una comunidad." },
    { t: "Historia académica", d: "Conocimiento historiográfico producido por especialistas según las reglas de su disciplina." },
    { t: "Fuente histórica", d: "Todo vestigio del pasado (escrito, material, oral, iconográfico) que permite construir conocimiento sobre él." }
  ],
  cita: { texto: "La incomprensión del presente nace fatalmente de la ignorancia del pasado. Pero quizás es igualmente vano esforzarse por comprender el pasado, si no se sabe nada del presente.", fuente: "Marc Bloch, Apología para la historia (1949), citado en la presentación del tema" },
  matices: [
    { t: "Historia y pasado no son sinónimos", d: "Conviene evitar en el aula expresiones como «la historia dice» o «así fue la historia». El pasado ya no existe; lo que tenemos son fuentes e interpretaciones, algunas mejor fundadas que otras." },
    { t: "La memoria colectiva no es un error que corregir", d: "Una fiesta como la del Charco transmite identidad y sentido de comunidad. Analizarla históricamente no significa desmentirla, sino preguntar qué se recuerda, cómo y para qué." },
    { t: "Erratas de los apuntes", d: "Los apuntes escriben «María Carretero»: se trata de Mario Carretero. El ejemplo de la Fiesta del Charco es una adaptación canaria del tema; no figura en Prats y Santacana (2011), de donde procede el resto del apartado." },
    { t: "¿Prólogo o libro VII?", d: "Prats y Santacana (2011, p. 17, nota 3) sitúan en el prólogo de Heródoto la frase «el amor a la verdad no me deja que la calle y disimule». Los apuntes la sitúan, con más acierto, en el libro VII (cap. 139), que es donde aparece." }
  ],
  aula: [
    "1.er ciclo: «Mi historia»: objetos y fotografías de la propia vida para distinguir recuerdo y prueba.",
    "2.º ciclo: comparar el relato de una fiesta local contado por la familia con lo que dicen las fuentes del archivo o del museo.",
    "3.er ciclo: contrastar la explicación de un mismo hecho en el libro de texto, en una película y en un artículo divulgativo de un historiador."
  ],
  docente: {
    duracion: "20-25 minutos",
    dinamica: "Votación inicial de la predicción a mano alzada; al cerrar la estación, cada grupo escribe un ejemplo propio de cada representación del pasado.",
    preguntas: [
      "¿Qué historia escolar recordáis y qué finalidad creéis que tenía?",
      "¿Qué fiesta o tradición de vuestro municipio podría trabajarse como historia cotidiana sin caer en el folclorismo?"
    ]
  },
  refs: ["tema1", "prats2011", "carretero2007", "moradiellos2009", "bloch1949", "herodoto"],
  retos: [
    {
      id: "e1-r1", tipo: "clasificar", titulo: "¿Qué representación del pasado es?",
      consigna: "Clasifica cada ejemplo según la representación del pasado que predomina en él.",
      categorias: ["Historia escolar", "Historia cotidiana", "Historia académica"],
      items: [
        { t: "La lista de los reyes godos que se memorizaba en el colegio.", c: 0, e: "Contenido seleccionado y transmitido por la escuela con fines instructivos e identitarios." },
        { t: "La Fiesta del Charco de La Aldea de San Nicolás.", c: 1, e: "Es el ejemplo del propio tema: memoria colectiva hecha fiesta." },
        { t: "Un artículo en una revista científica sobre la economía de los aborígenes de Gran Canaria.", c: 2, e: "Conocimiento producido con método, fuentes y revisión por pares." },
        { t: "El relato familiar de cómo emigró el abuelo a Venezuela.", c: 1, e: "Memoria familiar transmitida oralmente: valiosa como fuente, pero no es historiografía." },
        { t: "Una tesis doctoral basada en protocolos notariales del siglo XVI.", c: 2, e: "Investigación historiográfica sobre fuentes primarias." },
        { t: "El esquema de las edades de la historia del libro de texto de 5.º.", c: 0, e: "Selección escolar del conocimiento, simplificada para la etapa." }
      ]
    },
    {
      id: "e1-r2", tipo: "test", titulo: "Voces del tema",
      preguntas: [
        { q: "«El hombre no se acuerda del pasado; siempre lo reconstruye». ¿A quién atribuye el tema esta idea?", o: ["Lucien Febvre", "Heródoto", "Edwin Seligman"], c: 0, e: "Febvre, cofundador con Bloch de la revista Annales, subraya que el pasado se conoce desde el presente." },
        { q: "En tiempos de Heródoto, la palabra «historia» significaba…", o: ["relato épico", "investigación o indagación", "crónica de reyes"], c: 1, e: "Historíe: indagación para buscar la verdad (nota 3 del tema)." },
        { q: "¿Qué rasgo define a la Historia como disciplina frente a otras representaciones del pasado?", o: ["Que es más antigua", "El uso metódico de fuentes para construir conclusiones", "Que la enseña la escuela"], c: 1, e: "Fuentes y método: es lo que permite contrastar y discutir sus conclusiones." }
      ]
    }
  ]
},

/* ===================================================================== 2 */
{
  id: "e2", num: 2,
  titulo: "Las cinco banderas",
  sub: "Las funciones sociales de la Historia",
  lema: "¿Quién agita las banderas cuando se dice que sopla «el viento de la historia»?",
  idea: "La Historia es un universal cultural, como la religión, pero cada sociedad la usa con fines distintos. El tema distingue cinco funciones sociales; solo una de ellas, la científica, coincide plenamente con la finalidad de la escuela.",
  prediccion: {
    q: "Antes de empezar: ¿por qué se hizo obligatoria la Historia en la escuela europea del siglo XIX?",
    o: ["Para formar investigadores", "Para construir naciones y conciencia patriótica", "Para ocupar el tiempo libre del alumnado"]
  },
  sintesis: [
    "La escuela se sirve de la Historia con finalidades educativas e instructivas, pero la sociedad la percibe de forma distinta según el contexto cultural. Como la religión, la historia existe en todas las sociedades humanas, aunque su concepto varía en el espacio y en el tiempo. En el mundo clásico era una forma literaria ligada a la épica; en la Edad Media, parte de la explicación bíblica; los ilustrados del siglo XVIII la ligaron a la idea de progreso.",
    "<strong>1. Función patriótica.</strong> Refuerza la autoestima de un colectivo. Se consolida con los Estados liberales del siglo XIX, que hicieron de la Historia, junto con la geografía y la literatura nacional, una pieza de la construcción nacional: materia obligatoria en primaria y secundaria y estudios universitarios propios. <strong>2. Función propagandística.</strong> Lanza mensajes positivos sobre un régimen; los totalitarismos del siglo XX la llevaron al extremo en museos y escuelas, pero los Estados democráticos también la usan en conmemoraciones y centenarios.",
    "<strong>3. Afirmación de superioridad cultural.</strong> Presenta el propio sistema como el mejor posible y la civilización propia como superior; el tema cita la narrativa escolar estadounidense («nación de naciones») y el eurocentrismo de muchos programas europeos. <strong>4. Ocio cultural.</strong> Somos consumidores crecientes de productos históricos (viajes, museos, parques temáticos, recreaciones, cine), buenos o malos, verdaderos o falsos, que influyen en la visión del pasado, sobre todo de la población en edad escolar.",
    "<strong>5. Creación de conocimiento científico.</strong> Es la historia que cultiva la comunidad científica y que debe reflejarse en la historia escolar. Toda concepción del pasado está influida por las corrientes intelectuales del presente (positivismo, materialismo histórico, corrientes actuales), y eso, lejos de anular su cientificidad, la reafirma, como ocurre en el resto de las ciencias sociales."
  ],
  conceptos: [
    { t: "Universal cultural", d: "Rasgo presente en todas las sociedades humanas, aunque con formas distintas; el tema aplica la idea a la historia y a la religión." },
    { t: "Función patriótica", d: "Uso de la historia para reforzar la autoestima y la cohesión de un colectivo, central en la construcción de los Estados nacionales." },
    { t: "Función propagandística", d: "Uso de la historia para legitimar un régimen o sistema político mediante mensajes positivos sobre él." },
    { t: "Superioridad cultural", d: "Uso de la historia para presentar la civilización propia como superior a las demás (por ejemplo, el eurocentrismo)." },
    { t: "Ocio cultural", d: "Consumo de productos históricos en el tiempo libre: museos, parques temáticos, recreaciones, cine, turismo." },
    { t: "Función científica", d: "Creación de conocimiento sobre el pasado mediante el método histórico; es la que orienta la historia escolar." }
  ],
  cita: { texto: "Eran ellos los que agitaban las banderas, pero decían que era el viento de la historia.", fuente: "Viñeta reproducida en los apuntes del tema 1, p. 4 (autoría no indicada)" },
  matices: [
    { t: "Las funciones se mezclan", d: "Una misma conmemoración puede ser a la vez patriótica, propagandística y de ocio. La clasificación sirve para analizar, no para etiquetar de una vez cada producto histórico." },
    { t: "Romántico frente a ilustrado", d: "Carretero describe la tensión de la historia escolar entre objetivos «románticos» (identidad y cohesión) y objetivos «ilustrados» (comprensión crítica). La investigación con estudiantes españoles muestra que las narrativas nacionales tradicionales siguen siendo dominantes (Sáiz Serrano y López-Facal, 2015)." },
    { t: "Identidad sin adoctrinamiento", d: "Trepat (1995, pp. 130-132) defiende que la escuela puede facilitar el arraigo en una identidad colectiva siempre que se sustituya el orgullo por la autoestima, se estudien los mitos y su uso público como tales y no se silencien las fuentes críticas: lo que él llama no caer en la «inculcación forzosa y deshonesta». Cita en apoyo a Josep Fontana: la historia ofrece la posibilidad de asumir o rechazar conscientemente una identidad." },
    { t: "No solo los «otros»", d: "El tema insiste en que los Estados democráticos también usan la historia con fines propagandísticos. Es útil evitar que el alumnado asocie estas funciones solo a regímenes lejanos." }
  ],
  aula: [
    "1.er ciclo: ¿por qué celebramos el Día de Canarias? Distinguir entre fiesta, recuerdo y explicación.",
    "2.º ciclo: analizar los rótulos de un centro de interpretación o un museo local: ¿qué cuentan y qué callan?",
    "3.er ciclo: comparar cómo presentan un mismo hecho dos libros de texto de épocas distintas."
  ],
  docente: {
    duracion: "25 minutos",
    dinamica: "Cada grupo recibe un producto histórico real (cartel conmemorativo, folleto turístico, tráiler de película, página del libro de texto) y lo sitúa en una o varias funciones justificándolo.",
    preguntas: [
      "¿Puede la escuela renunciar del todo a la función identitaria? ¿Con qué condiciones sería legítima?",
      "¿Qué función predomina en los contenidos históricos que consumís en redes sociales?"
    ]
  },
  refs: ["tema1", "prats2011", "trepat1995", "carretero2007", "saiz2015"],
  retos: [
    {
      id: "e2-r1", tipo: "clasificar", titulo: "¿Qué bandera ondea?",
      consigna: "Asigna a cada ejemplo la función social que predomina en él.",
      categorias: ["Patriótica", "Propagandística", "Superioridad cultural", "Ocio cultural", "Conocimiento científico"],
      items: [
        { t: "Un plan de estudios del siglo XIX que hace obligatoria la historia nacional para formar «buenos patriotas».", c: 0, e: "Es el caso típico de los Estados liberales: la historia como pieza de la conciencia nacional." },
        { t: "Un museo creado por un régimen para mostrar su llegada al poder como culminación de la historia del país.", c: 1, e: "Mensaje positivo sobre el régimen: función propagandística, especialmente visible en los museos." },
        { t: "Un manual que presenta la historia universal como la marcha de Europa hacia la civilización.", c: 2, e: "Eurocentrismo: la civilización propia como superior al resto." },
        { t: "Un parque temático ambientado en la Roma antigua.", c: 3, e: "Producto histórico de consumo y entretenimiento; influye en la visión del pasado aunque no sea su finalidad." },
        { t: "Un proyecto de investigación que reconstruye la dieta de la población de Gran Canaria antes de la conquista mediante análisis de restos óseos.", c: 4, e: "Creación de conocimiento con método y fuentes." }
      ]
    },
    {
      id: "e2-r2", tipo: "test", titulo: "Historia de la historia escolar",
      preguntas: [
        { q: "¿Con qué tipo de Estado se consolida la función patriótica de la historia escolar?", o: ["Las monarquías medievales", "Los Estados liberales del siglo XIX", "Las ciudades-Estado griegas"], c: 1, e: "La historia se incorporó entonces como materia obligatoria y se crearon estudios universitarios de la especialidad." },
        { q: "Según el tema, ¿usan los Estados democráticos la historia con fines propagandísticos?", o: ["No, es exclusivo de los totalitarismos", "Sí, por ejemplo en conmemoraciones y centenarios", "Solo en tiempos de guerra"], c: 1, e: "Las conmemoraciones pueden convertirse en actos de autoafirmación nacional más que en actos históricos." },
        { q: "¿Qué relación establece el tema entre las corrientes intelectuales del presente y la cientificidad de la historia?", o: ["La anulan", "La reafirman, como en el resto de las ciencias sociales", "No tienen relación"], c: 1, e: "Toda concepción del pasado está influida por el presente; reconocerlo forma parte del método." }
      ]
    }
  ]
},

/* ===================================================================== 3 */
{
  id: "e3", num: 3,
  titulo: "La fotografía borrada",
  sub: "Usos y abusos de la enseñanza de la Historia",
  lema: "Si alguien desaparece de una fotografía, ¿desaparece también de la historia?",
  idea: "La Historia ha sido con frecuencia manoseada, adulterada, amordazada, falseada o enaltecida. Enseñar a reconocer esos abusos, en imágenes, carteles, conmemoraciones o contenidos digitales, es una de las tareas centrales de la didáctica.",
  prediccion: {
    q: "Antes de empezar: ¿qué es más eficaz para manipular el pasado?",
    o: ["Inventar hechos que nunca ocurrieron", "Seleccionar, omitir y retocar lo que sí ocurrió", "Las dos estrategias se combinan"]
  },
  sintesis: [
    "La historia es objeto de uso y, en ocasiones, de abuso por parte de poderes públicos, grupos políticos o ideológicos, industrias culturales y medios de comunicación. Cada época ha tenido sus vehículos: la literatura épica, la tradición oral, la escuela y el museo desde la Ilustración, y el cine y la televisión en el siglo XX. El abuso aparece cuando se usan efemérides, mitos o epopeyas para justificar ideas sobre el presente o legitimar realidades políticas, sin respetar el análisis historiográfico; con tópicos o visiones xenófobas y excluyentes, el tema histórico se vuelve <strong>antieducativo</strong>.",
    "La <strong>fotografía trucada</strong> es un ejemplo elocuente. Antes de la edición digital, se raspaba el negativo, se retocaba con aerógrafo o a mano y se volvía a fotografiar; por eso la imagen retocada suele perder nitidez. La presentación del tema recoge casos clásicos: la desaparición de Nikolái Yezhov junto a Stalin, la eliminación de Trotski de las fotografías de Lenin o el borrado de dirigentes caídos en desgracia. También se «hace aparecer» o se «reúne» a personas para legitimar o idealizar a alguien.",
    "El <strong>cartel de propaganda</strong> trabaja con recursos reconocibles: idealización, miedo, maniqueísmo, ridiculización del adversario y transmisión de consignas. El <strong>dibujo satírico y la caricatura</strong> son también fuentes muy útiles: subjetivos, ingeniosos y críticos, exageran defectos, presentan personajes fácilmente identificables y suelen florecer en etapas de libertad de expresión (el tema analiza una caricatura del turno pactado entre Cánovas y Sagasta «cocinando» el fraude electoral).",
    "Nada de esto impide celebrar conmemoraciones o difundir acontecimientos, pero deberían servir para acercar la historia a la ciudadanía y motivar a conocer el pasado de manera objetiva. Hoy el problema se ha desplazado al entorno digital: Wineburg y McGrew (2019) mostraron que verificadores profesionales evaluaban la fiabilidad de un sitio web mejor que historiadores, porque leían «en lateral» (salían de la página para contrastarla) en lugar de leer en vertical. El análisis de fuentes no se transfiere solo a las pantallas: hay que enseñarlo."
  ],
  conceptos: [
    { t: "Abuso de la historia", d: "Uso del pasado para transmitir consignas políticas o ideológicas sin respetar el análisis historiográfico." },
    { t: "Fotografía trucada", d: "Imagen manipulada para borrar, añadir o reunir personas con fines políticos o de legitimación." },
    { t: "Maniqueísmo", d: "Reducción de un conflicto a una lucha entre buenos y malos absolutos; recurso habitual del cartel de propaganda." },
    { t: "Caricatura histórica", d: "Dibujo satírico que exagera rasgos para criticar; fuente subjetiva pero reveladora de su contexto." },
    { t: "Lectura lateral", d: "Estrategia de verificación que consiste en salir de una fuente digital y contrastar quién la produce y qué dicen otras fuentes sobre ella." }
  ],
  cita: { texto: "La Historia es una materia que con frecuencia ha sido manoseada, adulterada, amordazada, falseada o enaltecida.", fuente: "Apuntes del tema 1, p. 8" },
  matices: [
    { t: "Lee con cautela: el museo del fascismo", d: "El dato procede de Prats y Santacana (2011, p. 16). Su nota 2 describe un museo de reproducciones de monumentos de todas las provincias romanas, ordenado para presentar al fascismo como heredero del imperio de Augusto: corresponde al proyecto surgido de la Muestra Augustea de la Romanidad (1937-1938), destinado al barrio que Roma construía para la Exposición Universal de 1942, cancelada por la guerra. La fecha de inauguración de 1940 no se ha podido contrastar: conviene presentarla con cautela." },
    { t: "No todo retoque es manipulación", d: "Recortar o restaurar una imagen no la convierte en falsa. La pregunta didáctica es quién la modificó, con qué intención y qué efecto tiene sobre la interpretación del pasado." },
    { t: "Del aerógrafo a la IA generativa", d: "Las imágenes generadas por IA producen pasados verosímiles que nunca existieron y circulan sin marca de origen. El procedimiento de análisis del tema sigue siendo válido, pero exige añadir la verificación del origen digital." }
  ],
  aula: [
    "1.er ciclo: juego de las diferencias con dos versiones de una misma foto de clase: ¿quién falta? ¿por qué alguien querría quitarlo?",
    "2.º ciclo: analizar un cartel antiguo de propaganda turística de Canarias: qué muestra, qué idealiza, qué omite.",
    "3.er ciclo: verificar con lectura lateral una imagen «histórica» viral y documentar el proceso."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "En la escena 3D, alternar la fotografía con y sin la figura borrada; después, por parejas, aplicar la guía de análisis de imagen (estación 8) a un cartel real.",
    preguntas: [
      "¿Qué diferencia hay entre seleccionar contenidos (algo inevitable) y manipularlos?",
      "¿Qué haríais si una familia aporta al aula una imagen generada por IA como si fuera una fotografía antigua?"
    ]
  },
  refs: ["tema1", "prats2011", "wineburg2019"],
  retos: [
    {
      id: "e3-r1", tipo: "clasificar", titulo: "Anatomía de un cartel",
      consigna: "Cada descripción corresponde a un cartel de propaganda imaginario. Identifica el recurso principal que utiliza.",
      categorias: ["Idealización", "Miedo", "Maniqueísmo", "Ridiculización del contrario", "Transmisión de consignas"],
      items: [
        { t: "Una familia sonriente y robusta ante campos dorados bajo el sol del nuevo régimen.", c: 0, e: "Se presenta una realidad perfecta, sin conflictos ni carencias." },
        { t: "Una sombra gigantesca con garras se cierne sobre una ciudad indefensa.", c: 1, e: "El cartel busca la adhesión a través de la amenaza." },
        { t: "A la izquierda, soldados luminosos; a la derecha, figuras oscuras y deformes: «Ellos o nosotros».", c: 2, e: "El mundo dividido en buenos y malos absolutos." },
        { t: "El dirigente enemigo dibujado como un payaso diminuto que tropieza con su propia capa.", c: 3, e: "La burla resta autoridad al adversario." },
        { t: "Un puño en primer plano y una única frase en mayúsculas: «¡Trabajo, orden, patria!».", c: 4, e: "Mensaje breve y repetible para fijar valores y consignas." }
      ]
    },
    {
      id: "e3-r2", tipo: "test", titulo: "Del negativo a la pantalla",
      preguntas: [
        { q: "¿Por qué una fotografía retocada antes de la era digital suele verse menos nítida?", o: ["Porque se usaba papel más barato", "Porque, tras raspar y pintar, había que volver a fotografiar la imagen", "Porque se tomaba de noche"], c: 1, e: "La refotografía añadía pérdida de detalle y, a menudo, más oscuridad." },
        { q: "En el estudio de Wineburg y McGrew (2019), ¿por qué los verificadores evaluaron mejor los sitios web que los historiadores?", o: ["Sabían más historia", "Leían en lateral, contrastando fuera de la página", "Usaban programas especiales"], c: 1, e: "Salir de la fuente para investigar quién está detrás resultó más eficaz que leerla a fondo." },
        { q: "Según el tema, ¿cuándo se vuelve antieducativo un tema histórico?", o: ["Cuando es muy antiguo", "Cuando se usan mitos, tópicos o visiones xenófobas y excluyentes", "Cuando se enseña con imágenes"], c: 1, e: "El problema no es el tema, sino el uso que se hace de él." }
      ]
    }
  ]
},

/* ===================================================================== 4 */
{
  id: "e4", num: 4,
  titulo: "La balanza",
  sub: "Memoria e historia",
  lema: "¿Recordar es lo mismo que conocer?",
  idea: "Memoria e historia se relacionan, pero no se confunden. La memoria es vivida, emocional y selectiva; la historia somete el recuerdo a contexto, verificación y método. Llevar la memoria al aula puede ser educativo si se trabaja históricamente.",
  prediccion: {
    q: "Antes de empezar: ¿un testimonio directo de alguien que vivió un hecho es la mejor explicación histórica de ese hecho?",
    o: ["Sí: nadie lo sabe mejor que quien lo vivió", "No necesariamente: es una fuente valiosa que hay que contrastar", "No: los testimonios no sirven para la historia"]
  },
  sintesis: [
    "Prats y Santacana (2011, pp. 19-20) advierten que llevar la llamada <strong>memoria histórica</strong> a las clases no equivale a enseñar Historia. La posición que recoge el tema sostiene que la memoria, en lo que tiene de memoria, es un proceso individual y biográfico que solo por metonimia puede llamarse conocimiento histórico; algunos relatos individuales pueden entrar en contacto con la historia científica, pero no asimilarse a ella.",
    "Gonzalo de Amézola, citando a <strong>Jacques Le Goff</strong>, habla de la «normalización» de la memoria: para ser inspiradora, debe ser verificada y pensada a través de la historia. De ahí la imagen del tema: la historia científica es una «trituradora de memoria» que la digiere para producir conocimiento, no por la distancia temporal, sino por la aplicación de método y teoría al dato, al recuerdo, al vestigio o a la fuente. «Nunca los hechos fueron como se recuerdan».",
    "Otros autores reivindican la memoria frente a las «historias oficiales» y los olvidos interesados que encubren represiones y dictaduras. <strong>Paul Ricoeur</strong> analiza el «olvido feliz» y defiende un uso inteligente del recuerdo y de la memoria social; <strong>Tzvetan Todorov</strong> advierte que todos tienen derecho a recuperar su pasado, pero que sacralizar la memoria es otro modo de hacerla estéril. Krzysztof Pomian insiste en no confundir estas actividades con la enseñanza de la Historia como ciencia social.",
    "La conclusión del tema es didáctica: la memoria de los hechos pasados es un estímulo para el pensamiento histórico, que reta a construir comprensión, contextualización e interpretación y, en consecuencia, explicación. En España, el marco legal de esta cuestión es hoy la <strong>Ley 20/2022, de Memoria Democrática</strong>, que incluye previsiones sobre el sistema educativo."
  ],
  conceptos: [
    { t: "Memoria", d: "Representación del pasado vivida, emocional y selectiva, individual o compartida por un grupo." },
    { t: "Memoria colectiva", d: "Para Halbwachs, memoria que se forma y se sostiene en marcos sociales (familia, grupo, comunidad)." },
    { t: "Normalización de la memoria", d: "En la lectura de Amézola y Le Goff, verificación y elaboración del recuerdo mediante la historia." },
    { t: "Olvido feliz", d: "Expresión de Ricoeur para la reconciliación de una sociedad con sus traumas, que exige un trabajo de memoria previo." },
    { t: "Metonimia", d: "Uso de una palabra por otra con la que guarda relación; el tema la usa para explicar por qué llamar «histórica» a la memoria es impropio." }
  ],
  cita: { texto: "Todos tienen derecho a recuperar su pasado, pero no hay razón para erigir un culto a la memoria por la memoria; sacralizar la memoria es otro modo de hacerla estéril.", fuente: "T. Todorov, citado en los apuntes del tema 1, p. 10" },
  matices: [
    { t: "Lee con cautela: «estrictamente individual»", d: "La tesis de que la memoria es un proceso estrictamente individual no es unánime. Desde Halbwachs, buena parte de las ciencias sociales entiende la memoria como colectiva: se construye en marcos sociales. El tema admite esta dimensión cuando habla de «memoria social»." },
    { t: "Ni enemigas ni sinónimas", d: "La oposición memoria-historia funciona como herramienta de análisis. En la práctica, la historia oral convierte testimonios en fuentes y la historiografía estudia la propia memoria como objeto histórico." },
    { t: "Escrito para Secundaria", d: "Prats y Santacana concluyen que la memoria debe ser considerada «por el profesorado que enseña Historia en la educación secundaria» (2011, p. 20). Los apuntes lo amplían a Primaria. La adaptación es razonable, pero exige graduar: en Primaria, memoria familiar y local, no memorias traumáticas colectivas." },
    { t: "Un tema sensible en el aula", d: "Trabajar memorias traumáticas exige cuidado con el alumnado cuyas familias estuvieron implicadas. La pauta es la del tema: comprender y contextualizar, no juzgar a personas concretas del grupo." }
  ],
  aula: [
    "1.er ciclo: ¿cómo recuerdan dos familiares un mismo cumpleaños? Diferencias entre recuerdos y fotos.",
    "2.º ciclo: entrevista a una persona mayor y contraste de uno de sus datos con un periódico o un documento del archivo municipal.",
    "3.er ciclo: estudio de un lugar de memoria del municipio (monumento, placa, nombre de calle): qué se recuerda, desde cuándo y por qué."
  ],
  docente: {
    duracion: "25-30 minutos",
    dinamica: "En la escena, inclinar la balanza hacia cada platillo mientras se leen los rasgos; después, debate breve con tarjetas «memoria», «historia» y «las dos».",
    preguntas: [
      "¿Puede un testimonio oral ser una fuente histórica? ¿Qué tendríamos que hacer con él?",
      "¿Qué riesgos tiene convertir la clase de Historia en un acto de memoria?"
    ]
  },
  refs: ["tema1", "prats2011", "amezola2000", "halbwachs", "ricoeur2003", "todorov2000", "pomian1999", "memoria2022"],
  retos: [
    {
      id: "e4-r1", tipo: "clasificar", titulo: "¿A qué platillo?",
      consigna: "Sitúa cada rasgo en el platillo de la memoria o en el de la historia, según la balanza del tema.",
      categorias: ["Memoria", "Historia"],
      items: [
        { t: "Experiencia personal", c: 0, e: "La memoria nace de lo vivido." },
        { t: "Influencia emocional", c: 0, e: "El recuerdo está cargado de afectos." },
        { t: "Naturaleza subjetiva", c: 0, e: "Selecciona y reinterpreta desde quien recuerda." },
        { t: "Contextualización", c: 1, e: "La historia sitúa el hecho en su tiempo, espacio y sociedad." },
        { t: "Verificación rigurosa", c: 1, e: "Contraste de fuentes y crítica." },
        { t: "Reconstrucción que aspira a la objetividad", c: 1, e: "Con método, aunque sin objetividad absoluta (estación 6)." }
      ]
    },
    {
      id: "e4-r2", tipo: "test", titulo: "Autores de la memoria",
      preguntas: [
        { q: "¿Quién habla del «olvido feliz» y de un uso inteligente del recuerdo?", o: ["Paul Ricoeur", "Edwin Seligman", "Heródoto"], c: 0, e: "Ricoeur, en La memoria, la historia, el olvido (2000)." },
        { q: "Para el tema, ¿qué convierte el recuerdo en conocimiento histórico?", o: ["La distancia temporal", "La aplicación de método y teoría", "El número de testigos"], c: 1, e: "La «trituración» no se produce por el paso del tiempo, sino por el método." },
        { q: "¿Qué autor sostuvo que la memoria se construye en marcos sociales?", o: ["Maurice Halbwachs", "Marc Bloch", "Krzysztof Pomian"], c: 0, e: "Halbwachs, Los marcos sociales de la memoria (1925) y La memoria colectiva (1950)." }
      ]
    }
  ]
},

/* ===================================================================== 5 */
{
  id: "e5", num: 5,
  titulo: "El volcán de Fuencaliente",
  sub: "Los fines generales de la Historia como materia educativa",
  lema: "Si la Historia estudia el pasado, ¿por qué se dice que sirve para entender el presente?",
  idea: "La Historia no explica el presente, pero facilita su comprensión. El tema le atribuye cuatro grandes fines educativos y ocho razones por las que ayuda a entender el mundo actual.",
  prediccion: {
    q: "Antes de empezar: ¿qué ciencia social estudia el presente?",
    o: ["La Historia", "La Geografía, la Economía, la Sociología o la Antropología", "Ninguna: el presente no se puede estudiar"]
  },
  sintesis: [
    "Es un tópico afirmar que la historia sirve para comprender el presente. La Historia explica el pasado; el presente lo analizan la Geografía, la Economía, la Sociología, la Antropología o la Ciencia Política. La afirmación procede en parte del <strong>historicismo</strong>, que ve toda realidad como producto de un devenir. Aun así, cualquier análisis del presente se enriquece cuando se tiene perspectiva histórica. Por eso el tema enumera <strong>cuatro fines</strong>: facilita la comprensión del presente; contribuye a desarrollar las facultades intelectuales; enriquece otros temas del currículo y estimula las aficiones para el tiempo libre; y ayuda a adquirir sensibilidad social, estética y científica.",
    "Facilita la comprensión del presente por <strong>ocho razones</strong>: permite analizar las tensiones temporales; estudia la causalidad y las consecuencias; explica la complejidad de los problemas sociales; permite construir esquemas de diferencias y semejanzas (la comparación, en palabras de Pagès); estudia el cambio y la continuidad (¿es Halloween un cambio cultural o una moda?); potencia la racionalidad en el análisis social y político; enseña métodos y técnicas de la investigación social; y permite conocer y contextualizar las raíces culturales e históricas, base de las identidades múltiples.",
    "El volcán que da nombre a esta estación procede de la presentación del tema. La erupción del volcán de San Antonio, en Fuencaliente (La Palma), duró 66 días, del 17 de noviembre de 1677 al 21 de enero de 1678, y sepultó la célebre Fuente Santa. Un testimonio de la época describe las bocas, las coladas y las «tribulaciones» de los habitantes. Es un buen ejemplo de cómo un caso histórico permite trabajar causalidad, duración, cambio y continuidad, y conectar con el presente de la isla.",
    "Los otros fines amplían el horizonte. Estudiar historia como indagación desarrolla capacidades de clasificar, comparar, analizar, describir, inferir y explicar. Junto con la Geografía, la Historia estructura otras ciencias sociales y da contexto a la Literatura, las Matemáticas o las Ciencias Naturales, además de fomentar la afición por la indagación del pasado. Y forma <strong>sensibilidad</strong>: una mirada «afectuosa y racional» sobre los problemas humanos que el tema distingue con nitidez de la sensiblería.",
    "<strong>Trepat (1995, pp. 128-135)</strong> llega a conclusiones parecidas por otro camino. Empieza con humildad: muchas personas viven bien sin saber historia. Pero cuenta la anécdota de Palmarini: una pareja de turistas que viajaba a Roma solo conocía la ciudad por las películas, no distinguía un edificio renacentista de uno moderno y percibía el mundo como algo «instantáneo, llano, sin relieve». La historia da ese <em>relieve sociotemporal</em>, responde a la curiosidad por los orígenes, ayuda a comprender herencias comunes y, en un mundo de mensajes de partidos, grupos de presión y publicidad, ofrece claves para descifrarlos. Trepat cierra con los periódicos de la semana: sus chistes y polémicas resultaban incomprensibles sin cultura histórica."
  ],
  conceptos: [
    { t: "Historicismo", d: "Concepción que entiende toda realidad como producto de un devenir histórico." },
    { t: "Tensiones temporales", d: "Conflictos de distinto tipo (sociales, ideológicos, económicos, generacionales) que atraviesan un proceso histórico." },
    { t: "Causalidad estructural", d: "Causas profundas y de larga duración, distintas de los motivos personales y de las causas próximas." },
    { t: "Cambio y continuidad", d: "Distinción entre lo que se transforma y lo que permanece; permite separar modas de cambios sociales." },
    { t: "Identidades múltiples", d: "Pertenencias simultáneas (local, regional, nacional, europea, humana) que la historia ayuda a contextualizar." },
    { t: "Sensibilidad social", d: "Combinación de empatía y racionalidad ante los problemas humanos; no equivale a sensiblería." }
  ],
  cita: { texto: "Educar para una identidad humana común a todos los hombres por diferente que sea su patrimonio de genes, de tierra, de comunidades, de ritos, de mitos y de ideas.", fuente: "Edgar Morin, La mente bien ordenada (2000), citado por Prats y Santacana (2011, p. 25) y en los apuntes del tema 1, p. 16" },
  matices: [
    { t: "Lee con cautela: «acelerar el pensamiento formal»", d: "El tema (y Prats y Santacana, 2011, p. 25) sostiene que la Historia puede acelerar el desarrollo del pensamiento formal. Hernández Cardona y Trepat (1992, nota 4) lo formulan de otra manera: la idea de que la infancia no puede comprender la historia hasta superar las operaciones formales «es una falacia que cubre errores didácticos de enfoques». La investigación posterior coincide en que se razona históricamente antes de lo que se creía si contenido y didáctica son adecuados (véase el tema 3), pero no habla de «acelerar» estadios." },
    { t: "Las ocho razones hoy", d: "Varias razones coinciden con lo que la literatura actual llama conceptos de pensamiento histórico (Seixas y Morton, 2013): causas y consecuencias, cambio y continuidad, uso de fuentes como pruebas. Santisteban (2010) los vincula a la formación de una ciudadanía democrática." },
    { t: "Identidad sin adoctrinamiento", d: "El tema reconoce que el sentido de identidad es problemático: puede contradecir una historia educadora si se convierte en adhesión irracional. La clave está en estudiar los mitos como mitos y presentar a la gente como protagonista de la historia." }
  ],
  aula: [
    "1.er ciclo: ¿qué ha cambiado y qué sigue igual en mi barrio desde que nacieron mis abuelos?",
    "Para todos los ciclos: la anécdota de los turistas de Palmarini (Trepat, 1995) como pregunta inicial: ¿qué no podrían entender de nuestra ciudad quienes no saben nada de su historia?",
    "2.º ciclo: el volcán como caso: qué pasó, cuánto duró, qué consecuencias tuvo para quienes vivían allí.",
    "3.er ciclo: comparar las erupciones de 1677 y de 2021 en La Palma: semejanzas, diferencias, cambios y continuidades en la respuesta social."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Por grupos, cada uno defiende una de las ocho razones con un ejemplo canario; el resto del grupo clase evalúa si el ejemplo es pertinente.",
    preguntas: [
      "¿Por qué el tema afirma que la Historia no explica el presente pero ayuda a comprenderlo?",
      "¿Qué diferencia hay entre «sensibilidad» y «sensiblería» en una actividad sobre una catástrofe?"
    ]
  },
  refs: ["tema1", "prats2011", "trepat1995", "hernandez1992", "pages2006", "morin2000", "savater1997", "seixas2013", "santisteban2010", "gomez2014"],
  retos: [
    {
      id: "e5-r1", tipo: "clasificar", titulo: "¿Qué fin persigue?",
      consigna: "Relaciona cada actividad con el fin general de la Historia que trabaja principalmente.",
      categorias: ["Comprender el presente", "Desarrollar facultades intelectuales", "Enriquecer el currículo y el ocio", "Adquirir sensibilidad social"],
      items: [
        { t: "Explicar por qué hay hoy tantos apellidos de origen portugués en Canarias.", c: 0, e: "Una realidad actual se comprende mejor con perspectiva histórica." },
        { t: "Clasificar y comparar objetos de cocina de tres generaciones e inferir cambios.", c: 1, e: "Clasificar, comparar e inferir: habilidades intelectuales." },
        { t: "Calcular en Matemáticas la duración de la construcción de una catedral y visitar después el museo de la ciudad.", c: 2, e: "Conexión con otra área y afición por el patrimonio." },
        { t: "Leer cartas de emigrantes canarios a Cuba y escribir cómo se sentirían.", c: 3, e: "Empatía y racionalidad sobre un problema humano." }
      ]
    },
    {
      id: "e5-r2", tipo: "numerico", titulo: "La duración de una erupción",
      consigna: "La erupción del volcán de San Antonio comenzó el 17 de noviembre de 1677 y terminó el 21 de enero de 1678. ¿Cuántos días duró, contando el primero y el último?",
      respuesta: 66, tolerancia: 0, unidad: "días",
      pista: "Noviembre tiene 30 días: cuenta del 17 al 30 incluidos, suma diciembre completo y los días de enero.",
      explicacion: "14 días de noviembre (17-30) + 31 de diciembre + 21 de enero = 66 días, la cifra que da la presentación del tema. Conectar duración y calendario es trabajar el tiempo histórico (tema 3)."
    },
    {
      id: "e5-r3", tipo: "test", titulo: "Las ocho razones",
      preguntas: [
        { q: "La adopción de Halloween en España sirve en el tema para ejemplificar…", o: ["la causalidad estructural", "la distinción entre cambio social y moda", "la función propagandística"], c: 1, e: "Analizar cambios y pervivencias permite separar lo que es moda de lo que es cambio cultural." },
        { q: "¿Qué afirmación es fiel al tema?", o: ["La Historia es la ciencia que estudia el presente", "La Historia explica el pasado y facilita la comprensión del presente", "La Historia sustituye a la Sociología"], c: 1, e: "Es la tesis central de este apartado." },
        { q: "¿Qué tipo de causas distingue el tema?", o: ["Motivos, causas próximas y causalidad estructural", "Solo causas económicas", "Causas buenas y malas"], c: 0, e: "La causalidad histórica desmonta las explicaciones inmediatistas y personalistas." }
      ]
    }
  ]
},

/* ===================================================================== 6 */
{
  id: "e6", num: 6,
  titulo: "La constelación social",
  sub: "Naturaleza y campo epistemológico de las Ciencias Sociales",
  lema: "Si las Ciencias Sociales no formulan leyes universales, ¿son ciencias?",
  idea: "Las Ciencias Sociales son ciencias y son sociales: aplican el método científico a un objeto propio, la realidad social. Comparten tres rasgos: carácter científico, un objeto específico y una relación peculiar entre sujeto y objeto.",
  prediccion: {
    q: "Antes de empezar: ¿qué hace científico a un conocimiento?",
    o: ["Que sus resultados sean exactos e indiscutibles", "El camino seguido para obtenerlo: el método", "Que se pueda medir en un laboratorio"]
  },
  sintesis: [
    "Las Ciencias Sociales son un conjunto amplio y heterogéneo de disciplinas relativamente jóvenes que estudian al ser humano como ser social. Su campo abarca la evolución de los seres humanos, el comportamiento interpersonal, la dinámica de los grupos, la organización del poder, el uso del territorio, la producción, las expresiones culturales y artísticas y la evolución de todo ello en el tiempo. Ninguna puede reclamar la hegemonía, pero tampoco conviene la atomización: hacen falta espacios comunes de confluencia.",
    "La presentación recoge la clasificación de <strong>Edwin Seligman</strong>: ciencias <strong>puramente sociales</strong> (Política, Economía, Historia, Antropología, Sociología…), <strong>semisociales</strong> (Ética, Educación, Filosofía, Psicología) y <strong>con implicaciones sociales</strong> (Biología, Geografía, Medicina, Lingüística, Arte). <strong>Pilar Benejam</strong> propone conceptos clave que actúan como espacios comunes: identidad-alteridad, racionalidad-irracionalidad, continuidad-cambio, diferenciación, diversidad-desigualdad, conflicto, interrelación y organización.",
    "Rasgos comunes. <strong>1. Carácter científico</strong>: como recuerda el autor que los apuntes llaman «Joan Pratts», lo científico no depende de la exactitud del resultado, sino del camino trazado para obtenerlo. El conocimiento científico es objetivo, universal, provisional y no dogmático; la objetividad absoluta no existe, por obstáculos como los conocimientos previos no científicos o los prejuicios. <strong>2. Objeto específico</strong>: la realidad social, heterogénea, singular y cambiante. Su investigación combina un proceso de verificación (de la teoría a los hechos) y otro de teorización (de los hechos a la teoría).",
    "<strong>3. Relación sujeto-objeto</strong>: quien investiga forma parte de la realidad que estudia; es juez y parte. Eso dificulta la descentración, pero también puede ayudar a comprender. La ideología, entendida como cultura, valores y creencias, media en la relación con lo real, y ni siquiera la elección de método es neutral. Ello no hace falso el conocimiento social, pero obliga a un ejercicio constante de descentración. La unidad de las Ciencias Sociales descansa, precisamente, en su diversidad."
  ],
  conceptos: [
    { t: "Campo epistemológico", d: "Ámbito de la realidad y de los problemas que una ciencia o un conjunto de ciencias estudia." },
    { t: "Método científico", d: "Camino ordenado de observación, hipótesis, contraste y conclusión que confiere carácter científico a un conocimiento." },
    { t: "Provisionalidad", d: "Rasgo del conocimiento científico: sus conclusiones están sujetas a revisión con nuevas evidencias." },
    { t: "Descentración", d: "Esfuerzo por distanciarse de la propia subjetividad, prejuicios y escalas de valores al estudiar un objeto." },
    { t: "Verificación y teorización", d: "Doble proceso de la investigación social: de la teoría a la realidad empírica y de esta de nuevo a la teoría." },
    { t: "Conceptos clave (Benejam)", d: "Identidad-alteridad, racionalidad-irracionalidad, continuidad-cambio, diferenciación, diversidad-desigualdad, conflicto, interrelación y organización." }
  ],
  cita: { texto: "La calificación de científico de un determinado conocimiento no viene dado por la exactitud e inapelabilidad del resultado finalmente conseguido, sino por el camino que se ha trazado para fabricarlo.", fuente: "Atribuida a «Joan Pratts» en los apuntes del tema 1, p. 21 (fuente sin localizar)" },
  matices: [
    { t: "Clasificaciones que envejecen", d: "La clasificación de Seligman procede de la Encyclopaedia of the Social Sciences (1930). Situar la Geografía o la Lingüística fuera de las «puramente sociales» refleja aquel contexto; hoy la Geografía humana se considera plenamente ciencia social, como el propio tema reconoce en su esquema final." },
    { t: "Una cita sin fuente", d: "Los apuntes atribuyen la cita sobre el carácter científico a «Joan Pratts». Probablemente se refieren a Joaquín Prats, pero la frase no aparece en el capítulo de Prats y Santacana (2011) y no se ha localizado su origen. A diferencia de las estaciones 1 a 5, este apartado de los apuntes no procede de ese capítulo." },
    { t: "Objetividad no es neutralidad", d: "Reconocer que la ideología media en el conocimiento social no equivale a relativismo: hay interpretaciones mejor fundadas que otras porque se apoyan en más y mejores pruebas." }
  ],
  aula: [
    "1.er ciclo: un mismo objeto (una papa, un barco) mirado por distintas «ciencias»: ¿dónde se cultiva?, ¿quién la vende?, ¿desde cuándo se come aquí?",
    "2.º ciclo: un problema del barrio (el tráfico, el agua) analizado con preguntas de geografía, historia y economía.",
    "3.er ciclo: detectar en un texto informativo dónde hay datos y dónde valoraciones del autor."
  ],
  docente: {
    duracion: "25 minutos",
    dinamica: "En la escena, girar la constelación; cada grupo elige una disciplina y formula una pregunta sobre un mismo tema (por ejemplo, el turismo en Canarias).",
    preguntas: [
      "¿Por qué las Ciencias Sociales no formulan leyes universales ni predicciones certeras?",
      "¿Qué consecuencias tiene para la enseñanza que el investigador sea «juez y parte»?"
    ]
  },
  refs: ["tema1", "seligman1930", "benejam1997", "prats2011"],
  retos: [
    {
      id: "e6-r1", tipo: "clasificar", titulo: "La clasificación de Seligman",
      consigna: "Sitúa cada disciplina en el grupo que le asigna Seligman, según la presentación del tema.",
      categorias: ["Puramente social", "Semisocial", "Con implicaciones sociales"],
      items: [
        { t: "Economía", c: 0, e: "Ciencia puramente social." },
        { t: "Historia", c: 0, e: "Ciencia puramente social." },
        { t: "Antropología", c: 0, e: "Ciencia puramente social." },
        { t: "Educación", c: 1, e: "Semisocial, junto a Ética, Filosofía y Psicología." },
        { t: "Psicología", c: 1, e: "Semisocial en la clasificación de Seligman." },
        { t: "Geografía", c: 2, e: "Con implicaciones sociales en Seligman (véase el matiz de la estación)." },
        { t: "Lingüística", c: 2, e: "Con implicaciones sociales." }
      ]
    },
    {
      id: "e6-r2", tipo: "test", titulo: "Rasgos comunes",
      preguntas: [
        { q: "¿Cuál de estas NO es una característica del conocimiento científico según el tema?", o: ["Provisionalidad", "Ausencia de dogmatismo", "Exactitud absoluta del resultado"], c: 2, e: "Lo científico es el método, no la inapelabilidad del resultado." },
        { q: "«El investigador es juez y parte» alude a…", o: ["la relación sujeto-objeto", "el carácter provisional", "la clasificación de Seligman"], c: 0, e: "Quien investiga forma parte de la realidad social que estudia." },
        { q: "¿Cuál es un concepto clave de Benejam?", o: ["Identidad-alteridad", "Oferta-demanda", "Latitud-longitud"], c: 0, e: "Los conceptos de Benejam son espacios comunes a todas las Ciencias Sociales." }
      ]
    }
  ]
},

/* ===================================================================== 7 */
{
  id: "e7", num: 7,
  titulo: "La encrucijada",
  sub: "Enfoques y modelos de la didáctica de las Ciencias Sociales",
  lema: "Enseñar Historia: ¿transmitir, interpretar o transformar?",
  idea: "La didáctica de la Historia ofrece herramientas para investigar el pasado, comprender el método histórico y asumir que ante un mismo hecho caben interpretaciones diversas. Cómo se haga depende del enfoque y del modelo didáctico.",
  prediccion: {
    q: "Antes de empezar: en tu experiencia escolar, ¿qué predominaba en las clases de Historia?",
    o: ["Explicación del docente y memorización", "Actividades de indagación con fuentes", "Debates sobre problemas actuales"]
  },
  sintesis: [
    "La <strong>didáctica de las Ciencias Sociales</strong> busca que se pueda estructurar una investigación con métodos y técnicas pertinentes (indagar, buscar y sintetizar información, analizar, concluir, exponer) desde una mirada multidisciplinar. La <strong>didáctica de la Historia</strong> entrega herramientas para investigar el pasado, comprender e implementar el método histórico, asumir que existen interpretaciones diversas y a veces antagónicas, comunicar con claridad y usar fuentes diversas. El tema la apoya en el <strong>constructivismo</strong>: el conocimiento no se recibe hecho, se construye con experiencias y reflexiones propias.",
    "Tres <strong>enfoques</strong> principales. <strong>Científico-tecnológico</strong>: análisis objetivo de problemas del entorno, eficacia y eficiencia, evaluación de proceso y producto centrada en objetivos. <strong>Interpretativo-simbólico</strong>: reconstrucción colaborativa de la realidad cultural, con fuerte componente moral (por ejemplo, los estereotipos), centrado en el proceso y con gran libertad docente. <strong>Sociocrítico</strong>: problematización, dimensión política y democrática, autonomía y transformación social (el tema propone la «geografía del ladrillo» en Canarias). Se añaden el <strong>intercultural</strong> (glocalidad) y el de <strong>complejidad emergente</strong> (ejemplo: el volcán).",
    "Los <strong>modelos didácticos</strong> se agrupan por orientación. <strong>Técnica</strong>: tradicional o transmisivo (centrado en docente y contenidos) y didáctico-tecnológico (participación del alumnado, pero con primacía del contenido). <strong>Práctica</strong>: espontaneísta-activista (intereses y experiencias del alumnado, que observa, investiga y descubre), con variantes como el socrático (diálogo de preguntas y respuestas) y el comunicativo-interactivo. <strong>Crítica</strong>: alternativo, integrador o de investigación en la escuela, centrado en situaciones problemáticas, con variantes como el activo-situado y el aprendizaje para el dominio.",
    "En el lenguaje curricular vigente, estas opciones se concretan en <strong>situaciones de aprendizaje</strong> (Real Decreto 157/2022; Decreto 211/2022 en Canarias): tareas contextualizadas que movilizan saberes para resolver problemas. Por su orientación a problemas, el modelo de investigación en la escuela es el que guarda más afinidad con ese planteamiento."
  ],
  conceptos: [
    { t: "Constructivismo", d: "Teoría del aprendizaje según la cual el conocimiento se construye mediante experiencias y reflexiones propias." },
    { t: "Enfoque científico-tecnológico", d: "Saber consolidado mediante el análisis objetivo de problemas, con énfasis en la eficacia y la evaluación de producto." },
    { t: "Enfoque interpretativo-simbólico", d: "Saber como reconstrucción colaborativa y significativa de la realidad cultural, centrado en el proceso." },
    { t: "Enfoque sociocrítico", d: "Saber basado en la problematización y orientado a la autonomía y la transformación social." },
    { t: "Modelo transmisivo", d: "Modelo de orientación técnica centrado en el docente y en los contenidos que el alumnado asimila." },
    { t: "Investigación en la escuela", d: "Modelo de orientación crítica: el alumnado, guiado por el docente, construye conocimiento a partir de problemas." },
    { t: "Situación de aprendizaje", d: "En el currículo LOMLOE, conjunto de actividades contextualizadas que movilizan competencias para resolver un problema." }
  ],
  cita: { texto: "Educar es dar ocasión de tener experiencias y reflexiones (y aportar un método científico).", fuente: "Presentación del tema 1, diapositiva 26" },
  matices: [
    { t: "Las clasificaciones varían según el autor", d: "Los nombres y agrupaciones de enfoques y modelos cambian de un manual a otro, y la presentación del tema no indica de dónde toma los suyos (no proceden de Prats y Santacana ni de Trepat). Lo importante es reconocer qué papel tienen el docente, el alumnado, el contenido y la evaluación en cada uno." },
    { t: "Ningún modelo es puro", d: "En la práctica se combinan: una explicación transmisiva breve puede preparar una indagación. El riesgo está en que lo transmisivo sea lo único." },
    { t: "La alcarraza de la diapositiva 27", d: "La presentación ilustra el constructivismo con una «alcarraza antropozoomorfa» precolombina: los nombres raros solo se aprenden de verdad cuando se observan, se manipulan y se relacionan con lo conocido." }
  ],
  aula: [
    "1.er ciclo (modelo socrático): preguntas encadenadas ante un objeto antiguo: ¿para qué servía?, ¿quién lo usaba?, ¿cómo lo sabemos?",
    "2.º ciclo (interpretativo-simbólico): analizar estereotipos sobre «los guanches» en dibujos animados o souvenirs.",
    "3.er ciclo (sociocrítico): ¿cómo ha cambiado la costa de mi municipio con la construcción? Fotografías aéreas de distintas décadas y propuesta de mejora."
  ],
  docente: {
    duracion: "30 minutos",
    dinamica: "Cada grupo reescribe una misma actividad (por ejemplo, «Los aborígenes canarios») según tres modelos distintos y compara el papel del alumnado en cada versión.",
    preguntas: [
      "¿Qué modelo predominaba en vuestra escolaridad? ¿Qué efectos tuvo en vuestra relación con la Historia?",
      "¿Es posible un enfoque sociocrítico en el 1.er ciclo de Primaria?"
    ]
  },
  refs: ["tema1", "rd157", "d211", "gomez2014"],
  retos: [
    {
      id: "e7-r1", tipo: "clasificar", titulo: "Tres caminos",
      consigna: "Identifica el enfoque didáctico que describe cada situación.",
      categorias: ["Científico-tecnológico", "Interpretativo-simbólico", "Sociocrítico"],
      items: [
        { t: "Se fijan objetivos medibles y se evalúa si el producto final los alcanza con eficacia.", c: 0, e: "Eficacia, eficiencia y evaluación de producto." },
        { t: "El grupo reconstruye cómo se ha representado a las mujeres en los libros de texto y debate sus estereotipos.", c: 1, e: "Reconstrucción colaborativa de la realidad cultural con componente moral." },
        { t: "El alumnado investiga la especulación urbanística en su costa y presenta propuestas al ayuntamiento.", c: 2, e: "Problematización y acción para transformar la realidad." },
        { t: "Se analiza objetivamente la causa de un problema del entorno y se proponen soluciones verificables.", c: 0, e: "Óptica objetiva y no ideologizada sobre problemas del entorno." },
        { t: "La docente deja amplia libertad para que la actividad se adapte a los significados que construye el grupo.", c: 1, e: "Enfoque centrado en el proceso y con gran libertad docente." }
      ]
    },
    {
      id: "e7-r2", tipo: "clasificar", titulo: "Familias de modelos",
      consigna: "Agrupa cada modelo didáctico según su orientación.",
      categorias: ["Orientación técnica", "Orientación práctica", "Orientación crítica"],
      items: [
        { t: "Tradicional o transmisivo", c: 0, e: "Centrado en el docente y en los contenidos." },
        { t: "Didáctico-tecnológico", c: 0, e: "Metodologías participativas, pero con primacía del contenido." },
        { t: "Espontaneísta-activista", c: 1, e: "Intereses y experiencias del alumnado." },
        { t: "Socrático", c: 1, e: "Variante práctica basada en el diálogo." },
        { t: "Investigación en la escuela", c: 2, e: "Situaciones problemáticas y construcción guiada del conocimiento." },
        { t: "Aprendizaje para el dominio", c: 2, e: "Variante del modelo alternativo o integrador en el tema." }
      ]
    }
  ]
},

/* ===================================================================== 8 */
{
  id: "e8", num: 8,
  titulo: "La mesa del historiador",
  sub: "Procedimientos y estrategias para el aula",
  lema: "¿Cómo se convierte un aula en un pequeño taller de historia?",
  idea: "Los procedimientos son acciones ordenadas en pasos; las estrategias, procedimientos al servicio del aprendizaje. Con ellos el alumnado comenta documentos, elabora trabajos y analiza prensa, imágenes y vídeos como lo haría quien investiga.",
  prediccion: {
    q: "Antes de empezar: ¿qué es lo primero que hay que hacer ante una noticia o una imagen histórica?",
    o: ["Opinar sobre ella", "Situarla: quién, cuándo, dónde y con qué intención se produjo", "Memorizar su contenido"]
  },
  sintesis: [
    "Un <strong>procedimiento</strong> es una acción estructurada en una serie ordenada de pasos. El tema enumera los procedimientos clave de la Historia, en la línea de Hernández Cardona y Trepat (1992): identificar, usar y procesar fuentes primarias y secundarias; aplicar categorías temporales (sucesión, simultaneidad, duración y ritmo; véase el tema 3); usar vocabulario específico; identificar y explicar causas y consecuencias, continuidades y cambios, semejanzas y diferencias; y comunicar resultados. Su objetivo: que el alumnado seleccione conocimiento relevante, lo explique a partir de fuentes y comprenda los hechos desde la perspectiva de la gente del pasado.",
    "Hernández Cardona y Trepat (1992) agrupan los procedimientos propios de la Historia en siete bloques: <strong>categorías y nociones temporales</strong>; <strong>cronología e instrumentos para medir el tiempo</strong>; <strong>representación icónica del tiempo</strong>; <strong>causalidad</strong>; <strong>empatía histórica</strong>; <strong>fuentes, documentos y testimonios</strong>; y <strong>vocabulario histórico</strong>, que proponen tratar como procedimiento y no solo como concepto. Su cuadro los secuencia por edades desde los 6 años. La empatía, advierten, no es fantasear ni simpatizar, sino imaginar a partir de fuentes la situación de personas de otras épocas y aprender a detectar anacronismos.",
    "El repertorio práctico es amplio. <strong>Comentario de documentos</strong>: texto, comparación de textos, gráfica, tabla estadística, esquema, mapa histórico, imagen, caricatura, fotografía, película o libro. <strong>Elaboración de trabajos</strong>: fichero, esquema, dossier de documentos, biografía histórica, investigación de un acontecimiento, análisis de prensa, recensión, exposición oral, debate, mapa histórico o informe.",
    "La <strong>guía de análisis de prensa</strong> sigue seis pasos: 1) ubicar el artículo (medio, fecha, sección, referencia digital); 2) leerlo (disposición externa, elementos gráficos, recuperación de información); 3) interpretar y comprender (género, propósito del autor, inferencias, relación texto-imagen); 4) relacionarlo con otras realidades desde la disciplina y desde otras áreas; 5) valorarlo críticamente en forma y contenido, y verificar datos y fuentes; 6) ir más allá: investigar y crear (textos, mapas, viñetas, cómics, murales, situaciones de empatía). Hay guías análogas para la imagen (fotografía oficial, periodística o de aficionado; carteles; caricaturas) y para el vídeo o el anuncio.",
    "Una <strong>estrategia didáctica</strong> es un procedimiento para enseñar y aprender: el docente la formula en una actividad; el alumnado la usa para resolver un problema. El tema distingue cinco tipos de complejidad creciente: <strong>memorísticas</strong> (repasar, destacar, copiar), <strong>de repaso</strong> o elaboración, <strong>de organización</strong> (mapas conceptuales, diagramas), <strong>de recuperación</strong> (búsqueda de información, seguimiento de pistas) y <strong>de construcción</strong>. Ninguna funciona siempre: hay que ajustarla al logro buscado y al grupo, evaluar con el alumnado y reflexionar sobre los resultados."
  ],
  conceptos: [
    { t: "Procedimiento", d: "Acción que se estructura en una serie ordenada de pasos." },
    { t: "Fuente primaria", d: "Fuente producida en la época estudiada (documento, objeto, imagen, testimonio)." },
    { t: "Fuente secundaria", d: "Elaboración posterior a partir de fuentes primarias (manuales, monografías, divulgación)." },
    { t: "Comentario de documentos", d: "Conjunto de procedimientos para situar, analizar, interpretar y valorar una fuente." },
    { t: "Estrategia didáctica", d: "Procedimiento empleado para la enseñanza-aprendizaje, con base conceptual y finalidad práctica." },
    { t: "Estrategia de construcción", d: "Estrategia de mayor complejidad: el aprendizaje se logra elaborando un producto o conocimiento nuevo." }
  ],
  cita: { texto: "El tiempo de la humanidad separada termina y se adquiere por primera vez la visión global del planeta.", fuente: "Arturo Uslar Pietri, La creación del Nuevo Mundo (1991, p. 23), texto de práctica de la presentación del tema" },
  matices: [
    { t: "Procedimientos y pensamiento histórico", d: "Los siete bloques de Hernández Cardona y Trepat (1992) anticipan lo que hoy se llama pensamiento histórico: fuentes como pruebas, causas y consecuencias, cambio y continuidad, perspectiva histórica o empatía (Seixas y Morton, 2013; Santisteban, 2010)." },
    { t: "Una tabla de 1992", d: "El cuadro de procedimientos se elaboró para el currículo de la LOGSE, con ciclos y edades de entonces. Sirve como secuencia orientativa; el marco vigente es el Decreto 211/2022." },
    { t: "La prensa ya no es solo papel", d: "El paso 1 de la guía (ubicar el artículo) es hoy el más importante en el entorno digital: muchas piezas circulan sin medio, fecha ni autoría. Conviene combinar la guía con la lectura lateral de la estación 3." },
    { t: "Memorizar no es el enemigo", d: "Las estrategias memorísticas son las más básicas, no las inútiles. Lo problemático es quedarse en ellas." }
  ],
  aula: [
    "1.er ciclo: comentario guiado de una fotografía antigua del colegio con tres preguntas: ¿qué veo?, ¿qué pienso?, ¿qué me pregunto? Para Hernández Cardona y Trepat (1992), a los 6-8 años se trata de observar objetos antiguos, escuchar a personas mayores y ordenar imágenes de principio a fin y de fin a principio.",
    "2.º ciclo: dossier de documentos sobre la historia del puerto o del mercado municipal. A los 8-10 años, el cuadro propone ordenar imágenes por antigüedad, asumir los conceptos de generación y siglo y empezar a usar a. C. y d. C.",
    "3.er ciclo: análisis completo de una noticia digital de contenido histórico con los seis pasos de la guía. A los 10-12 años, el cuadro propone distinguir duraciones (corta, media, larga), usar números romanos para los siglos, interpretar planos de la evolución de una ciudad y hacer reconstrucciones imaginarias «que no sean anacrónicas»."
  ],
  docente: {
    duracion: "35-40 minutos",
    dinamica: "Taller por rincones: cada grupo aplica una guía (prensa, imagen, vídeo) a un documento distinto y presenta su análisis en dos minutos.",
    preguntas: [
      "¿Qué procedimiento del tema os parece más difícil de enseñar en Primaria? ¿Por qué?",
      "¿Cómo adaptaríais la guía de prensa a un grupo de 3.º de Primaria?"
    ]
  },
  refs: ["tema1", "hernandez1992", "trepat2006", "seixas2013", "santisteban2010"],
  retos: [
    {
      id: "e8-r1", tipo: "ordenar", titulo: "La guía de prensa",
      consigna: "Ordena los seis pasos de la guía de análisis de un artículo de prensa.",
      items: [
        { t: "Ubicar el artículo", e: "Medio, fecha, sección y referencia digital." },
        { t: "Leer el artículo", e: "Disposición externa, elementos gráficos y recuperación de la información." },
        { t: "Interpretar y comprender la información", e: "Género periodístico, propósito del autor, inferencias, relación entre texto e imagen." },
        { t: "Relacionar el artículo con otros elementos o realidades", e: "Desde la propia disciplina y desde otras áreas." },
        { t: "Valorar el artículo", e: "Reflexión crítica sobre forma y contenido; verificación de datos y fuentes; opinión argumentada." },
        { t: "Ir más allá del artículo", e: "Investigar y crear: textos, mapas, viñetas, cómics, murales." }
      ],
      explicacion: "La secuencia va de situar a comprender, relacionar, valorar y crear: el mismo itinerario que sigue el pensamiento histórico."
    },
    {
      id: "e8-r2", tipo: "clasificar", titulo: "Cinco estrategias",
      consigna: "Identifica el tipo de estrategia al que corresponde cada técnica.",
      categorias: ["Memorística", "Repaso", "Organización", "Recuperación", "Construcción"],
      items: [
        { t: "Copiar y subrayar la lista de los reyes de una dinastía.", c: 0, e: "Retención por repetición, sin elaboración." },
        { t: "Repasar una lectura reformulándola con palabras propias.", c: 1, e: "Repaso con una elaboración básica de la información." },
        { t: "Elaborar un mapa conceptual de las funciones de la historia.", c: 2, e: "Clasificación y jerarquización de la información." },
        { t: "Seguir pistas en el archivo para averiguar quién vivió en una casa.", c: 3, e: "Búsqueda de información y seguimiento de pistas." },
        { t: "Diseñar y montar una pequeña exposición sobre la historia del barrio.", c: 4, e: "El aprendizaje se logra construyendo un producto nuevo." }
      ]
    },
    {
      id: "e8-r3", tipo: "clasificar", titulo: "Los siete bloques de procedimientos",
      consigna: "Cada actividad procede del cuadro de Hernández Cardona y Trepat (1992). Indica a qué bloque pertenece.",
      categorias: ["Categorías temporales", "Cronología y medida", "Representación icónica", "Causalidad", "Empatía histórica", "Fuentes y testimonios", "Vocabulario histórico"],
      items: [
        { t: "Detectar elementos del pasado en el presente de la vida cotidiana (lengua, expresiones, costumbres).", c: 0, e: "Continuidad y cambio: una categoría temporal (10-12 años)." },
        { t: "Utilizar los números romanos para designar los siglos.", c: 1, e: "Código de medida del tiempo histórico (10-12 años)." },
        { t: "Confeccionar árboles genealógicos sencillos.", c: 2, e: "Representación gráfica del tiempo (6-8 años)." },
        { t: "Distinguir entre causas inmediatas y causas lejanas de un hecho.", c: 3, e: "Relaciones de causa-efecto (10-12 años)." },
        { t: "Comprender, sin necesidad de justificarlo, el punto de vista de un personaje histórico.", c: 4, e: "Empatía: comprender no es simpatizar." },
        { t: "Escuchar a personas mayores contar cómo se vivía en otros tiempos.", c: 5, e: "Testimonio oral: fuente primaria (6-8 años)." },
        { t: "Conocer palabras como caballero, castillo o estandarte en cuentos y narraciones.", c: 6, e: "Vocabulario histórico, que los autores tratan como procedimiento (6-8 años)." }
      ]
    }
  ]
}
];
