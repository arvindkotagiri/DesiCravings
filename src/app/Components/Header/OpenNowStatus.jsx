import { useEffect, useState } from "react";

const OpenNowStatus = () => {
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();

    // Convert to Dallas (Central Time)
    const dallasTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/Chicago" })
    );

    const day = dallasTime.getDay(); // 0 = Sunday, 6 = Saturday
    const hours = dallasTime.getHours();
    const minutes = dallasTime.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    let open = false;

    if (day >= 1 && day <= 5) {
      // Mon–Fri: 9 AM – 12 AM
      open = totalMinutes >= 540 && totalMinutes < 1440;
    } else {
      // Sat–Sun: 9 AM – 1 AM (next day)
      open = totalMinutes >= 540 || totalMinutes < 60;
    }

    setIsOpen(open);
    setStatus(open ? "Open Now" : "Closed Now");
  }, []);

  return (
    <li>
      <i className="bi bi-alarm"></i>{" "}
      <span style={{ color: "white", fontWeight: "300" , textTransform: "uppercase"}}>
        {status}
      </span>
    </li>
  );
};

export default OpenNowStatus;
