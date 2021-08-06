import { useForm } from "react-hook-form";

export default function AddProduct(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    const newItem = {
      id: Math.random().toString(7).substring(5),
      ...data
    };
    props.onAdd(newItem);
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Add Product</h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name Product</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (<span className="d-block mt-2 text-danger">Bắt buộc phải nhập trường này</span>)}
        </div>
        <div className="mb-3">
          <label className="form-label">Price Product</label>
          <input
            type="number"
            className="form-control"
            {...register("price", { required: true })}
          />
          {errors.price && (<span className="d-block mt-2 text-danger">Bắt buộc phải nhập trường này</span>)}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            {...register("desciption", { required: true })}
          />
          {errors.price && (<span className="d-block mt-2 text-danger">Bắt buộc phải nhập trường này</span>)}
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="url"
            className="form-control"
            placeholder="Put on link image"
            {...register("src", { required: true })}
          />
          {errors.price && (<span className="d-block mt-2 text-danger">Bắt buộc phải nhập trường này</span>)}
        </div>
        <div className="mb-3">
          <select className="form-control" {...register("status")}>
            <option value="true">Stocking</option>
            <option value="false">Out of stock</option>
          </select>
        </div>
        <div className="mb-3">
                <select className="form-control" {...register("category")}>
                    <option value="iPhone">iPhone</option>
                    <option value="ipad">ipad</option>
                    <option value="Mac">Mac</option>
                    <option value="Watch">Watch</option>
                </select>
            </div>
        <button className="btn btn-primary">Add Product</button>
      </form>
    </>
  );
}
