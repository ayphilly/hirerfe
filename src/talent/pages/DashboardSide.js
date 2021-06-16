const DashboardSide = () => {
  return (
    <div style={{ backgroundColor: "#fafcff" }} className="d-flex">
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "250px",
          zIndex: 1,
        }}
      ></div>
      <div className="p-12 w-100">
        <header
          style={{
            color: "#8291a1",
            fontWeight: 600,
            fontSize: "2.5rem",
          }}
          className="mb-16"
        >
          Dashboard
        </header>
        <div className="stats-holder">
          <div className="stats-card">
            <span className="top-circle mb-4"></span>
            <div className="title-text">Community Reviews</div>
            <div className="subtitle mb-16">
              View, respond to and manage your reviews
            </div>
            <div className="figure">10</div>
            <div className="stats-card__footer">New Reviews (Last Month)</div>
          </div>
          <div className="stats-card">
            <span className="top-circle mb-4"></span>
            <div className="title-text">Community Reviews</div>
            <div className="subtitle mb-16">
              View, respond to and manage your reviews
            </div>
            <div className="figure">10</div>
            <div className="stats-card__footer">New Reviews (Last Month)</div>
          </div>
          <div className="stats-card">
            <span className="top-circle mb-4"></span>
            <div className="title-text">Community Reviews</div>
            <div className="subtitle mb-16">
              View, respond to and manage your reviews
            </div>
            <div className="figure">10</div>
            <div className="stats-card__footer">New Reviews (Last Month)</div>
          </div>
          <div className="stats-card">
            <span className="top-circle mb-4"></span>
            <div className="title-text">Community Reviews</div>
            <div className="subtitle mb-16">
              View, respond to and manage your reviews
            </div>
            <div className="figure">10</div>
            <div className="stats-card__footer">New Reviews (Last Month)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSide;
