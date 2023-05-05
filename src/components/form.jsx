

const Form = () => {
    return (
  
      <>
      <div className="form-container">
      <h3>Add new Book</h3>
      <form className="form">
            <input
                type="text"
                placeholder="book title"
                className="input" />
            <select className="input">
                <option value="" selected disabled hidden>
                    Select author
                </option>
                <option value="title1">Author 1</option>
                <option value="title2">Author 2</option>
                <option value="title3">Author 3</option>
            </select>
  
            <button className="btn-submit" type="submit">Submit</button>
  
  
  
        </form>
        </div>
        </>
    )
  }
  export default Form