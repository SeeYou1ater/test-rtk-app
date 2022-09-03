import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const goodsAPI = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3004/'}),
  endpoints: (build) => ({
    getGoods: build.query({
      query: () => 'goods',
    })
  })
})

export const { useGetGoodsQuery } = goodsAPI;