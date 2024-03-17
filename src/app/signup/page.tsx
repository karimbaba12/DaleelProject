// export default function signup() {
// <div className="">
//   <button>hello</button>
//   <button></button>
//   <button></button>
//   <button></button>

//   <div> </div>
//   <div></div>
//   <div></div>
//   <div></div>
//   <button></button>
// </div>;
// }

"use client";

import Link from "next/link";
const SignUpButton = () => {
  return (
    <div className="">
      <select name="" id="">
        <option value="Eng">Eng</option>
        <option value="Ara">Ara</option>
      </select>
      <button>Google</button>
      <button>Facebook</button>
      <button>twitter or X</button>
      <button>Linked in</button>

      <div>
        <h3>-or-</h3>
      </div>
      <div>
        <h3>sign up with email or password</h3>
      </div>
      <div>
        Email <input type="text" />
      </div>

      <div>
        Password <input type="text" />
      </div>
      <div>
        Comfirm password
        <input type="text" />
      </div>
      <div>
        <button>Sign Up</button>
      </div>
      <div>
        <Link href="/signin">Already have an account ?</Link>
      </div>
    </div>
  );
};
export default SignUpButton;
