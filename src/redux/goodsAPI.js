import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const goodsAPI = createApi({
  reducerPath: 'goodsApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3002/'}),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (limit = '') => `goods?${ limit && `_limit=${limit}`}`,
    })
  })
})

export const { useGetGoodsQuery } = goodsAPI;