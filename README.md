# React Registration Form Project

This project demonstrates a **fully functional registration form** built in React, evolving from a **basic HTML form** to a **React Hook Form with advanced validation**. The project covers multiple aspects of form handling including **state management, validation, conditional inputs, and array inputs**.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Form Features](#form-features)
4. [React Hook Form Integration](#react-hook-form-integration)
5. [Yup Validation](#yup-validation)
6. [Skills Selection Feature](#skills-selection-feature)
7. [Password & Confirm Password Validation](#password--confirm-password-validation)
8. [Age Validation](#age-validation)
9. [Console Logging Form Data](#console-logging-form-data)
10. [Usage](#usage)
11. [Screenshots](#screenshots)

---

## Project Overview

This project demonstrates the step-by-step evolution of a registration form:

1. **Basic HTML Form** – Simple form with input fields and submit button.
2. **React State Form** – Managed form state using `useState`.
3. **React Hook Form** – Replaced manual state management with `react-hook-form` for better performance and cleaner code.
4. **Validation with Yup** – Added **schema-based validation** for fields like name, email, password, confirm password, age, and skills.
5. **Skills Selection** – Implemented checkboxes to allow multiple skill selection with a **minimum requirement**.

---

## Technologies Used

- React.js
- React Hook Form
- Yup (Validation Schema)
- Tailwind CSS (Styling)
- JavaScript (ES6+)

---

## Form Features

The registration form includes:

- **Name** – Required field.
- **Email** – Required and must be valid email format.
- **Password** – Minimum 6 characters.
- **Confirm Password** – Must match password.
- **Age** – Must be a number and at least 18.
- **Skills** – User must select at least 2 skills.

The form is fully **responsive** and styled with **Tailwind CSS**.

---

## React Hook Form Integration

- Used `react-hook-form` to manage form state efficiently.
- The `register` function is used to link input fields to the form.
- `handleSubmit` is used to process form submission.
- Validation errors are accessed via `formState.errors`.

Example usage:

```javascript
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: yupResolver(registerSchema),
});
```

---

## Yup Validation

- Yup is used for **schema-based validation**, keeping the form logic separate.
- Validation rules include required fields, minimum length, numeric checks, and matching passwords.

Example:

```javascript
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
```

---

## Skills Selection Feature

- Implemented as **checkboxes** allowing multiple skills selection.
- At least **2 skills** must be selected.
- Skills are submitted as an **array**.

Example:

```javascript
<label>
  <input type="checkbox" value="JavaScript" {...register("skills")} /> JavaScript
</label>
<label>
  <input type="checkbox" value="React" {...register("skills")} /> React
</label>
<label>
  <input type="checkbox" value="Next.js" {...register("skills")} /> Next.js
</label>
```

---

## Password & Confirm Password Validation

- Password must be **minimum 6 characters**.
- Confirm password must **match the password field**.
- Validation handled via **Yup schema** with `yup.ref("password")`.

---

## Age Validation

- Age must be a **number**.
- Minimum age allowed is **18**.
- Validation handled with Yup `.number().min(18)`.

---

## Console Logging Form Data

- On form submission, all input values are logged to the **browser console** for testing.
- Example output:

```json
{
  "name": "Ahmad Dev",
  "email": "ahmad@example.com",
  "age": 25,
  "skills": ["JavaScript", "React"],
  "password": "secret123",
  "confirmpassword": "secret123"
}
```

---

## Usage

1. Clone the repository:

```bash
git clone https://github.com/yourusername/react-registration-form.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm start
```

4. Open browser at [http://localhost:3000](http://localhost:3000)

