var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyUp={props.onSearch.bind(this, "hello")}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

window.Search = Search;
