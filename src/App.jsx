
import './App.css'
import TabList from './TabList'

function App() {
  function  randomFunc(){
    return <h1>This is tab 3!!!!!!!!!!!!!</h1>
  }
  const tabs=[
    {
      label:"Tab 1",
      content:<div>Helloo This is tab 1</div>
    },
    {
      label:"Tab 2",
      content:<div>Helloo This is tab 2 !!!!!</div>
    },
    {
      label:"Tab 3",
      content: randomFunc()
    }
  ]

  return (
   <div className='w-full flex justify-center mt-5'>
      <TabList tabs={tabs}/>
   </div>
  )
}

export default App
