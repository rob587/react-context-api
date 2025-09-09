import React from 'react'

import { createContext, useContext } from 'react'

import { useState } from 'react'

const BudgetContext = () => {

    const CountContext = createContext()

    const [budgetMode, setBudgetMode] = useState([])

  return (
    <div>
      
    </div>
  )
}

export default BudgetContext
