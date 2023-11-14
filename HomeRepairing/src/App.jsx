import './App.css'
import './assets/Css/style.css'
import Banner from './Page/Banner/Banner'
import HomeServices from './Page/Services/HomeServices/HomeServices'
import OurServices from './Page/Services/OurServices/OurServices'
import TrustAndServices from './Page/Services/TrustAndProfessionalServices/TrustAndServices'
import ChooseCard from './Page/WhyChoose/ChooseCard'

function App() {


  return (
    <>
      <Banner></Banner>
      <ChooseCard></ChooseCard>
      <TrustAndServices></TrustAndServices>
      <HomeServices></HomeServices>
      <OurServices></OurServices>
    </>
  )
}

export default App
