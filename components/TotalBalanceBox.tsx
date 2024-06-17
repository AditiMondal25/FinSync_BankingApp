import React from 'react'
import CountUp from 'react-countup'
const TotalBalanceBox = () => {
    <div className="flex flex-cal gap-6">
        <h2 className="header-2">
            Bank Accounts:{totalBanks}
            </h2>    
            </div className="flex flex-cal gap-2">
            <p className="total-balance-label">
                Total Current Balance 
                        </p>
                        <p className="total-balance-amount flex-center gap-2">
                            <CountUp end={100}/>
                            {formatAmount (TotalCurrentBalance)}
                        </p>
                        </div>
                        </div>
                        </section>
                        )
                    }