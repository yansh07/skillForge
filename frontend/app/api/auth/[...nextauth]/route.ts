import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "SkillForge Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // FastAPI Backend se baat kar rahe hain
        const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();

        if (res.ok && data.access_token) {
          // Jo object yahan return hoga, wo JWT callback mein jayega
          return { ...data.user, accessToken: data.access_token };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Backend ka access_token session ke andar inject karo
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      // Ab client side par use(session) karke token access kar sakte ho
      (session as any).accessToken = token.accessToken;
      (session as any).user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login", // my custom sexy login page
  },
});

export { handler as GET, handler as POST };