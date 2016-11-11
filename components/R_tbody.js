import style from './index.css';
import React,{ Component } from 'react';
import common from '../app/common.js';

export default class R_tbody extends Component{
	onDelete(e){
		let index = e.target.id;
		this.props.onDelete(index);
	} 
	render () {
		let operation = this.props.operation,
			len = 1,
			filterWord= null,
			data = this.props.data;

		if(operation.length !== 0){		 
			len = this.props.data.length;
			filterWord = operation.FILTER;
		}

		if(filterWord){	
			data = data.filter((item,index)=>{
				let keys = Object.keys(item);
				for (var i = 0; i < keys.length; i++) {
					let cell = item[keys[i]];
					if(String(cell).toLowerCase().indexOf(filterWord.toLowerCase()) != -1){
						return item;
					}
				}
			})
		}
		else{
			data = this.props.data;
		}

		if(operation.DELETE){
			console.log('this is in delete' + operation.DELETE);
			let dIndex;
			data = data.filter((item,index)=>{
				if(item.id != operation.DELETE){
					return item;
				}else{
					console.log('index equal');
					dIndex = index;
				}
			});
			if(dIndex){
				this.props.data.splice(dIndex, 1);
			}
		}
		return (
			<tbody>
				{
					data.map((item,i)=>{
						if(i < Number(len)){
							return (
								<tr key={item.id}>
									<td>{i+1}</td>
									<td>{item.id}</td>
									<td>{item.hostName}</td>									
									<td>{item.os}</td>
									<td>{item.account}</td>
									<td>{item.ip}</td>
									<td>{item.port}</td>
									<td><span id={item.id} className="btn btn-warning" onClick = {this.onDelete.bind(this)}>删除</span></td>
								</tr>
							)												
						}
					})
				}
			</tbody>
		)
	}
}