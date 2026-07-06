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
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Employers from './pages/Employers'
import JobSeekers from './pages/JobSeekers'
import CollegeCollaboration from './pages/CollegeCollaboration'
import Internship from './pages/Internship'
import ForCollegeStudents from './pages/ForCollegeStudents'

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
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="employers" element={<Employers />} />
        <Route path="job-seekers" element={<JobSeekers />} />
        <Route path="college-collaboration" element={<CollegeCollaboration />} />
        <Route path="internship" element={<Internship />} />
        <Route path="for-college-students" element={<ForCollegeStudents />} />
      </Route>
    </Routes>
  )
}
