import React from 'react'
import CountUp from 'react-countup'
import AnimatedCounter from './AnimatedCounter'
const TotalBalanceBox = () => ({
    accounts=[],totalBanks,totalCurrentBalance};
    TotalBalanceBoxProps) => {
        return(
            <section className="total-balance">
                <div className="total-balance-chart">
                    <DoughnutChart accounts={accounts}/> 
                </div>
            </section>
    <div className="flex flex-cal gap-6">
        <h2 className="header-2">
            Bank Accounts:{totalBanks}
            </h2>    
            </div className="flex flex-cal gap-2">
            <p className="total-balance-label">
                Total Current Balance 
                        </p>
                        <p className="total-balance-amount flex-center gap-2">
                            <AnimatedCounter amount=
                            {totalCurrentBalance}/>
                            {formatAmount (TotalCurrentBalance)}
                        </p>
                        </div>
                        </div>
                        </section>
                        )
                    }