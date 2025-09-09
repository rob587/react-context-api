

import { createContext, useContext } from 'react'

import { useState } from 'react'



    const CountContext = createContext()

    const BudgetProvider= ({children}) =>{
    
        const [budgetMode, setBudgetMode] = useState(false)
    
        const modBudgetContext = (id) =>{
            const copy = [...budgetMode, id]
            setBudgetMode(copy)
        }

        const value = {
            budgetMode,
            setBudgetMode
        }

        return(
            <CountContext.Provider value={value}>
                {children}
            </CountContext.Provider>
        )
    }

    export {BudgetProvider}




