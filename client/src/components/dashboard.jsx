import React from 'react';

function dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. You can add content and features here.</p>

      {/* Example content and features */}
      <div>
        <h3>Recent Activity</h3>
        <ul>
          <li>User A logged in.</li>
          <li>User B completed a task.</li>
          <li>User C posted a new article.</li>
        </ul>
      </div>

      <div>
        <h3>Your Stats</h3>
        <p>Total Users: 100</p>
        <p>Total Orders: 50</p>
        <p>Total Revenue: $1000</p>
      </div>
    </div>
  );
}

export default dashboard;

