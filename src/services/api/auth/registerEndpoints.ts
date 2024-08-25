export const registerEndpoints = (builder:any) => ({
  register: builder.mutation({
    query: (userData:any) => ({
      url: "/Auth/register",
      method: "POST",
      data: userData,
    }),
  }),
});
