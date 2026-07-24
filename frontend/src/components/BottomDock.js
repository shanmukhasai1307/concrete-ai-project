import React from "react";

import {
  Sparkles,
  BarChart3,
  Leaf,
  IndianRupee,
  FileText,
  Info,
  LogOut
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomDock() {

  const navigate = useNavigate();

  const dockButton = {

    border: "none",

    background:
    "rgba(255,255,255,0.9)",

    padding: "14px 22px",

    borderRadius: "18px",

    fontSize: "15px",

    fontWeight: 600,

    cursor: "pointer",

    color: "#0f172a",

    display: "flex",

    alignItems: "center",

    gap: "10px",

    whiteSpace: "nowrap"
  };

  const handleLogout = () => {

    localStorage.clear();

    navigate("/login");

  };

  return (

    <div className="apple-dock">

      <button
        style={dockButton}
        onClick={() =>
          navigate("/dashboard")
        }
      >

        <Sparkles size={18} />

        Dashboard

      </button>

      <button
        style={dockButton}
        onClick={() =>
          navigate("/analytics")
        }
      >

        <BarChart3 size={18} />

        Analytics

      </button>

      <button
        style={dockButton}
        onClick={() =>
          navigate("/sustainability")
        }
      >

        <Leaf size={18} />

        Sustainability

      </button>

      <button
        style={dockButton}
        onClick={() =>
          navigate("/cost-analysis")
        }
      >

        <IndianRupee size={18} />

        Cost Analysis

      </button>

      <button
        style={dockButton}
        onClick={() =>
          navigate("/report")
        }
      >

        <FileText size={18} />

        Report

      </button>


      <button
  style={dockButton}
  onClick={() =>
    navigate("/about")
  }
>

  <Info size={18} />

  About

</button>


      <button

        style={{

          ...dockButton,

          background:
          "linear-gradient(135deg,#fb7185,#f43f5e)",

          color: "white"
        }}

        onClick={handleLogout}
      >

        <LogOut size={18} />

        Logout

      </button>

    </div>

  );
}