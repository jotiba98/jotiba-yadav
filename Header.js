import React from 'react'

function Header(props) {
  const {search,onInput,onSearch}=props;
    return (
        <div className="jumbotron">
            <h1 className="display-1"> 
            <span class="material-icons">
 fastfood</span>Food Recipe</h1>
 <div class="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="Search Your Recipes..." value={search}
  onChange={onInput}/>
  <div class="input-group-append">
  <button className="btn btn-dark" onClick={onSearch}>search</button>
  </div>
</div>
  </div>
    )
}

export default Header
