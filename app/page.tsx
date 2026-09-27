import Sidebar from '../components/sidebar'
export default function Page() {
  return <>
  <div className='layout-container'>
    <div className='sidebar'>
      <Sidebar />
    </div>
    <div className='mainbox'>
      <h1>
        Hello Utkarsh !!
      </h1>
      <p>
        We are gonna vibe so good.
      </p>
      <p>
        Today's MOOD:
        Existential Crisis
      </p>
    </div>
  </div>
  </> 
}