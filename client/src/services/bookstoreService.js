import http from "./httpService";
import { getBookByGenre } from "./bookService";

const apiUrl = process.env.REACT_APP_API_URL;

let apiEndpoint = apiUrl + "/bookstores";

export function getAllBookstores() {
  return http.get(apiEndpoint);
}

export function createBookstore(obj) {
  return http.post(apiEndpoint,obj);
}

export function addInventoryToBookstore(id, inventory) {
  return http.put(apiEndpoint + "/" + id + "/add", inventory);
}


export function getBookStoreById(id) {
    return http.get(apiEndpoint + "/" + id);
  }

  //navbar helper
  export function getBookStoreByOwnerId(id) {
    return http.get(apiEndpoint + "/owner/" + id);
  }

  export function deleteBookstore(id) {
    return http.delete(apiEndpoint + "/" + id);
  }

  // /:id/book/:bookID

  export function deleteBookFromBookstore(storeID,bookID) {
    return http.delete(apiEndpoint + "/" + storeID+"/book/"+bookID);
  }
