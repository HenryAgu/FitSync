// import React from 'react'

// stylesheet
import "./style/Team.scss";

const Team = () => {
  return (
    <main className="team">
        <div className="inner_team">
            <div className="team_header">
                <h1>MEET THE TEAM</h1>
                <p>Get to know the passionate individuals behind our success.</p>
            </div>
            <div className="team_info">
                <div className="team_card first_card">
                  <div className="member_name">
                    <h3>ADAH JONATHAN</h3>
                    <p>CEO, FitSync</p>
                  </div>
                </div>
                <div className="team_card second_card">
                  <div className="member_name">
                    <h3>LINDA NAOMI</h3>
                    <p>COO, FitSync</p>
                  </div>
                </div>
                <div className="team_card third_card">
                  <div className="member_name">
                    <h3>MATT WALSH</h3>
                    <p>Lead Gym Instructor, FitSync</p>
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Team