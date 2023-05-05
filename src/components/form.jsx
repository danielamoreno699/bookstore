const Form = () => {
    const authors = [
      { name: 'Author 1', value: 'title1' },
      { name: 'Author 2', value: 'title2' },
      { name: 'Author 3', value: 'title3' },
    ];
  
    return (
      <>
        <div className="form-container">
          <h3>Add new Book</h3>
          <form className="form">
            <input
              type="text"
              placeholder="book title"
              className="input"
            />
            <select className="input">
              <option value="" selected disabled hidden>
                Select author
              </option>
              {authors.map(author => (
                <option key={author.value} value={author.value}>
                  {author.name}
                </option>
              ))}
            </select>
  
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  };
  
  export default Form;
  