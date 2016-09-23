import React, { Component } from 'react';
import { render } from 'react-dom';

class Todo extends Component {
  constructor() {
    super() 
      let data = [{"id": "001", "todo": "Study Data Structures", "complete": "false"}, {"id": "002", "todo": "Study Recursion", "complete": "false"}, {"id": "003", "todo": "Study React", "complete": "false"}];

      this.state = {data: data}
    
  }

  handleTodoRemove(id) {
    let data = this.state.data;
    data = data.filter( (item) => item.id !== id);
    this.setState({data: data});
  }

  handleSubmit(todo) {
    let data = this.state.data;
    let id = Math.floor(Math.random()*900) + 100;
    let complete = "false";
		data = data.concat([{id, todo, complete}]);
    this.setState({data: data});
  }

  handleToggleComplete(id) {
		var data = this.state.data;
		for (var key in data) {
			if (data[key].id === id) {
				data[key].complete = data[key].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
		this.setState({data: data});
		return;
	}

  render() {
		return (
			<div className="well">
				<h1 className="vert-offset-top-0">To do:</h1>
				<TodoList data={this.state.data} removeNode={this.handleTodoRemove} toggleComplete={this.handleToggleComplete} />
				<TodoForm onTaskSubmit={this.handleSubmit} />
			</div>
		);
	}
}

const TodoList = (props) => {

  removeNode(id) {
     props.removeNode(id);
  }

  toggleComplete(id) {
     props.toggleComplete(id);
  }

  render() {
    let listitems = props.data.map( (item) => {
      return (
				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
			);
		},this);

    return (
      <ul className="list-group">
        {listitems}
      </ul>
    )
  }
}



const TodoItem = (props) => {
  removeTodo(e) {
    e.preventDefault();
		props.removeNode(props.nodeId);
  }

  toggleComplete(e) {
    e.preventDefault();
    props.toggleComplete(props.nodeId);
  }

  render() {
		var classes = 'list-group-item clearfix';
		if (this.props.complete === 'true') {
			classes = classes + ' list-group-item-success';
		}
		return (
			<li className={classes}>
				{this.props.task}
				<div className="pull-right" role="group">
					<button type="button" className="btn btn-xs btn-success img-circle" onClick={this.toggleComplete}>&#x2713;</button> <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.removeNode}>&#xff38;</button>
				</div>
			</li>
		);
	}
}

const TodoForm = React.createClass({
	doSubmit: function (e) {
		e.preventDefault();
		var task = React.findDOMNode(this.refs.task).value.trim();
		if (!task) {
			return;
		}
		this.props.onTaskSubmit(task);
		React.findDOMNode(this.refs.task).value = '';
		return;
	},
	render: function() {
		return (
			<div className="commentForm vert-offset-top-2">
				<hr />
				<div className="clearfix">
					<form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
						<div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label">Task</label>
							<div className="col-md-10">
								<input type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-10 col-md-offset-2 text-right">
								<input type="submit" value="Save Item" className="btn btn-primary" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
});


// var TodoItem = React.createClass({
// 	removeNode: function (e) {
// 		e.preventDefault();
// 		this.props.removeNode(this.props.nodeId);
// 		return;
// 	},
// 	toggleComplete: function (e) {
// 		e.preventDefault();
// 		this.props.toggleComplete(this.props.nodeId);
// 		return;
// 	},
// 	updateClass: function () {
		
// 	},
// 	render: function() {
// 		var classes = 'list-group-item clearfix';
// 		if (this.props.complete === 'true') {
// 			classes = classes + ' list-group-item-success';
// 		}
// 		return (
// 			<li className={classes}>
// 				{this.props.task}
// 				<div className="pull-right" role="group">
// 					<button type="button" className="btn btn-xs btn-success img-circle" onClick={this.toggleComplete}>&#x2713;</button> <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.removeNode}>&#xff38;</button>
// 				</div>
// 			</li>
// 		);
// 	}
// });

// // var TodoList = React.createClass({
// 	removeNode: function (nodeId) {
// 		this.props.removeNode(nodeId);
// 		return;
// 	},
// 	toggleComplete: function (nodeId) {
// 		this.props.toggleComplete(nodeId);
// 		return;
// 	},
// 	render: function() {
// 		var listNodes = this.props.data.map(function (listItem) {
// 			return (
// 				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
// 			);
// 		},this);
// 		return (
// 			<ul className="list-group">
// 				{listNodes}
// 			</ul>
// 		);
// 	}
// });


// var TodoBox = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			data: [
// 				{"id":"00001","task":"Wake up","complete":"false"},
// 				{"id":"00002","task":"Eat breakfast","complete":"false"},
//         {"id":"00003","task":"Go to work","complete":"false"}
// 			]
// 		};
// 	},

// 	handleNodeRemoval: function (nodeId) {
// 		var data = this.state.data;
// 		data = data.filter(function (el) {
// 			return el.id !== nodeId;
// 		});
// 		this.setState({data});
// 		return;
// 	},
// 	handleSubmit: function (todo) {
// 		var data = this.state.data;
// 		var id = this.generateId().toString();
// 		var complete = 'false';
// 		data = data.concat([{id, todo, complete}]);
// 		this.setState({data});
// 	},
// 	handleToggleComplete: function (nodeId) {
// 		var data = this.state.data;
// 		for (var i in data) {
// 			if (data[i].id == nodeId) {
// 				data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
// 				break;
// 			}
// 		}
// 		this.setState({data});
// 		return;
// 	},
// 	render: function() {
// 		return (
// 			<div className="well">
// 				<h1 className="vert-offset-top-0">To do:</h1>
// 				<TodoList data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete} />
// 				<TodoForm onTaskSubmit={this.handleSubmit} />
// 			</div>
// 		);
// 	}
// });



var TodoList = React.createClass({
	removeNode: function (nodeId) {
		this.props.removeNode(nodeId);
		return;
	},
	toggleComplete: function (nodeId) {
		this.props.toggleComplete(nodeId);
		return;
	},
	render: function() {
		var listNodes = this.props.data.map(function (listItem) {
			return (
				<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
			);
		},this);
		return (
			<ul className="list-group">
				{listNodes}
			</ul>
		);
	}
});

var TodoItem = React.createClass({
	removeNode: function (e) {
		e.preventDefault();
		this.props.removeNode(this.props.nodeId);
		return;
	},
	toggleComplete: function (e) {
		e.preventDefault();
		this.props.toggleComplete(this.props.nodeId);
		return;
	},
	updateClass: function () {
		
	},
	render: function() {
		var classes = 'list-group-item clearfix';
		if (this.props.complete === 'true') {
			classes = classes + ' list-group-item-success';
		}
		return (
			<li className={classes}>
				{this.props.task}
				<div className="pull-right" role="group">
					<button type="button" className="btn btn-xs btn-success img-circle" onClick={this.toggleComplete}>&#x2713;</button> <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.removeNode}>&#xff38;</button>
				</div>
			</li>
		);
	}
});

var TodoForm = React.createClass({
	doSubmit: function (e) {
		e.preventDefault();
		var task = React.findDOMNode(this.refs.task).value.trim();
		if (!task) {
			return;
		}
		this.props.onTaskSubmit(task);
		React.findDOMNode(this.refs.task).value = '';
		return;
	},
	render: function() {
		return (
			<div className="commentForm vert-offset-top-2">
				<hr />
				<div className="clearfix">
					<form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
						<div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label">Task</label>
							<div className="col-md-10">
								<input type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-10 col-md-offset-2 text-right">
								<input type="submit" value="Save Item" className="btn btn-primary" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

React.render(
	<TodoBox />,
	document.getElementById('todoBox')
);