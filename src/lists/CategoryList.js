import React from 'react';
import { getCategory } from './ListFunctions'


class CategoryList extends React.Component {

    constructor(){
        super()
        this.state = {
            name:'',
            status: '',
        }
    }

    componentDidMount() {
        getCategory().then(res => {
            this.setState({
                name: res.name,
                status: res.status
            })
        })
    }


  render() {
    return (
        <div className="container">
            <div className="jumbotron mt-5">    
                <div className="col-sm-4 mx-auto">
                    <h1 className="text-center">Category List</h1>
                </div>
                <table className="table col-md-4 mx-auto">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{this.state.status}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
  }

}

export default CategoryList;