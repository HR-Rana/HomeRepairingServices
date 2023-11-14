import './App.css'
import './assets/Css/style.css'
import Banner from './Page/Banner/Banner'
import SendMessage from './Page/SendMessage/SendMessage'
import HomeRepair from './Page/Services/HomeRepair/HomeRepair'
import HomeServices from './Page/Services/HomeServices/HomeServices'
import OurServices from './Page/Services/OurServices/OurServices'
import ProfessionalServices from './Page/Services/ProfessionalServices/ProfessionalServices'
import TrustAndServices from './Page/Services/TrustAndProfessionalServices/TrustAndServices'
import ChooseCard from './Page/WhyChoose/ChooseCard'

function App() {


  return (
    <div className='main-app'>
      <Banner></Banner>
      <ChooseCard></ChooseCard>
      <TrustAndServices></TrustAndServices>
      <HomeServices></HomeServices>
      <OurServices></OurServices>
      <HomeRepair></HomeRepair>
      <SendMessage></SendMessage>
      <ProfessionalServices></ProfessionalServices>
    </div>
  )
}

export default App
