import { useForm } from "react-hook-form";
import { useEffect } from "react";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // const watchName = watch(["name", "email", "age"]);
  const WatchName = watch();

  useEffect(() => {
    console.log(WatchName);
  }, [WatchName]);
  return (
    <>
      {/* <p className="text-red-500">{JSON.stringify(WatchName)}</p> */}
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          React Hook Form
        </h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* NAME */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* AGE */}
          <div className="flex flex-col">
            <label htmlFor="age" className="mb-1 font-medium text-gray-700">
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("age", {
                valueAsNumber: true,
                required: "Age is required",
                min: {
                  value: 18,
                  message: "Age must be at least 18",
                },
                max: {
                  value: 25,
                  message: "Age must be at most 25",
                },
              })}
            />
            {errors.age && <p className="text-red-500">{errors.age.message}</p>}
          </div>

          {/* To check the Gender */}
          <label className="font-medium" htmlFor="gender">
            Gender
          </label>

          <div className="flex gap-4">
            <label htmlFor="male">
              <input
                type="radio"
                value="male"
                {...register("gender", { required: true })}
              />
              Male
            </label>

            <label htmlFor="female">
              <input type="radio" value="female" {...register("gender")} />
              Female
            </label>
          </div>

          {errors.gender && <p className="text-red-500">Gender is required</p>}

          {/* To check the Skills */}
          <label className="font-medium" htmlFor="skills">
            Skills
          </label>

          <div className="flex gap-4">
            <label htmlFor="skills">
              <input
                type="checkbox"
                value="React"
                {...register("skills", {
                  required: "At least one skill is required",
                })}
              />
              React
            </label>

            <label htmlFor="skills">
              <input type="checkbox" value="Node" {...register("skills")} />
              Node
            </label>

            <label htmlFor="skills">
              <input type="checkbox" value="MongoDB" {...register("skills")} />
              MongoDB
            </label>
          </div>

          {errors.skills && (
            <p className="text-red-500">{errors.skills.message}</p>
          )}

          {/* COUNTRY */}
          <div className="flex flex-col">
            <label htmlFor="country" className="mb-1 font-medium text-gray-700">
              Country:
            </label>
            <select
              id="country"
              className="px-3 py-2 border rounded-lg"
              {...register("country", {
                required: "Country is required",
              })}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Bangladesh">Bangladesh</option>
            </select>

            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
