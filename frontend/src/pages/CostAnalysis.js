import BottomDock from "../components/BottomDock";
import React, {
  useEffect
} from "react";

import { useNavigate }
from "react-router-dom";

import {
  Leaf,
  Wallet,
  Droplets,
  Building2
} from "lucide-react";

import { motion }
from "framer-motion";

function CostAnalysis() {
  const navigate =
  useNavigate();

useEffect(() => {

  const userName =
    localStorage.getItem(
      "userName"
    );

  if (!userName) {

    navigate("/login");

  }

}, [navigate]);


  const result =
    JSON.parse(
      localStorage.getItem(
        "concreteResult"
      )
    );

  if (!result) {

    return (

      <div
      style={{
        padding:50
      }}
      >

        No Data Available

      </div>
    );
  }

  // ====================================
  // MATERIAL COSTS
  // ====================================

  const cementCost =
    result.estimated_materials
    .cement_bags * 430;

  const waterCost =
    result.estimated_materials
    .water_liters * 0.05;

  const sandCost =
    result.estimated_materials
    .sand_kg * 1.8;

  const aggregateCost =
    result.estimated_materials
    .aggregate_kg * 1.5;

  const flyashCost =
    result.estimated_materials
    .flyash_kg * 2;

  const slagCost =
    result.estimated_materials
    .slag_kg * 3;

  const totalCost =
  result.total_estimated_cost;

  // ====================================
  // COST DATA
  // ====================================

  const costData = [

    {
      title:"Cement",
      value:
      result.estimated_materials
      .cement_bags,

      unit:"bags",

      price:"₹430/bag",

      total:cementCost,

      icon:
      <Building2
      size={30}
      />
    },

    {
      title:"Water",

      value:
      result.estimated_materials
      .water_liters,

      unit:"L",

      price:"₹0.05/L",

      total:waterCost,

      icon:
      <Droplets
      size={30}
      />
    },

    {
      title:"Sand",

      value:
      result.estimated_materials
      .sand_kg,

      unit:"kg",

      price:"₹1.8/kg",

      total:sandCost,

      icon:
      <Wallet
      size={30}
      />
    },

    {
      title:"Aggregate",

      value:
      result.estimated_materials
      .aggregate_kg,

      unit:"kg",

      price:"₹1.5/kg",

      total:aggregateCost,

      icon:
      <Wallet
      size={30}
      />
    },

    {
      title:"Fly Ash",

      value:
      result.estimated_materials
      .flyash_kg,

      unit:"kg",

      price:"₹2/kg",

      total:flyashCost,

      icon:
      <Leaf
      size={30}
      />
    },

    {
      title:"Slag",

      value:
      result.estimated_materials
      .slag_kg,

      unit:"kg",

      price:"₹3/kg",

      total:slagCost,

      icon:
      <Leaf
      size={30}
      />
    }
  ];

  // ====================================
  // DOCK BUTTON
  // ====================================



  return (

    <div

    style={{

      minHeight:"100vh",

      background:
      `
      radial-gradient(
        circle at top left,
        rgba(125,211,252,0.3),
        transparent 30%
      ),

      radial-gradient(
        circle at top right,
        rgba(196,181,253,0.3),
        transparent 30%
      ),

      linear-gradient(
        135deg,
        #f8fafc,
        #ffffff
      )
      `,

      padding:"50px",

      overflow:"hidden"
    }}
    >

      {/* HERO */}

      <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      style={{
        textAlign:"center"
      }}
      >

        <div
        style={{
          fontSize:95,
          fontWeight:700,
          lineHeight:1
        }}
        >

          Cost

          <br/>

          <span
          style={{

            background:
            "linear-gradient(135deg,#38bdf8,#8b5cf6)",

            WebkitBackgroundClip:
            "text",

            WebkitTextFillColor:
            "transparent"
          }}
          >

            Intelligence

          </span>

        </div>

        <p
        style={{
          marginTop:30,
          fontSize:22,
          color:"#64748b",
          maxWidth:850,
          marginInline:"auto",
          lineHeight:1.8
        }}
        >

          AI-powered real-time
          construction cost analysis
          with intelligent material
          estimation and pricing
          optimization.

        </p>

      </motion.div>

      {/* TOTAL CARD */}

      <motion.div

      initial={{
        opacity:0,
        y:50
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:0.2
      }}

      style={{

        maxWidth:1300,

        margin:"70px auto",

        background:
        "rgba(255,255,255,0.55)",

        backdropFilter:
        "blur(20px)",

        border:
        "1px solid rgba(255,255,255,0.5)",

        borderRadius:50,

        padding:60,

        boxShadow:
        "0 10px 40px rgba(148,163,184,0.08)"
      }}
      >

        <div
        style={{
          color:"#64748b",
          fontSize:24
        }}
        >

          Total Estimated Cost

        </div>

        <div
        style={{
          marginTop:20,

          fontSize:90,

          fontWeight:700,

          background:
          "linear-gradient(135deg,#22c55e,#38bdf8)",

          WebkitBackgroundClip:
          "text",

          WebkitTextFillColor:
          "transparent"
        }}
        >

          ₹ {totalCost}

        </div>

      </motion.div>

      {/* COST CARDS */}

      <div

      style={{

        display:"grid",

        gridTemplateColumns:
        "repeat(auto-fit,minmax(320px,1fr))",

        gap:30,

        maxWidth:1300,

        margin:"0 auto"
      }}
      >

        {costData.map(
          (item,index)=>(

          <motion.div

          key={index}

          whileHover={{
            y:-8
          }}

          style={{

            background:
            "rgba(255,255,255,0.55)",

            backdropFilter:
            "blur(20px)",

            border:
            "1px solid rgba(255,255,255,0.5)",

            borderRadius:40,

            padding:40,

            boxShadow:
            "0 10px 40px rgba(148,163,184,0.08)"
          }}
          >

            {item.icon}

            <div
            style={{
              marginTop:24,
              color:"#64748b",
              fontSize:18
            }}
            >

              {item.title}

            </div>

            <div
            style={{
              marginTop:14,
              fontSize:52,
              fontWeight:700,
              color:"#0f172a"
            }}
            >

              {item.value}

            </div>

            <div
            style={{
              marginTop:10,
              fontSize:18,
              color:"#94a3b8"
            }}
            >

              {item.unit}

            </div>

            <div
            style={{
              marginTop:30,
              fontSize:18,
              color:"#64748b"
            }}
            >

              {item.price}

            </div>

            <div
            style={{
              marginTop:14,
              fontSize:36,
              fontWeight:700,
              color:"#0f172a"
            }}
            >

              ₹ {Math.round(item.total)}

            </div>

          </motion.div>

        ))}

      </div>

      {/* FLOATING DOCK */}

      <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:0.5
      }}

      style={{

        position:"sticky",

        bottom:20,

        width:"fit-content",

        margin:"50px auto 20px",

        display:"flex",

        gap:16,

        padding:"18px 22px",

        borderRadius:100,

        background:
        "rgba(255,255,255,0.55)",

        backdropFilter:
        "blur(20px)",

        border:
        "1px solid rgba(255,255,255,0.5)",

        boxShadow:
        "0 10px 40px rgba(148,163,184,0.12)"
      }}
      >

      </motion.div>
      <BottomDock />

    </div>
  );
}

export default CostAnalysis;