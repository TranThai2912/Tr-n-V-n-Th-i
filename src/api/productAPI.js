import instance from "./axios";
const productAPI ={
  getAll() {
    const url =  `/products`;
    return instance.get(url);
  },
  get(id) {
    const url = `./products/${id}`;
    return instance.get(url);
  },
  add(item) {
    const url = `./products`;
    return instance.post(url, item);
  },
  remove(id){
    const url = `./products/${id}`;
    return instance.delete(url);
  },
  edit(item) {
    const url = `./products/${item.id}`;
    return instance.put(url, item);
  }
}
export default productAPI

