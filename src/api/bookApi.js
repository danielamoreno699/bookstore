import axios from "axios";


const bookApi = axios.create({
  baseUrl:
    "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PfDhhGhPeOhVMEoyWcnd/books",
});

export const getBooksApi = async () => {
  try {
    const response = await axios.get(
      "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PfDhhGhPeOhVMEoyWcnd/books"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};

export const postBookApi = async (data) => {
  try {
    await axios.post(
      "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PfDhhGhPeOhVMEoyWcnd/books",
      data
    );
  } catch (error) {
    console.error("Error posting book:", error);
    throw error;
  }
};

export const deleteBookApi = async (id) => {
    try {
      await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PfDhhGhPeOhVMEoyWcnd/books/${id}` );
     
    } catch (error) {
      console.error("Error posting book:", error);
      throw error;
    }
  };



export default bookApi;