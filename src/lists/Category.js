import React from 'react';
import { addCategory } from './ListFunctions'

class Category extends React.Component {

	constructor(){
		super()
		this.state = {
            name:'',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e){
		e.preventDefault()

		const newCategory = {
            name: this.state.name,
		}

		addCategory(newCategory).then(res => {
			this.props.history.push('/category-list')
		})
	}


  render() {
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-md-6 mt-5 mx-auto">
    				<form noValidate onSubmit={this.onSubmit}>
    					<h1 className="h3 mb-3 font-weight-normal">
    						Add Category
    					</h1>
                        <div className="form-group">
                            <label htmlFor="name">Category Name</label>
                            <input type="text"
                            className="form-control"
                            name="name"
                            placeholder= "Enter Name"
                            value={this.state.name}
                            onChange={this.onChange} />
                        </div>
    					<button type="submit" className="btn">Add</button>
    				</form>
    			</div>
    		</div>
    	</div>
    );
  }

}

export default Category;