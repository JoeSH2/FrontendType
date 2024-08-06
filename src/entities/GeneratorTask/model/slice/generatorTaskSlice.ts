import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface GeneratorTaskState {
  numberTask: number
}

const initialState: GeneratorTaskState = {
  numberTask: 0,
}

export const GeneratorTaskSlice = createSlice({
  name: 'generatorTask',
  initialState,
  reducers: {
    generationNumber: (state, action: PayloadAction<number>) => {
      state.numberTask = Math.floor(Math.random() * action.payload) // передать length массива с задачами
    },
  },
})

export const { actions: GeneratorTaskActions } = GeneratorTaskSlice
export const { reducer: GeneratorTaskReducer } = GeneratorTaskSlice
