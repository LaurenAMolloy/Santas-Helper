import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//Endpoints
//FetchAllGifts
//create
//delete
//surpriseGift - faker.js

const giftsApi = createApi({
    reducerPath: 'gifts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
    }),
    endpoints(builder) {
        return {
            //query endpoint
            //queries run immediately
            fetchGifts: builder.query({
                providesTags: (result, error, gift) => {
                    const tags = result.map((gift) => {
                        return { type: "Gift", id: gift.id };
                    });
                    return tags;
                },
                query: () => {
                    return {
                       url: '/gifts',
                       method: 'GET'
                    }; 
                },
            }),
            //mutation endpoint
            //mutations give us function to run
            addGift: builder.mutation({
            query: (gift) => {
                return {
                    url: '/gifts',
                    method: 'POST',
                    body: {
                        name: gift.name,
                        price: gift.price,
                        purchased: gift.purchased
                    }
                }  
            }
            }),
            //remove gift mutation
            removeGift: builder.mutation({
                invalidatesTags: (results, error, gift) => {
                    console.log(gift)
                    return [{ type: 'Gift', id: gift.id }];
                },
                query: (gift) => {
                    return {
                        url: `/gifts/${gift.id}`,
                        method: "DELETE",
                    }
                }
            })    
        }
    },
});

//export hooks from api
export const { useFetchGiftsQuery, useAddGiftMutation, useRemoveGiftMutation } = giftsApi;
export { giftsApi }