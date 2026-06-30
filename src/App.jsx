import "./App.css";

import EmployeeCard from "./components/EmployeeCard";
import DashboardWidget from "./components/DashboardWidget";
import TeamInfo from "./components/TeamInfo";

function App() {
  return (
    <div className="container">

      <h1>Employee Dashboard</h1>

      <section className="widgets">

        <DashboardWidget
          title="New Clients"
          value="128"
          subtitle="This Month"
          icon="👥"
          color="#2563eb"
        />

        <DashboardWidget
          title="Training"
          value="18"
          subtitle="Courses Completed"
          icon="🎓"
          color="#ec4899"
        />

        <DashboardWidget
          title="Tasks Completed"
          value="92%"
          subtitle="Project Progress"
          icon="✅"
          color="#f97316"
        />

      </section>

      <section className="employees">

        <EmployeeCard
          id="EMP001"
          icon="💻"
          name="Praveen"
          role="Frontend Developer"
          department="Engineering"
        />

        <EmployeeCard
          id="EMP002"
          icon="🎨"
          name="Girish"
          role="UI Designer"
          department="Design"
        />

        <EmployeeCard
          id="EMP003"
          icon="🗄️"
          name="Vinay"
          role="Backend Developer"
          department="Technology"
        />
      </section>

      <section className="teams">

        <TeamInfo
          icon="💻"
          team="Development Team"
          lead="Praveen"
          members="12"
          project="Employee Management System"
        />

        <TeamInfo
          icon="🎨"
          team="Design Team"
          lead="Girish"
          members="6"
          project="UI/UX Redesign"
        />

        <TeamInfo
          icon="🧪"
          team="Quality Assurance"
          lead="Vinay"
          members="8"
          project="Testing & Automation"
        />

      </section>

    </div>
  );
}

export default App;