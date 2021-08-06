import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import authAPI from "../../api/authAPI";
import { authenticate } from "../../auth";

const SignupPage = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const onSubmit = async (user, e) => {
      try {
        const {data} = await authAPI.signup(user);
        authenticate(data.user)
        setSuccess(true);
        e.target.reset();
     } catch (error) {
        setError(error.response.data)
     }
  }
  return (
    <div className="col-6 mx-auto mt-2">
      <h2>Registration</h2>
      <hr />
      {error && <div className="alert alert-danger mb-10">{error}</div>}
      {success && <div className="alert alert-success">Congratulations on your successful account registration! Click to <Link to="/signin">login</Link></div>}
      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            {...register("username")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          SignUp
        </button>
      </form>
    </div>
  );
};
export default SignupPage;
