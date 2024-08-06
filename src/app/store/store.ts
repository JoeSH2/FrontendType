import { configureStore } from '@reduxjs/toolkit'
import { textComparisonReducer } from '../../features/TextComparison'
import { combineReducers } from '@reduxjs/toolkit'
import { GeneratorTaskReducer } from '../../entities/GeneratorTask'
import { CalculateWPMReducer } from '../../features/CalculateWPM/model/slice/calculateWPMSlice'

const rootReducer = combineReducers({
  textComparison: textComparisonReducer,
  generatorTask: GeneratorTaskReducer,
  calculateWPM: CalculateWPMReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
