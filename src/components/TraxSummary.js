import React from 'react'

export const TraxSummary = (prop) => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    $ {prop.nameInc}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    $ {-prop.nameExp}

                </p>
            </div>

        </div>
    )
}
