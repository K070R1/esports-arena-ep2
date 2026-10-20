import { equipos, partidas, ranking } from '../data/datos.js';

describe('Pruebas de Luciano - Equipos, Partidas y Ranking', () => {

  it('Debe identificar correctamente los equipos activos', () => {
    const equiposActivos = equipos.filter(
      (equipo) => equipo.estado === 'ACTIVO'
    );

    expect(equiposActivos.length).toBe(2);
    expect(equiposActivos[0].nombre).toBe('Team Phoenix');
    expect(equiposActivos[1].nombre).toBe('Dragons Gaming');
  });

  it('Debe identificar las partidas programadas', () => {
    const partidasProgramadas = partidas.filter(
      (partida) => partida.estado === 'PROGRAMADA'
    );

    expect(partidasProgramadas.length).toBe(1);
    expect(partidasProgramadas[0].torneo).toBe('Valorant Masters');
  });

  it('Debe identificar al equipo que ocupa el primer lugar del ranking', () => {
    const primerLugar = ranking.find(
      (equipo) => equipo.posicion === 1
    );

    expect(primerLugar).toBeDefined();
    expect(primerLugar.equipo).toBe('Team Phoenix');
    expect(primerLugar.puntos).toBe(15);
  });

});


describe('Pruebas con espias de Jasmine', () => {

  it('Debe simular una funcion que registra un equipo', () => {
    const registrarEquipo = jasmine.createSpy('registrarEquipo');

    registrarEquipo('Team Phoenix');

    expect(registrarEquipo).toHaveBeenCalled();
    expect(registrarEquipo).toHaveBeenCalledWith('Team Phoenix');
  });

  it('Debe comprobar que se consulta el ranking', () => {
    const servicioRanking = {
      obtenerPrimerLugar() {
        return 'Team Phoenix';
      }
    };

    spyOn(servicioRanking, 'obtenerPrimerLugar')
      .and.returnValue('Team Phoenix');

    const resultado = servicioRanking.obtenerPrimerLugar();

    expect(servicioRanking.obtenerPrimerLugar).toHaveBeenCalledTimes(1);
    expect(resultado).toBe('Team Phoenix');
  });

});

