import React, { useEffect, useState } from 'react'
import { Header } from '../../widgets/Header'
import { Footer } from '../../widgets/Footer'
import { Webrapper } from '../../shared/ui/Webrapper/Webrapper'
import { GeneratorTask } from '../../entities/GeneratorTask'
import { TextComparison } from '../../features/TextComparison'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import jsonTasks from '../../tasks.json'
import { ListWPM } from '../../entities/CardWPM'
import { CalculateWPM } from '../../features/CalculateWPM'

function App() {
  const dataTasks: string[] = jsonTasks

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Webrapper>
          <GeneratorTask numberOfTasks={dataTasks.length} />
          <TextComparison arrTasks={dataTasks} />
          <CalculateWPM />
        </Webrapper>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
