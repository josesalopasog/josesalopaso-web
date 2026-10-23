import Layout from '../../components/Layout'

import { AppProvider } from '../../context/AppProvider'

function App() {
  return (
    <AppProvider>
      <Layout />
    </AppProvider>
  )
}

export default App
