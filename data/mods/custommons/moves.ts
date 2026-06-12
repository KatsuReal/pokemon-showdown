export const Moves: import('../sim/dex-moves').MoveDataTable = {
    foxianprayer: {
		num: 1000,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Foxian Prayer",
		pp: 15,
		priority: 2,
		flags: { metronome: 1 },
		boosts: {
			spa: 2,
			spe: 2,
		},
		target: "adjacentAlly",
		type: "Fire",
	},
}