
import React, {useState, useRef} from 'react'
export const GlobalContext = React.createContext(null)

export default ({ children }) => {
    // Use states
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardMonth, setCardMonth] = useState('')
    const [cardYear, setCardYear] = useState('')
    const [cardCvc, setCardCvc] = useState('')

    // References
    const nameContainer = useRef(null);
    const numberContainer = useRef(null);
    const monthContainer = useRef(null);
    const yearContainer = useRef(null);
    const cvcContainer = useRef(null);
    const buttonContainer = useRef(null);

  const store = {
    cardName: [cardName, setCardName],
    cardNumber: [cardNumber, setCardNumber],
    cardMonth: [cardMonth, setCardMonth],
    cardYear: [cardYear, setCardYear],
    cardCvc: [cardCvc, setCardCvc],
    nameContainer,
    numberContainer,
    monthContainer,
    yearContainer,
    cvcContainer,
    buttonContainer

  }

  return <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
}