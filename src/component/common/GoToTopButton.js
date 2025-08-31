import { useEffect, useState } from "react";

function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  // show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={topFunction}
        id="myBtn"
        title="Go to top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          borderRadius: "50%",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        ↑
      </button>
    )
  );
}

export default GoToTopButton;
