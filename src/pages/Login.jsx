import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useUserContext } from "../context/UserContext"
import Loader from "../components/Loader"
import { User, Lock } from "lucide-react"
import { Link } from "react-router-dom"

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters"),
})

const Login = () => {
  const { login, loading } = useUserContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onFormSubmit = (data) => {
    login(data.username, data.password)
  }

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900/70 backdrop-blur-sm"></div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-6 w-full max-w-sm z-10 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
      >
        <h1 className="text-center font-bold text-3xl text-white">
          Welcome Back
        </h1>

        <div className="relative">
          <User
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            {...register("username")}
            className={`w-full bg-black/30 h-14 rounded-lg pl-12 pr-4 border-2 outline-none placeholder:text-gray-400 text-white transition-colors duration-300 ${
              errors.username
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-green-500"
            }`}
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div className="relative">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="password" 
            {...register("password")}
            className={`w-full bg-black/30 h-14 rounded-lg pl-12 pr-4 border-2 outline-none placeholder:text-gray-400 text-white transition-colors duration-300 ${
              errors.password
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-green-500"
            }`}
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading} 
          className="w-full flex items-center justify-center h-14 font-bold bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {loading ? <Loader /> : "Login"}
        </button>

        <p className="text-center text-gray-300">
          Don&#39;t have an account?{" "}
          <Link
            to={"https://www.themoviedb.org/signup"}
            className="font-bold text-green-400 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
