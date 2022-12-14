import React from 'react'
// tambahkan react router dom
import { Routes, Route } from 'react-router-dom'
import Biodata from './pages/Biodata'
import DetailSkill from './pages/DetailSkill'
import Home from './pages/Home'
import Skill from './pages/Skill'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/biodata" element={ <Biodata /> } />
      <Route path="/skill" element={ <Skill /> } />

      {/* membuat pages params/useparams */}
      <Route path="/skill/:item" element={<DetailSkill />} />
    </Routes>
  )
}
