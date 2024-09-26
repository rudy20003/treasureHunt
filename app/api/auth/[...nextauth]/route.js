import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { url } from "../../../../constants";
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
        type: { label: "type", type: "select", options: ["login", "register"] },
      },
      async authorize(credentials, req) {
        // If no error and we have user data, return it
        const { username, password, type } = credentials;
        const user = await fetch(url + `/api/db/getUsers/${username?.trim()}`)
          .then((res) => {
            return res.json();
          })
          .catch((e) => {
            console.log(e, "error in authorize");
          });
        if (type === "register") {
          if (user) {
            console.log("-- register failed --");
            throw new Error("user already exists");
          }
          const newUser = await fetch(url + `/api/db/createUser`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
          })
            .then((res) => {
              alert("User registered successfully 👍! Please login");
            })
            .catch((e) => {
              console.log(e, "error in authorize");
            });
          return;
        }
        console.log(user, "user");
        if (user && user.password === password) {
          console.log("-- login successful --");
          return { username: user.username, id: user.id };
        }
        console.log("-- login failed --");
        // Return null if user data could not be retrieved
        throw new Error("user not found");
      },
    }),
  ],
  callbacks: {
    // async signIn(user, account, profile) {
    //   console.log("sign in", user, account, profile);
    //   return true;
    // },
    // async redirect(url, baseUrl) {
    //   console.log("redirect", url, baseUrl);
    //   return baseUrl;
    // },
    session: async ({ session, user, token }) => {
      const newSession = {
        ...session,
        user: {
          // ...session.user,
          ...token?.token?.user,
        },
      };
      // console.log("session", session, newSession);
      return newSession;
    },
    async jwt(token, user, account, profile, isNewUser) {
      // console.log("jwt", token, user, account, profile, isNewUser);
      return { ...token, ...user };
    },
  },
  pages: {
    signIn: "/",
    error: "/auth",
    signOut: "/auth",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
