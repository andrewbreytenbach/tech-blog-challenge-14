const logout = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutBtn");
    if (logoutButton) {
      logoutButton.addEventListener("click", logout);
    }
  });
  