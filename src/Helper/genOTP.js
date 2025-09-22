//funcion que genera una contraseña de 6 digitos (numeros)

export const genOTP = () => {
  let nums = "0123456789";
  const otp = Array.from(
    { length: 6 },
    () => nums[Math.floor(Math.random() * 10)]
  ).join("");
  console.log(otp);
  return otp;
};
export const genOTPLetters = () => {
  let char = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()`;
  const arr = Array.from(
    { length: 6 },
    () => char[Math.floor(Math.random() * 73)]
  ).join("");
  console.log(arr);

  let nums = "0123456789";
  const otp = Array.from(
    { length: 6 },
    () => nums[Math.floor(Math.random() * 10)]
  ).join("");
  console.log(otp);
  return otp;
};
