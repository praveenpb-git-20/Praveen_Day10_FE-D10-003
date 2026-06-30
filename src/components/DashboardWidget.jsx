import "./DashboardWidget.css";

function DashboardWidget({ title, value, subtitle, icon, color }) {
  return (
    <div className="widget">

      <div className="widget-header">

        <div
          className="widget-icon"
          style={{ background: color }}
        >
          {icon}
        </div>

        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>

      </div>

      <h1>{value}</h1>

      <div className="progress-bar">
        <div
          className="progress"
          style={{ background: color }}
        ></div>
      </div>

    </div>
  );
}

export default DashboardWidget;