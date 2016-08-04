const Hello = React.createClass({
  getInitialState: function () {
    return {
        name: '1234'
    }
  },
  change: function () {
      //const name = 'chenqiuling';
      this.setState({
          name: 'chenqiuling'
      })
  },
  render: function() {
    return <div>
      Hello
      <Name  name={this.state.name} change={this.change}/>
    </div>;
  }
});

const Name = React.createClass({
  change: function () {
    this.props.change();
  },
  render: function() {
    return <div>
        {this.props.name}
        <button onClick={this.change}>change</button>

    </div>;
  }
});



ReactDOM.render(<Hello/>, document.getElementById('content'));