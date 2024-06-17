import HeaderBox from '@/components/HeaderBox'

const Home = () => {
    const loggedIn = { firstName: 'Aditi'};

  return (
    <section className="home">
        <div className="home-content">
        <header className="home-header">
            <HeaderBox 
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions with ease."            
    />
    <TotalBalanceBox
    accounts={[]}
    totalBanks={1}
    totalCurrentBalance={1250.55}

  </header>
  </div>
  </section>
  )  
}
