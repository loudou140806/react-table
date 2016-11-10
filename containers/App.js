import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFilter,addLine, deleteLine} from './actions';
import R_Table from '../components/R_Table';
import R_Toobar from '../components/R_toobar';

class App extends Component{
	render(){
		const {dispatch,operation} = this.props;	
		return(
			<div>
				<R_Toobar
					onFilterChange = {
						(text)=>{
							dispatch(doFilter(text));
						}
					}
					onAdd = {
						(data, index) => {
							dispatch(addLine(data, index));
						}
					}
					{...this.props}>
				</R_Toobar>
				<R_Table 
					onDelete = {
						(id) => {
							dispatch(deleteLine(id))
						}
					}
					operation={operation} {...this.props}></R_Table>
			</div>					
			)
	}
}
function select(state){	
	return {
		operation: state.operation
	};
}

export default connect(select)(App);