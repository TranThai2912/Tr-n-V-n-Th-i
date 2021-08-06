import { Link } from "react-router-dom";

const ListProductAdmin = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2 className="h2">Quản lý sản phẩm</h2>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/add" className="btn btn-sm btn-outline-primary">
            Add Products
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price ($)</th>
              <th scope="col">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.desciption}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onRemove(item.id)}
                  >
                    Delete
                  </button>
                  <Link className="btn btn-primary btn-sm ms-2" to={ `/admin/products/${item.id}/edit`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListProductAdmin
