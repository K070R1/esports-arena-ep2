
export const torneos = [
  {
    id: 1,
    nombre: "Valorant Masters",
    juego: "Valorant",
    modalidad: "5 vs 5",
    cupos: 16,
    estado: "ABIERTO"
  },
  {
    id: 2,
    nombre: "League Championship",
    juego: "League of Legends",
    modalidad: "5 vs 5",
    cupos: 8,
    estado: "EN CURSO"
  },
  {
    id: 3,
    nombre: "Rocket League Cup",
    juego: "Rocket League",
    modalidad: "3 vs 3",
    cupos: 12,
    estado: "FINALIZADO"
  }
];

export const equipos = [
  {
    id: 1,
    nombre: "Team Phoenix",
    juego: "Valorant",
    capitan: "Shadow",
    estado: "ACTIVO"
  },
  {
    id: 2,
    nombre: "Dragons Gaming",
    juego: "League of Legends",
    capitan: "Drako",
    estado: "ACTIVO"
  },
  {
    id: 3,
    nombre: "Rocket Kings",
    juego: "Rocket League",
    capitan: "Turbo",
    estado: "INACTIVO"
  }
];

export const partidas = [
  {
    id: 1,
    torneo: "Valorant Masters",
    equipoLocal: "Team Phoenix",
    equipoVisitante: "Night Wolves",
    fecha: "10/09/2026",
    estado: "PROGRAMADA"
  },
  {
    id: 2,
    torneo: "League Championship",
    equipoLocal: "Dragons Gaming",
    equipoVisitante: "Titan Esports",
    fecha: "12/09/2026",
    estado: "EN CURSO"
  },
  {
    id: 3,
    torneo: "Rocket League Cup",
    equipoLocal: "Rocket Kings",
    equipoVisitante: "Speed Demons",
    fecha: "01/09/2026",
    estado: "FINALIZADA"
  }
];

export const ranking = [
  {
    posicion: 1,
    equipo: "Team Phoenix",
    puntos: 15,
    victorias: 5,
    derrotas: 1
  },
  {
    posicion: 2,
    equipo: "Dragons Gaming",
    puntos: 12,
    victorias: 4,
    derrotas: 2
  },
  {
    posicion: 3,
    equipo: "Rocket Kings",
    puntos: 9,
    victorias: 3,
    derrotas: 3
  }
];
