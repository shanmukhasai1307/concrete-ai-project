import React from "react";

import {
  FaBuilding,
  FaChartPie,
  FaLeaf,
  FaMoneyBillWave,
  FaSignOutAlt
} from "react-icons/fa";

import { useNavigate }
from "react-router-dom";

function Sidebar() {

  const navigate =
    useNavigate();

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/login");
  };

  return (

    <div className="sidebar">

      <h2>
        🏗 AI Concrete
      </h2>

      <ul>

        <li
        onClick={() =>
        navigate("/")
        }
        >

          <FaBuilding />

          &nbsp;

          Dashboard

        </li>

        <li
        onClick={() =>
        navigate("/analytics")
        }
        >

          <FaChartPie />

          &nbsp;

          Analytics

        </li>

        <li
        onClick={() =>
        navigate(
          "/sustainability"
        )
        }
        >

          <FaLeaf />

          &nbsp;

          Sustainability

        </li>

        <li
        onClick={() =>
        navigate(
          "/cost-analysis"
        )
        }
        >

          <FaMoneyBillWave />

          &nbsp;

          Cost Analysis

        </li>

        <li
        onClick={logout}
        >

          <FaSignOutAlt />

          &nbsp;

          Logout

        </li>

      </ul>

    </div>
  );
}

export default Sidebar;