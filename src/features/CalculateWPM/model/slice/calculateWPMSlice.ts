import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type InfoWPM = {
  WPM: number
  date: string
  time: string
  errors: number
}

interface CalculateWPMState {
  Wpm: number
  startTime: number
  finishTime: number
  errors: number
  infoTask: InfoWPM
}

const initialState: CalculateWPMState = {
  Wpm: 0,
  startTime: 0,
  finishTime: 0,
  errors: 0,
  infoTask: {
    WPM: 0,
    date: '',
    time: '',
    errors: 0,
  },
}

export const CalculateWPMSlice = createSlice({
  name: 'calculateWPM',
  initialState,
  reducers: {
    getStartTime: (state, action: PayloadAction<number>) => {
      state.startTime = action.payload
    },
    getFinishTime: (state, action: PayloadAction<number>) => {
      state.finishTime = action.payload
    },
    getErrors: (state, action: PayloadAction<number>) => {
      state.errors = action.payload
    },
    calculateWPM: (state, action: PayloadAction<number>) => {
      if (state.startTime !== 0 && state.finishTime !== 0) {
        const getTime = state.startTime - state.finishTime
        if (getTime) {
          state.Wpm = Math.abs((action.payload * 60) / getTime)
        }
      }
    },
    initialTaskInfo: (state, action: PayloadAction<InfoWPM>) => {
      state.infoTask = action.payload
    },
  },
})

export const { actions: CalculateWPMActions } = CalculateWPMSlice
export const { reducer: CalculateWPMReducer } = CalculateWPMSlice
