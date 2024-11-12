import Navbar from "./components/ui/navbar/navbar"
import Panel from "./components/ui/panel/panel"

function App() {
  return (
    <>
      <Navbar />

      <div className="container py-5">
        <Panel className="mb-1">
          <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste dolore neque dicta quaerat ab earum reprehenderit perspiciatis libero sunt aliquam dignissimos debitis, error aspernatur natus facere! Voluptatibus, similique ea?</p>
        </Panel>

        <Panel mode="danger">
          <p className="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, iste dolore neque dicta quaerat ab earum reprehenderit perspiciatis libero sunt aliquam dignissimos debitis, error aspernatur natus facere! Voluptatibus, similique ea?</p>
        </Panel>
      </div>

    </>
  )
}

export default App
