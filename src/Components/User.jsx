import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    async function abc() {
      try {
        setLoading(true);
        const resp = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
        );
        const user = await resp.json();
        console.log("user", user);
        setUser(user);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    abc();
  }, []);
  const heading = <h2>User Example</h2>;

  return <div>User</div>;
};

export default User;
