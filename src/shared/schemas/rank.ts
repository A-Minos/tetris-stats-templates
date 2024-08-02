import { z } from 'zod'

const ValidRank = z.union([
	z.literal('x'),
	z.literal('u'),
	z.literal('ss'),
	z.literal('s+'),
	z.literal('s'),
	z.literal('s-'),
	z.literal('a+'),
	z.literal('a'),
	z.literal('a-'),
	z.literal('b+'),
	z.literal('b'),
	z.literal('b-'),
	z.literal('c+'),
	z.literal('c'),
	z.literal('c-'),
	z.literal('d+'),
	z.literal('d')
])

const Rank = z.union([ValidRank, z.literal('z')])

type ValidRank = z.infer<typeof ValidRank>;
type Rank = z.infer<typeof Rank>;

export default Rank
export { Rank, ValidRank }
