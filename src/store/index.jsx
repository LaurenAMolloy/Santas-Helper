//configure store
import { configureStore } from "@reduxjs/toolkit";
import { giftsApi } from "./api/giftsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    //Add reducers
    reducer: {
        [giftsApi.reducerPath]: giftsApi.reducer
    },

    //add middleware
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(giftsApi.middleware)
    }
});

//automatic refreshes
setupListeners(store.dispatch)

export { useFetchGiftsQuery, useAddGiftMutation, useRemoveGiftMutation } from './api/giftsApi';

