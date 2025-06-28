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

    const day = dallasTime.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const hours = dallasTime.getHours();
    const minutes = dallasTime.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    let open = false;
    let closingTime = "";

    if (day >= 1 && day <= 5) {
      // Monday to Friday: 9 AM (540) to 12 AM (1440)
      if (totalMinutes >= 540 && totalMinutes < 1440) {
        open = true;
        closingTime = "12:00 AM";
      }
    } else {
      // Saturday and Sunday: 9 AM (540) to 1 AM next day (60)
      if (totalMinutes >= 540 || totalMinutes < 60) {
        open = true;
        closingTime = "1:00 AM";
      }
    }

    // Handle Sunday late night (open till 1 AM Monday)
    if (day === 1 && totalMinutes < 60) {
      open = true;
      closingTime = "1:00 AM";
    }

    setIsOpen(open);
    setStatus(
      open ? `Open Now – till ${closingTime}` : "Closed Now – we open at 9:00 AM"
    );
  }, []);

  return (
    <li>
      <i className="bi bi-alarm"></i>{" "}
      <span
        style={{
          // color: isOpen ? "lightgreen" : "red",
          fontWeight: "300",
          textTransform: "uppercase",
        }}
      >
        {status}
      </span>
    </li>
  );
};

export default OpenNowStatus;
