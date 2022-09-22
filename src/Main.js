import React, {useEffect, useRef , useState} from 'react'

function Main() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardCvc, setCardCvc] = useState('')

  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <main className="main">
        <CardSidebar cardNumber={cardNumber} cardName={cardName} cardMonth={cardMonth} cardYear={cardYear} cardCvc={cardCvc} />
        {isSuccess ? <SuccessMsg setIsSuccess={setIsSuccess} /> : 
        <Form setCardName={setCardName} setCardMonth={setCardMonth} setCardYear={setCardYear} setCardNumber={setCardNumber} setCardCvc={setCardCvc}
        name={name} number={number} month={month} year={year} cvc={cvc}
        setName={setName} setNumber={setNumber} setMonth={setMonth} setYear={setYear} setCvc={setCvc}
        isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
        }
    </main>
  )
}

function CardSidebar({cardName, cardNumber, cardMonth, cardYear, cardCvc}) {
  return (
    <aside className='sidebar'>
        <div className="card-front">
            <div className="circle-big"></div>
            <div className="circle-small"></div>
            <p className="card-number">{cardNumber || '1234 5678 4321 0000'}</p>
            <div className="card-bottom">
              <p className="card-owner">{cardName || 'JANE APPLESEED'}</p>
              <p className="card-date">{cardMonth || '00'}/{cardYear || '00'}</p>
            </div>
        </div>
        <div className="card-back">
            <p className="cvc">{cardCvc || '000'}</p>
        </div>
    </aside>
  )
}

