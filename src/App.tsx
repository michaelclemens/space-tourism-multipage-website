import Header from './components/Header'
import { navigation } from './lib/navigation'
import { Route, Routes, Outlet } from 'react-router'

function Layout() {
  return (
    <>
      <Header />
      <main className="flex w-full flex-grow">
        <Outlet />
      </main>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {navigation.map(nav => (
          <Route key={nav.name} {...nav} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
