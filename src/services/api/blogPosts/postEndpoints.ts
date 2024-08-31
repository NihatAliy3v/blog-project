export const postEndpoints = (builder: any) => ({
  postDataGetAll: builder.query({
    query: () => ({
      url: "/BlogPosts",
    }),
    transformResponse: (response, meta) => {
      const paginationHeader = meta?.headers?.['blog-pagination'];
      let paginationData = null;
      if (paginationHeader) {
        paginationData = JSON.parse(paginationHeader);
      }
      console.log("started",meta?.headers);
      return { data: response, pagination: paginationData };
    },
  }),
  postDataGetById: builder.query({
    query: (id: number) => ({
      url: `/BlogPosts/${id}`,
    }),
  }),
  postDataCreate: builder.mutation({
    query: (data) => ({
      url: `/BlogPosts`,
      method: "POST",
      data: data,
    }),
  }),
});
