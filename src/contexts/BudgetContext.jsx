import React, { Children } from 'react'

import { createContext, useContext } from 'react'

import { useState } from 'react'



    const CountContext = createContext()

    const BudgetProvider= ({Children}) =>{
    
        const [budgetMode, setBudgetMode] = useState([])
    
        const modBudgetContext = (id) =>{
            const copy = [...budgetMode, id]
            setBudgetMode(copy)
        }

        const value = {
            budgetMode,
            modBudgetContext
        }

        return(
            <CountContext.Provider value={value}>
                {Children}
            </CountContext.Provider>
        )
    }

    export {BudgetProvider}




