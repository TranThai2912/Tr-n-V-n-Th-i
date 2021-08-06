import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authAPI from "../../api/authAPI";
import { authenticate, isauthenticate } from "../../auth";
import { Redirect } from "react-router-dom";

const SigninPage = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { id } = isauthenticate();
  const onSubmit = async (user) => {
    try {
      const { data } = await authAPI.signin(user)
      authenticate(data.user)
      setSuccess(true)
    } catch (error) {
      setError(error.response.data)
    }
  }
  const redectUser = () => {
    if(success){
      if(id == 1){
        return <Redirect to="/admin" />
      }else{
        return <Redirect  to="/"/>
      }
    }
  }
  return (
    <div className="col-6 mx-auto mt-2">
      {redectUser()}
      <h2> LogIn</h2>
      <hr />
      {error && <div className="alert alert-danger">{error}</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
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
          SignIn
        </button>
      </form>
    </div>
  );
};
export default SigninPage;
