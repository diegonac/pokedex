const statsInSpanish = {
    'hp': 'Vida',
    'attack': 'Ataque',
    'defense': 'Defensa',
    'special-attack': 'Ataque especial',
    'special-defense': 'Defensa especial',
    'speed': 'Velocidad',
};

export function getStatsInSpanish(stat) {
    return statsInSpanish[stat]
}