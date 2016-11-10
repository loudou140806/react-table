import React,{ Component } from 'react';
import common from '../app/common.js';

export default class R_Toobar extends Component{
	onFilterChange(e){
		let value = e.target.value;
		this.props.onFilterChange(value.trim());
	}
	onAdd(e){
		var item = common.getData()[0];
		this.props.onAdd(item, item.id);
		this.props.data.push(item);
	}
	render(){
		return (
			<div className="form-inline">
				<div className="form-group">
					<label>搜索：</label>
					<input type="text" className="form-control" placeholder="请输入搜索关键词" onChange = {e => this.onFilterChange(e)}/>
				</div>
				<div className="form-group">
					<label>增加一行：</label>
					<button className="btn btn-success" onClick = {(e) => this.onAdd(e)}>增加</button>
				</div>
			</div>
		)
	}
}
