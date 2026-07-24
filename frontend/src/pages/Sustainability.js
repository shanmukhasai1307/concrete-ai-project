import BottomDock from "../components/BottomDock";
import React, {
  useEffect
} from "react";

import { useNavigate }
from "react-router-dom";
import {
  Leaf,
  ShieldCheck,
  Droplets,
  Recycle
} from "lucide-react";

import { motion }
from "framer-motion";

function Sustainability() {
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
  // SUSTAINABILITY SCORE
  // ====================================

  let sustainabilityScore =
    50;

  if (
    result.mix.flyash > 0
  ) {

    sustainabilityScore += 20;
  }

  if (
    result.mix.slag > 0
  ) {

    sustainabilityScore += 15;
  }

  if (
    result.water_cement_ratio
    <= 0.5
  ) {

    sustainabilityScore += 15;
  }

  // ====================================
  // SAFETY STATUS
  // ====================================

  let safetyStatus = "";
  let safetyColor = "";

  if (
    sustainabilityScore >= 90
  ) {

    safetyStatus =
      "EXCELLENT";

    safetyColor =
      "#16a34a";
  }

  else if (
    sustainabilityScore >= 70
  ) {

    safetyStatus =
      "SAFE";

    safetyColor =
      "#22c55e";
  }

  else if (
    sustainabilityScore >= 50
  ) {

    safetyStatus =
      "MODERATE";

    safetyColor =
      "#f59e0b";
  }

  else {

    safetyStatus =
      "LOW SAFETY";

    safetyColor =
      "#ef4444";
  }

  // ====================================
  // AI RECOMMENDATIONS
  // ====================================

  let recommendations = [];

  if (
    sustainabilityScore >= 90
  ) {

    recommendations = [

      "Excellent sustainability profile with optimized supplementary cementitious materials.",

      "Concrete mix demonstrates strong environmental performance and durability.",

      "Current fly ash and slag ratios are highly efficient for long-term sustainability.",

      "Water-cement ratio is balanced for both strength and eco-efficiency."
    ];
  }

  else if (
    sustainabilityScore >= 70
  ) {

    recommendations = [

      "Increase fly ash content slightly for improved carbon reduction.",

      "Consider reducing cement quantity for better sustainability balance.",

      "Optimize aggregate distribution to reduce embodied energy.",

      "Water management can further improve durability and lifecycle performance."
    ];
  }

  else {

    recommendations = [

      "Increase fly ash usage to improve eco-friendliness.",

      "Reduce water-cement ratio for stronger and more durable concrete.",

      "Introduce slag materials for lower carbon footprint.",

      "Optimize cement usage to reduce environmental impact."
    ];
  }

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

      overflow:"hidden",

      position:"relative"
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

          Sustainability

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

          AI-powered sustainability
          evaluation and environmental
          performance intelligence for
          optimized concrete systems.

        </p>

      </motion.div>

      {/* SCORE GRID */}

      <div

      style={{

        display:"grid",

        gridTemplateColumns:
        "repeat(auto-fit,minmax(280px,1fr))",

        gap:30,

        maxWidth:1300,

        margin:"70px auto"
      }}
      >

        {/* SCORE */}

        <motion.div

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

          padding:45,

          boxShadow:
          "0 10px 40px rgba(148,163,184,0.08)"
        }}
        >

          <Leaf
          size={34}
          color="#22c55e"
          />

          <div
          style={{
            marginTop:25,
            color:"#64748b",
            fontSize:18
          }}
          >

            Sustainability Score

          </div>

          <div
          style={{
            marginTop:18,

            fontSize:90,

            fontWeight:700,

            background:
            "linear-gradient(135deg,#38bdf8,#8b5cf6)",

            WebkitBackgroundClip:
            "text",

            WebkitTextFillColor:
            "transparent"
          }}
          >

            {sustainabilityScore}

          </div>

        </motion.div>

        {/* SAFETY */}

        <motion.div

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

          padding:45,

          boxShadow:
          "0 10px 40px rgba(148,163,184,0.08)"
        }}
        >

          <ShieldCheck
          size={34}
          color={safetyColor}
          />

          <div
          style={{
            marginTop:25,
            color:"#64748b",
            fontSize:18
          }}
          >

            Safety Status

          </div>

          <div
          style={{
            marginTop:18,
            fontSize:42,
            fontWeight:700,
            color:safetyColor
          }}
          >

            {safetyStatus}

          </div>

        </motion.div>

        {/* WATER RATIO */}

        <motion.div

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

          padding:45,

          boxShadow:
          "0 10px 40px rgba(148,163,184,0.08)"
        }}
        >

          <Droplets
          size={34}
          color="#06b6d4"
          />

          <div
          style={{
            marginTop:25,
            color:"#64748b",
            fontSize:18
          }}
          >

            Water-Cement Ratio

          </div>

          <div
          style={{
            marginTop:18,
            fontSize:72,
            fontWeight:700,
            color:"#0f172a"
          }}
          >

            {result.water_cement_ratio}

          </div>

        </motion.div>

      </div>

      {/* AI RECOMMENDATIONS */}

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
        delay:0.3
      }}

      style={{

        maxWidth:1300,

        margin:"0 auto",

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
          display:"flex",
          alignItems:"center",
          gap:16,
          marginBottom:40
        }}
        >

          <Recycle
          size={36}
          color="#8b5cf6"
          />

          <div
          style={{
            fontSize:42,
            fontWeight:700
          }}
          >

            AI Recommendations

          </div>

        </div>

        <div
        style={{
          display:"grid",
          gap:24
        }}
        >

          {recommendations.map(
            (item,index)=>(

            <motion.div

            key={index}

            whileHover={{
              x:8
            }}

            style={{

              background:
              "rgba(255,255,255,0.45)",

              border:
              "1px solid rgba(255,255,255,0.4)",

              padding:30,

              borderRadius:30,

              fontSize:18,

              lineHeight:1.8,

              color:"#334155"
            }}
            >

              {item}

            </motion.div>

          ))}

        </div>

      </motion.div>

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

export default Sustainability;