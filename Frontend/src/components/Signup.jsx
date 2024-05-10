import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("signup succesfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <div
      className="flex h-screen justify-center items-center
    "
    >
      <div className=" w-[400px] ">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>
            <div>
              <label className="mt-5">Name : </label>
              <br />
              <input
                className="my-2 w-80 rounded-md outline-none  "
                type="text"
                placeholder="Enter your Name"
                {...register("fullName", { required: true })}
              />
              <br />
              {errors.fullName && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
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
                Signup
              </button>
              <p>
                Have Acccount?{" "}
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="underline text-blue-500 cursor-pointer"
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
