import { useState,useEffect } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("wss://example.com/notifications");

    socket.onopen = () => console.log("Connected ✅");
    socket.onerror = (err) => console.error("Socket error", err);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setNotifications(prev => [...prev, data]);
    };

    socket.onclose = () => console.log("Disconnected ❌");

    // cleanup
    return () => {
      socket.close();
    };
  }, []);

  return (
    <ul>
      {notifications.map((n, i) => <li key={i}>{n.text}</li>)}
    </ul>
  );
}

export default Notifications;