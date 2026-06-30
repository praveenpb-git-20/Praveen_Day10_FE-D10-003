import "./TeamInfo.css";

function TeamInfo({ team, lead, members, project, icon }) {
  return (
    <div className="team-card">

      <div className="team-header">

        <div className="team-icon">
          {icon}
        </div>

        <div>
          <h2>{team}</h2>
        </div>

      </div>

      <div className="team-details">

        <div className="detail">
          <h4>Team Lead</h4>
          <span>{lead}</span>
        </div>

        <div className="detail">
          <h4>Members</h4>
          <span>{members}</span>
        </div>

      </div>

      <button className="team-btn">
        View Team
      </button>

    </div>
  );
}

export default TeamInfo;