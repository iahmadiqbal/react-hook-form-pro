import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "Age must be at least 18")
    .required("Age is required"),
  skills: yup
    .array()
    .min(2, "Please select at least 2 skills")
    .required("Please select your skills"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default registerSchema;
