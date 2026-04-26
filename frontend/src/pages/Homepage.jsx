import React from 'react'
import ProductList from './ProductList'
import Slider from '../components/Slider'
import About from './About'
import HowItWorks from './minipages/HowItWorks'
import Features from './minipages/Features'
import StudentDetails from './minipages/StudentDetails'
import Roadmap from './minipages/Roadmap'
import ExplainerContent from './minipages/ExplainerContent'
import NearbyColleges from '../maps/NearbyColleges'
import SectionDivider from './minipages/SectionDivider'
import FinalCTAFooter from './minipages/FinalCTAFooter'
import Home from './Home'
import Dashboard from '../DashboardDetails/Dashboard'
import { getAccessToken } from '../utils/auth'
import LandingPage from '../DashboardDetails/LandingPage'
import CareerLanding from '../Demo/CareerLanding'

function Homepage() {
  const isLoggedIn = !!getAccessToken();
  return (
    <div>
    {!isLoggedIn ? (
    <>
    <Home />
<About />
 <div className="min-h-36 bg-black flex items-center justify-center">
      <Slider />
    </div>
<HowItWorks />
<SectionDivider />

<Features />
<SectionDivider />
<ProductList />

<Roadmap />
<ExplainerContent />
<NearbyColleges />
<StudentDetails />
<LandingPage />
{/* <CareerLanding /> */}
<FinalCTAFooter />
   
    </>) : (
      <>


 <Dashboard />
    </> 
    )} 



    </div>
  )
}

export default Homepage
