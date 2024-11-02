import { configureStore } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    //API Reducer
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    //Non-API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch