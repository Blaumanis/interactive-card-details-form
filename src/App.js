import React, {useState} from 'react'
import GlobalState from './context/GlobalState';
import Sidebar from './Sidebar'
import Form from './Form';
import SuccessMsg from './SuccessMsg'


function App() {
  const [isSuccess, setIsSuccess] = useState(false);


  return (
    <GlobalState>
      <main className="main">
        <Sidebar />
        {isSuccess ? <SuccessMsg setIsSuccess={setIsSuccess}/> : <Form setIsSuccess={setIsSuccess}/> }
      </main>
    </GlobalState>

  );
}

export default App;
