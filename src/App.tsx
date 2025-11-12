import { AppEcommerce } from './AppEcommerce';
import { StoreProvider } from './context/StoreProvider';


function App() {

  return (
    <StoreProvider>
      <AppEcommerce />
    </StoreProvider>
  )
}

export default App
