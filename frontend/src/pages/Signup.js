import React, { useState } from "react";

import { motion } from "framer-motion";

import {
  Mail,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";

import { Link, useNavigate }
from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [showPassword,
    setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =====================================
  // LOGIN
  // =====================================

  const handleLogin =
    async (e) => {

      e.preventDefault();

      setError("");

      setLoading(true);

      setTimeout(() => {

        setLoading(false);

        navigate("/");

      }, 1500);
    };

  return (

    <div

      style={{

        minHeight:"100vh",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        overflow:"hidden",

        position:"relative",

        background:
        `
        linear-gradient(
          135deg,
          #eff6ff,
          #ffffff,
          #f5f3ff
        )
        `
      }}
    >

      {/* BACKGROUND BLOBS */}

      <div

        style={{

          position:"absolute",

          width:500,

          height:500,

          borderRadius:"50%",

          background:
          "rgba(56,189,248,0.18)",

          filter:"blur(120px)",

          top:-100,

          left:-100
        }}
      />

      <div

        style={{

          position:"absolute",

          width:500,

          height:500,

          borderRadius:"50%",

          background:
          "rgba(139,92,246,0.18)",

          filter:"blur(120px)",

          bottom:-100,

          right:-100
        }}
      />

      {/* LOGIN CARD */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.7
        }}

        style={{

          width:"420px",

          padding:"45px",

          borderRadius:"40px",

          background:
          "rgba(255,255,255,0.55)",

          backdropFilter:
          "blur(25px)",

          border:
          "1px solid rgba(255,255,255,0.5)",

          boxShadow:
          "0 20px 60px rgba(15,23,42,0.08)",

          position:"relative",

          zIndex:10
        }}
      >

        {/* TITLE */}

        <div
          style={{
            textAlign:"center",
            marginBottom:"35px"
          }}
        >

          <h1

            style={{

              fontSize:"52px",

              fontWeight:700,

              color:"#0f172a",

              marginBottom:"10px"
            }}
          >

            Welcome

          </h1>

          <div

            style={{

              fontSize:"18px",

              color:"#64748b"
            }}
          >

            AI Concrete Intelligence Platform

          </div>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleLogin}
        >

          {/* EMAIL */}

          <div
            style={{
              position:"relative",
              marginBottom:"20px"
            }}
          >

            <Mail

              size={20}

              style={{

                position:"absolute",

                left:"18px",

                top:"20px",

                color:"#64748b"
              }}
            />

            <input

              type="email"

              placeholder="Enter your email"

              value={email}

              onChange={(e)=>
                setEmail(
                  e.target.value
                )
              }

              required

              style={{

                width:"100%",

                padding:
                "18px 18px 18px 55px",

                borderRadius:"18px",

                border:
                "1px solid rgba(203,213,225,0.6)",

                background:
                "rgba(255,255,255,0.7)",

                fontSize:"16px",

                outline:"none",

                boxSizing:"border-box"
              }}
            />

          </div>

          {/* PASSWORD */}

          <div
            style={{
              position:"relative",
              marginBottom:"20px"
            }}
          >

            <Lock

              size={20}

              style={{

                position:"absolute",

                left:"18px",

                top:"20px",

                color:"#64748b"
              }}
            />

            <input

              type={
                showPassword
                ? "text"
                : "password"
              }

              placeholder="Enter your password"

              value={password}

              onChange={(e)=>
                setPassword(
                  e.target.value
                )
              }

              required

              style={{

                width:"100%",

                padding:
                "18px 55px 18px 55px",

                borderRadius:"18px",

                border:
                "1px solid rgba(203,213,225,0.6)",

                background:
                "rgba(255,255,255,0.7)",

                fontSize:"16px",

                outline:"none",

                boxSizing:"border-box"
              }}
            />

            <div

              onClick={()=>
                setShowPassword(
                  !showPassword
                )
              }

              style={{

                position:"absolute",

                right:"18px",

                top:"18px",

                cursor:"pointer",

                color:"#64748b"
              }}
            >

              {showPassword
              ?
              <EyeOff size={20}/>
              :
              <Eye size={20}/>
              }

            </div>

          </div>

          {/* ERROR */}

          {error && (

            <div

              style={{

                color:"#ef4444",

                marginBottom:"15px",

                textAlign:"center"
              }}
            >

              {error}

            </div>

          )}

          {/* BUTTON */}

          <button

            type="submit"

            disabled={loading}

            style={{

              width:"100%",

              padding:"18px",

              border:"none",

              borderRadius:"18px",

              background:
              "linear-gradient(135deg,#38bdf8,#8b5cf6)",

              color:"white",

              fontSize:"18px",

              fontWeight:600,

              cursor:"pointer",

              transition:"0.3s"
            }}
          >

            {loading
            ?
            "Analyzing..."
            :
            "Login"
            }

          </button>

        </form>

        {/* SIGNUP */}

        <div

          style={{

            marginTop:"25px",

            textAlign:"center",

            color:"#64748b"
          }}
        >

          Don’t have an account?{" "}

          <Link

            to="/signup"

            style={{

              color:"#8b5cf6",

              textDecoration:"none",

              fontWeight:600
            }}
          >

            Signup

          </Link>

        </div>

      </motion.div>

    </div>
  );
}