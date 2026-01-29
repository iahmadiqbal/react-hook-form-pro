import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    // console.log(useForm());
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        React Hook Form
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("name", {
              required: "name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
        </div>

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
              required: "age is required",
              min: {
                value: 18,
                message: "Age Must be at least 18",
              },
              max: {
                value: 25,
                message: "Age must be at least 25",
              },
            })}
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
