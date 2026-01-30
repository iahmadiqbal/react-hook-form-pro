import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../components/Schema";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Register Account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("name")}
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("email")}
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          {/* Age */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              placeholder="Enter your age"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("age")}
            />
            <p className="text-red-500 text-sm">{errors.age?.message}</p>
          </div>
          {/* Skills */}
          <div>
            <label className="block text-gray-700 mb-1">Skills</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="JavaScript"
                  {...register("skills")}
                />
                JavaScript
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" value="React" {...register("skills")} />
                React
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value="Next.js"
                  {...register("skills")}
                />
                Next.js
              </label>
            </div>
            <p className="text-red-500 text-sm">{errors.skills?.message}</p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter a secure password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("password")}
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
          {/* Confirm Password */}
          <div>
            <label
              className="block text-gray-700 mb-1"
              htmlFor="confirmpassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmpassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400"
              {...register("confirmpassword")}
            />
            <p className="text-red-500 text-sm">
              {errors.confirmpassword?.message}
            </p>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
