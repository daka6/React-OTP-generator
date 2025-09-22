import React, { useState, useRef, useEffect } from "react";
import CountDownCounter from "./CounteDownCounter";

const OtpComponent = () => {
  const otpDisplayRef = useRef(null); //recupero el h2 que muestra
  const [code, setCode] = useState("Click 'Generate OTP' to get a code");
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false); //estado del boton: habilitado - deshabilitado
  const [timer, setTimer] = useState(0);

  //efecto para la cuenta atras
  useEffect(() => {
    if (timer <= 0) return; //stop counting if timer <= 0

    const interval = setInterval(() => {
      setTimer((ant) => {
        if (ant <= 1) {
          clearInterval(interval);
          setDisabled(false);
          return 0;
        }
        return ant - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const generarOTP = () => {
    const numeros = "0123456789";
    return Array.from(
      { length: 6 },
      () => numeros[Math.floor(Math.random() * 10)]
    ).join("");
  };

  const handleClick = () => {
    setCode(generarOTP());
    setVisible(true);
    setDisabled(true);
    setTimer(5); // 5 segundos de expiración
    if (otpDisplayRef.current) {
      otpDisplayRef.current.style.color = "#36d804";
    }
  };

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display" ref={otpDisplayRef}>
        {code}
      </h2>

      {visible && (
        <p id="otp-timer">
          {timer > 0
            ? `Expires in: ${timer} seconds`
            : " OTP expired. Click the button to generate a new OTP."}
        </p>
      )}

      <button
        id="generate-otp-button"
        onClick={handleClick}
        disabled={disabled}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OtpComponent;
