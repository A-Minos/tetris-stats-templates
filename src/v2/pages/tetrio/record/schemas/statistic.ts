import { z } from "zod";

const Statistic = z.object({
	keys: z.number(),
	kpp: z.number(),
	kps: z.number(),

	max: z.object({
		combo: z.number(),
		btb: z.number(),
	}),

	pieces: z.number(),
	pps: z.number(),
	lines: z.number(),
	lpm: z.number(),
	holds: z.number().nullable(),
	score: z.number(),

	single: z.number(),
	double: z.number(),
	triple: z.number(),
	quad: z.number(),

	tspins: z.object({
		total: z.number(),
		single: z.number(),
		double: z.number(),
		triple: z.number(),

		mini: z.object({
			total: z.number(),
			single: z.number(),
			double: z.number(),
		}),
	}),
	all_clear: z.number(),

	finesse: z.object({
		faults: z.number(),
		accuracy: z.number(),
	}),
});

export default Statistic;
