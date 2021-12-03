import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
		}),
		// ...add more providers here
	],
	adapter: Adapters.Prisma.Adapter({ prisma }),
	session: {
		jwt: true,
	},
	secret: process.env.SECRET,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
});
