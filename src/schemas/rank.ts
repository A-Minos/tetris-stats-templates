import { z } from "zod";

const Rank = z.union([
	z.literal("x"),
	z.literal("u"),
	z.literal("ss"),
	z.literal("s+"),
	z.literal("s"),
	z.literal("s-"),
	z.literal("a+"),
	z.literal("a"),
	z.literal("a-"),
	z.literal("b+"),
	z.literal("b"),
	z.literal("b-"),
	z.literal("c+"),
	z.literal("c"),
	z.literal("c-"),
	z.literal("d+"),
	z.literal("d"),
	z.literal("z"),
]);

export default Rank;