function Form({setCardName, setCardMonth, setCardYear, setCardCvc, setCardNumber,
  name,number,month,year,cvc, setName, setNumber, setMonth, setYear, setCvc, isSuccess, setIsSuccess}) {

  const [isNameError, setIsNameError] = useState(false);
  const [isNumberError, setIsNumberError] = useState(false);
  const [isMonthError, setIsMonthError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [isCvcError, setIsCvcError] = useState(false);

  const [isMonthRangeError, setIsMonthRangeError] = useState(false);
  const [isYearRangeError, setIsYearRangeError] = useState(false);

  const [errorMsg, setErrorMsg] = useState(`Can't be blank!`)

  const nameContainer = useRef(null)
  const numberContainer = useRef(null)
  const monthContainer = useRef(null)
  const yearContainer = useRef(null)
  const cvcContainer = useRef(null)

function handleName(e) {
  if(e) {
    setIsNameError(false)
    nameContainer.current.classList.remove('error')
  } else {
    setIsNameError(true)
    nameContainer.current.classList.add('error')
  }
  setName(e)
  setCardName(e)
}

function handleNumber(e) {
  if(e) {
    setIsNumberError(false)
    numberContainer.current.classList.remove('error')
  } else {
    setIsNumberError(true)
    numberContainer.current.classList.add('error')
  }
  e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  setCardNumber(e)
  setNumber(e.replace(/[^\dA-Z]/gi, '')
  .toUpperCase()
  .replace(/(.{4})/g, '$1 ')
  .trim())
}

function handleMonth(e) {
  if(e) {
    setIsMonthError(false)
    monthContainer.current.classList.remove('error')
  } else {
    setIsMonthError(true)
    monthContainer.current.classList.add('error')
  }
  if(e > 12){
    setIsMonthRangeError(true)
    monthContainer.current.classList.add('error')
  } else {
    setIsMonthRangeError(false)
    monthContainer.current.classList.remove('error')
  }

  e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  setMonth(e)
  setCardMonth(e)
}

function handleYear(e) {
  if(e) {
    setIsYearError(false)
    yearContainer.current.classList.remove('error')
  } else {
    setIsYearError(true)
    yearContainer.current.classList.add('error')
  }

  if(e > 50 || e < 22){
    setIsYearRangeError(true)
    yearContainer.current.classList.add('error')
  } else {
    setIsYearRangeError(false)
    yearContainer.current.classList.remove('error')
  }

  e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  setYear(e)
  setCardYear(e)
}

function handleCvc(e) {
  if(e) {
    setIsCvcError(false)
    cvcContainer.current.classList.remove('error')
  } else {
    setIsCvcError(true)
    cvcContainer.current.classList.add('error')
  }
  e = e.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  setCvc(e)
  setCardCvc(e)
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(name && number && month && year && cvc) {
      setName('')
      setNumber('')
      setMonth('')
      setYear('')
      setCvc('')
      setIsNameError(false)
      setIsNumberError(false)
      setIsMonthError(false)
      setIsYearError(false)
      setIsCvcError(false)
      nameContainer.current.classList.remove('error')
      numberContainer.current.classList.remove('error')
      monthContainer.current.classList.remove('error')
      yearContainer.current.classList.remove('error')
      cvcContainer.current.classList.remove('error')
      setIsSuccess(true);
  } else {
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
  }
  if(name) {
    setIsNameError(false)
    nameContainer.current.classList.remove('error')
  } else {
    setIsNameError(true)
    nameContainer.current.classList.add('error')
  }
  if(number) {
    setIsNumberError(false)
    numberContainer.current.classList.remove('error')
  } else {
    setIsNumberError(true)
    numberContainer.current.classList.add('error')
  }
  if(month) {
    setIsMonthError(false)
    monthContainer.current.classList.remove('error')
  } else {
    setIsMonthError(true)
    monthContainer.current.classList.add('error')
  }
  if(year) {
    setIsYearError(false)
    yearContainer.current.classList.remove('error')
  } else {
    setIsYearError(true)
    yearContainer.current.classList.add('error')
  }
  if(cvc) {
    setIsCvcError(false)
    cvcContainer.current.classList.remove('error')
  } else {
    setIsCvcError(true)
    cvcContainer.current.classList.add('error')
  }
}

function RenderMonthError() {
  if(isMonthError || isYearError){
    return <Error errorMsg={errorMsg} />
  } else if(isMonthRangeError || isYearRangeError) {
    return <Error errorMsg={`months between 01 and 12, years between 2022 and 2050`} />
  }  else {
    return ''
  }
}

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">CARDHOLDER NAME</label>
        <input onChange={(e)=> handleName(e.target.value)} value={name} ref={nameContainer}
        type="text" id='name' name='text' placeholder='e.g.Jane Appleseed'/>
        {!isNameError ? '' : <Error errorMsg={errorMsg}/>}
      </div>
      <div className="input-group">
        <label htmlFor="number">CARD NUMBER</label>
        <input onChange={(e)=> handleNumber(e.target.value)} value={number} ref={numberContainer}
        type="text" id='number' name='number' placeholder='e.g.1234 5678 9123 0000'
         minLength='19' maxLength='19'/>
        {!isNumberError ? '' : <Error errorMsg={errorMsg}/>}
      </div>
      <div className="input-group date-group">
        <div className="date-labels">
          <label htmlFor="date">EXP.DATE (MM/YY)</label>
          <label htmlFor="cvc">CVC</label>
        </div>
        <div className='date-inputs'>
        <input onChange={(e)=> handleMonth(e.target.value)} value={month} ref={monthContainer}
          type="text" id='date' name='date' placeholder='MM' minLength="2" maxLength="2" />
          <RenderMonthError />
          <input onChange={(e)=> handleYear(e.target.value)} value={year} ref={yearContainer}
          type="text" id='year' placeholder='YY' minLength="2" maxLength="2" />
          <input onChange={(e)=> handleCvc(e.target.value)} value={cvc} ref={cvcContainer}
          type="text" id='cvc' name='cvc' placeholder='e.g.123' minLength="3" maxLength="3"/>
          {!isCvcError ? '' : <Error errorMsg={errorMsg} />}
        </div>
      </div>
      <button type='submit' className="btn">Confirm</button>
    </form>
  )
}

function Error({errorMsg={errorMsg}}) {
  return <p className='error-msg'
  style={{ color:'red', fontSize: '0.7rem', position: 'absolute', bottom: '-15px', lineHeight: '0.85' }}>{errorMsg}</p>
}

function SuccessMsg({setIsSuccess}) {

    const closeModal = () => {
      setIsSuccess(false)
    }
    return (
      <div className="success-msg">
          <img src="images/icon-complete.svg" alt="" />
          <h2>THANK YOU!</h2>
          <p>We've added your card details</p>
          <button className="btn" onClick={()=> closeModal()}>Continue</button>
      </div>
    )
}

export default Main
