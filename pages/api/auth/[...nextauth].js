import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    {
      id: "raycast",
      name: "Raycast",
      type: "oauth",
      authorization: {
        params: { scope: "read write" },
        url: "https://www.raycast.com/oauth/authorize",
      },
      checks: ["pkce", "state"],
      token: "https://www.raycast.com/oauth/token",
      userinfo: "https://www.raycast.com/api/v1/me",
      clientId: "_u3A4kwF7bsiJrK3KKkVkYqX_R101Rinoi4aq_mjwyo",
      clientSecret: "IwFpTXJSPFTtC0abtxxh-ew6PE_wko5Zuf8tpvNuRX8",
      profile(profile) {
        return {
          id: profile.handle,
          name: profile.name,
          handle: profile.handle,
          bio: profile.bio,
          avatar: profile.avatar,
        };
      },
    },
  ],
});
