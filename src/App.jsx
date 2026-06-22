import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import StudyAbroad from './pages/StudyAbroad'
import Internships from './pages/Internships'
import WorkVisa from './pages/WorkVisa'
import Languages from './pages/Languages'
import Countries from './pages/Countries'
import CountryDetail from './pages/CountryDetail'
import SuccessStories from './pages/SuccessStories'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="study-abroad" element={<StudyAbroad />} />
        <Route path="internships" element={<Internships />} />
        <Route path="work-visa" element={<WorkVisa />} />
        <Route path="languages" element={<Languages />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:slug" element={<CountryDetail />} />
        <Route path="success-stories" element={<SuccessStories />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
