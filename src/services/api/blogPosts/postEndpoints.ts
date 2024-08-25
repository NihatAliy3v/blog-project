export const postEndpoints = (builder: any) => ({
  postDataGetAll: builder.query({
    query: () => ({
      url: "/BlogPosts",
    }),
  }),
  postDataGetById: builder.query({
    query: (id: number) => ({
      url: `/BlogPosts/${id}`,
    }),
  }),
});

