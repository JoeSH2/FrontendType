import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TextComparisonState {
  wordTask: number
  textTask: string
  value: string
}

const initialState: TextComparisonState = {
  wordTask: 0,
  textTask: '',
  value: '',
}

export const textComparisonSlice = createSlice({
  name: 'textComparison',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    initialTask: (state, action: PayloadAction<string>) => {
      state.textTask = action.payload // передать JSON массив с указанием индекса
    },
    getWordTask: (state, action: PayloadAction<number>) => {
      state.wordTask = action.payload
    },
  },
})

export const { actions: textComparisonActions } = textComparisonSlice
export const { reducer: textComparisonReducer } = textComparisonSlice
