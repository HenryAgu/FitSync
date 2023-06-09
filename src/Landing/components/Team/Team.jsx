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
                <div className="team_card first_card"></div>
                <div className="team_card second_card"></div>
                <div className="team_card third_card"></div>
            </div>
        </div>
    </main>
  )
}

export default Team