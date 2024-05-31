import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://bookstore-api-sandy.vercel.app/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("login succesfully");
          toast.success("login succesfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("Error: " + err.response.data.message);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div>
              <label className="mt-5">Email : </label>
              <br />
              <input
                className="my-2 w-80 rounded-md outline-none"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <label className="mt-5 ">Password : </label>
              <br />
              <input
                className="my-2 w-80 rounded-md outline-none"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white py-1 px-2 rounded-md">
                Login
              </button>
              <p>
                Not register?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
