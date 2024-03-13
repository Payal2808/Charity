import React from "react";
import AdminLogin from "./AdminLogin";

const AdminPage = () => {
  // TODO: Implement admin login state management here
  const isAdminLoggedIn = false;

  return (
    <div>
      {!isAdminLoggedIn && <AdminLogin />}
      {isAdminLoggedIn && (
        <div>
          <h1>Admin Dashboard</h1>
          {/* Add admin dashboard content here */}
        </div>
      )}
    </div>
  );
};

export default AdminPage;