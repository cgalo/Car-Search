import React from 'react'

type MyProps = {
    InputHandler: (input: String) => void;
};
type MyState = {searchInput: string};

class SearchBar extends React.Component <MyProps, MyState>{
    state : MyState = {
        searchInput: ""
    };

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        this.setState ({
            searchInput: event.target.value
        });
    };
    
    onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        this.props.InputHandler(this.state.searchInput);
    };

     render (){
         return (
             <div className="ui segment">
                 <form className="ui form" onSubmit={this.onFormSubmit}>
                     <div className="field">
                         <label> Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.searchInput}
                            onChange={ this.onInputChange}
                        />
                     </div>
                     
                </form>
             </div>
         );
     }
}

export default SearchBar;