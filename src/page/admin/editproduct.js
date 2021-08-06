import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import productAPI from "../../api/productAPI";
export default function EditProduct(props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const history = useHistory();
  const {id} = useParams();
  const [update, setUpdate] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const {data} = await productAPI.get(id);
        setUpdate(data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct();
  }, [])

  const onSubmit = (data) => {
    const newItem = {
      id,
      ...data
    };
    props.onEdit(newItem);
    history.push("/admin/products")
  };
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Update Product</h1>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name Product</label>
          <input
            type="text"
            className="form-control"
            defaultValue={update.name}
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price Product</label>
          <input
            type="number"
            className="form-control"
            defaultValue={update.price}
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            defaultValue={update.desciption}
            {...register("desciption")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Iamge</label>
          <input
            type="url"
            className="form-control"
            defaultValue={update.src}
            {...register("src")}
          />
        </div>
        <div className="mb-3">
          <select className="form-control" {...register("status")}
          defaultValue={update.status}>
            <option value="true">Stocking</option>
            <option value="false">Out of stock</option>
          </select>
        </div>
        <button className="btn btn-primary">Update Product</button>
      </form>
    </>
  );
}
