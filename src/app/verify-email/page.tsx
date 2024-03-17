import Link from "next/link";

const verificationComponent = () => {
  return (
    <div className="">
      <select name="" id="">
        <option value="Eng">Eng</option>
        <option value="Ara">Ara</option>
      </select>
      <h2>
        A verification link in sent to your email, go to your email to activate
        your account
      </h2>
      <h2>code not sent ?</h2>
      <button>resend the code</button>
    </div>
  );
};
export default verificationComponent;
