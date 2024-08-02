import User from "@/schemas/user";
import { z } from "zod";
import Statistic from "./statistic";
import Type from "./type";

const Data = z.object({
	type: z.nativeEnum(Type).nullable(),

	user: User.extend({ id: z.string() }).omit({ avatar: true }),
	time: z.string(),
	replay_id: z.string(),
	rank: z.number().nullable(),
	personal_rank: z.number().nullable(),

	statistic: Statistic,

	play_at: z.coerce.date(),
});

export default Data;
