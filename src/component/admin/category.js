import { useForm } from "react-hook-form";
import CateDetail from "./cateDetail";

const CategoryPage = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    const onSubmit = (category) => {
        return category
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h2 className="h2">Category</h2>
                </div>
                    <div className="mb-3">
                        <select className="form-control" {...register("category")}>
                            <option value="iPhone">iPhone</option>
                            <option value="ipad">ipad</option>
                            <option value="Mac">Mac</option>
                            <option value="Watch">Watch</option>
                        </select>
                    </div>
                <button className="btn btn-primary">Show Product</button>
            </form>     
            <CateDetail />      
        </>
    )
}
export default CategoryPage