import React from 'react'

export default function CurrencyRow({currencyOptions,selectedCurrency,onChangeCurrency,amount,onChangeAmount}) {
    return (
        <div>
          <input type='number' className='input' value={amount} onChange={onChangeAmount}/>
          <select value={selectedCurrency} onChange={onChangeCurrency}>
              {currencyOptions.map(option =>(
                  <option key= {`${option}-${Date.now()}`} value={option}>{option}</option>
              ))}
          </select>
        </div>
    )
}
