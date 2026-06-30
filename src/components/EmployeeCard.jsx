import "./EmployeeCard.css";

function EmployeeCard({ name, role, department, id, icon }) {
  return (
    <div className="employee-card">

      <div className="card-top"></div>

      <div className="avatar">
        {name
          .split(" ")
          .map((word) => word[0])
          .join("")}
      </div>

      <div className="employee-id">
        {id}
      </div>

      <h2>{name}</h2>

      <p className="role">{role}</p>

      <div className="department">
        <span className="dept-icon">{icon}</span>
        <span>{department}</span>
      </div>

      <button>View Profile</button>

    </div>
  );
}

export default EmployeeCard;