import React, {useContext, useState, useRef} from 'react'
import { GlobalContext } from './context/GlobalState'


import Error from './Error';

const Form = ({setIsSuccess}) => {
    const {cardNumber, cardName, cardMonth, cardYear, cardCvc,
       nameContainer, numberContainer, monthContainer, yearContainer, cvcContainer, buttonContainer} = useContext(GlobalContext);

    const [errorMsg, setErrorMsg] = useState(`Can't be blank!`);

    const [isNameError, setIsNameError] = useState(false);
    const [isNumberError, setIsNumberError] = useState(false);
    const [isMonthError, setIsMonthError] = useState(false);
    const [isYearError, setIsYearError] = useState(false);
    const [isMonthRangeError, setIsMonthRangeError] = useState(false);
    const [isYearRangeError, setIsYearRangeError] = useState(false);
    const [isCvcError, setIsCvcError] = useState(false);
  
  
  function handleName(e) {
    if(e) {
      setIsNameError(false)
      nameContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsNameError(true)
      nameContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    cardName[1](e)
  }
  
  function handleNumber(e) {
    if(e) {
      setIsNumberError(false)
      numberContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsNumberError(true)
      numberContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    cardNumber[1](e.replace(/[^\dA-Z]/gi, '')
    .toUpperCase()
    .replace(/(.{4})/g, '$1 ')
    .trim())
  }
  
  function handleMonth(e) {
    if(e) {
      setIsMonthError(false)
      monthContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsMonthError(true)
      monthContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }

    if(e > 12){
      setIsMonthRangeError(true)
      monthContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    } else {
      setIsMonthRangeError(false)
      monthContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
  }
  
    e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    cardMonth[1](e)
  }
  
  function handleYear(e) {
    if(e) {
      setIsYearError(false)
      yearContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsYearError(true)
      yearContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
  
    if(e > 50 || e < 22){
      setIsYearRangeError(true)
      yearContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    } else {
      setIsYearRangeError(false)
      yearContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
  }
  
    e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    cardYear[1](e)
  }
  
  function handleCvc(e) {
    if(e) {
      setIsCvcError(false)
      cvcContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsCvcError(true)
      cvcContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

  cardCvc[1](e)
  }

    function RenderDateError() {
    const {monthContainer, yearContainer} = useContext(GlobalContext);
    if(isMonthError) {
      monthContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
      return <Error errorMsg={errorMsg} />
    }
    else if(isMonthRangeError) {
      monthContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
      return <Error errorMsg={`months between 01 and 12, years between 2022 and 2050`} />
    }
    else if(isYearError) {
      yearContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
      return <Error errorMsg={errorMsg} />
    }
    else if(isYearRangeError) {
      yearContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
      return <Error errorMsg={`months between 01 and 12, years between 2022 and 2050`} />
    }
    return ''
  }  
  
   // Form submit
   const handleSubmit = (e) => {
    e.preventDefault();
    if(cardName[0] && cardNumber[0] && cardMonth[0] && cardYear[0] && cardCvc[0] && !isMonthRangeError && !isYearRangeError) {
        cardName[1]('')
        cardNumber[1]('')
        cardMonth[1]('')  
        cardYear[1]('')
        cardCvc[1]('')

        setIsNameError(false)
        setIsNumberError(false)
        setIsMonthError(false)
        setIsYearError(false)
        setIsCvcError(false)
        setIsSuccess(true);

        nameContainer.current.classList.remove('error')
        numberContainer.current.classList.remove('error')
        monthContainer.current.classList.remove('error')
        yearContainer.current.classList.remove('error')
        cvcContainer.current.classList.remove('error')
        buttonContainer.current.classList.remove('error-btn')
    } 
    else {
        setIsNameError(true)
        setIsNumberError(true)
        setIsMonthError(true)
        setIsYearError(true)
        setIsCvcError(true)
        nameContainer.current.classList.add('error')
        numberContainer.current.classList.add('error')
        monthContainer.current.classList.add('error')
        yearContainer.current.classList.add('error')
        cvcContainer.current.classList.add('error')
        buttonContainer.current.classList.add('error-btn')
    }

    if(cardName[0]) {
      setIsNameError(false)
      nameContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsNameError(true)
      nameContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    if(cardNumber[0]) {
      setIsNumberError(false)
      numberContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsNumberError(true)
      numberContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    if(cardMonth[0]) {
      setIsMonthError(false)
      monthContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsMonthError(true)
      monthContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    if(cardYear[0]) {
      setIsYearError(false)
      yearContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsYearError(true)
      yearContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
    if(cardCvc[0]) {
      setIsCvcError(false)
      cvcContainer.current.classList.remove('error')
      buttonContainer.current.classList.remove('error-btn')
    } else {
      setIsCvcError(true)
      cvcContainer.current.classList.add('error')
      buttonContainer.current.classList.add('error-btn')
    }
  }

  // Render form
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input onChange={(e)=> handleName(e.target.value)} value={cardName[0]} ref={nameContainer}
          type="text" id='name' name='text' placeholder='e.g.Jane Appleseed'/>
          {isNameError ? <Error errorMsg={errorMsg}/> : ''}
        </div>
        <div className="input-group">
          <label htmlFor="number">CARD NUMBER</label>
          <input onChange={(e)=> handleNumber(e.target.value)} value={cardNumber[0]} ref={numberContainer}
          type="text" id='number' name='number' placeholder='e.g.1234 5678 9123 0000'
           minLength='19' maxLength='19'/>
          {isNumberError ? <Error errorMsg={errorMsg}/> : ''}
        </div>
        <div className="input-group date-group">
          <div className="date-labels">
            <label htmlFor="month">EXP.DATE (MM/YY)</label>
            <label htmlFor="cvc">CVC</label>
          </div>
          <div className='date-inputs'>
          <input onChange={(e)=> handleMonth(e.target.value)} value={cardMonth[0]} ref={monthContainer}
            type="text" id='month' name='month' placeholder='MM' minLength="2" maxLength="2" />
            <RenderDateError />
            <input onChange={(e)=> handleYear(e.target.value)} value={cardYear[0]} ref={yearContainer}
            type="text" id='year' name='year' placeholder='YY' minLength="2" maxLength="2" />
            <input onChange={(e)=> handleCvc(e.target.value)} value={cardCvc[0]} ref={cvcContainer}
            type="text" id='cvc' name='cvc' placeholder='e.g.123' minLength="3" maxLength="3"/>
            {isCvcError ? <Error errorMsg={errorMsg}/> : ''}
          </div>
        </div>
        <button type='submit' className="btn" ref={buttonContainer}>Confirm</button>
      </form>
  )
}

export default Form
