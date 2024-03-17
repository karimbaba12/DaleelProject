"use client";
import Link from "next/link";
const SignInComponent = () => {
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
        <h3>sign in with email or password</h3>
      </div>
      <div>
        Email <input type="text" />
      </div>

      <div>
        Password <input type="text" />
      </div>

      <div>
        <button>Sign In</button>
      </div>
      <div>
        <Link href="/signup">Dont have an accout Register Now</Link>
      </div>
    </div>
  );
};

export default SignInComponent;
