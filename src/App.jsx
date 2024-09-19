import useRoutersElement from "./routes/useRoutersElement"

function App() {
  const router = useRoutersElement()
  return (
    <>
      <div className='App'>
        {
          router
        }
      </div>
    </>
  )
}

export default App
