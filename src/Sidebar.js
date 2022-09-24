import React, {useContext} from 'react'
import { GlobalContext } from './context/GlobalState'

const Sidebar = () => {
  const {cardNumber, cardName, cardMonth, cardYear, cardCvc} = useContext(GlobalContext);

  return (
    <aside className='sidebar'> 
    <div className="card-front">
        <div className="circle-big"></div>
        <div className="circle-small"></div>
        <p className="card-number">{cardNumber[0] || '1234 5678 4321 0000'}</p>
        <div className="card-bottom">
          <p className="card-owner">{cardName[0] || 'JANE APPLESEED'}</p>
          <p className="card-date">{cardMonth[0] || '00'}/{cardYear[0] || '00'}</p>
        </div>
    </div>
    <div className="card-back">
        <p className="cvc">{cardCvc[0] || '000'}</p>
    </div>
    </aside>
  )
}

export default Sidebar
