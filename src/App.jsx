import SecondaryBenefits from "./components/molecules/secondary-benefits/SecondaryBenefits"
import EarnExtra from "./components/organisms/earn-extra/EarnExtra"
import Footer from "./components/organisms/footer/Footer"
import GetRide from "./components/organisms/get-a-ride/GetRide"
import Hero from "./components/organisms/hero/Hero"
import ReadyToRide from "./components/organisms/ready-to-ride/ReadyToRide"

function App() {

  return (
    <>
      <Hero/>
      <EarnExtra/>
      <GetRide/>
      <SecondaryBenefits/>
      <ReadyToRide/>
      <Footer/>
    </>
  )
}

export default App
