import React from "react";

export const Title = () => {
  return (
    <div className="card text-center">
      <div className="card-header">Mi App</div>
      <div className="card-body">
        <h5 className="card-title">Una app para aprender React</h5>
        <p className="card-text">
          Con esta app aprenderás a usar React desde cero.
        </p>
        <a href="#" className="btn btn-primary">
          Aprende más
        </a>
      </div>
      <div className="card-footer text-muted">© 2025</div>
    </div>
  );
};
