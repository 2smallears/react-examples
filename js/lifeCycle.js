const Hello = React.createClass({
  getInitialState: function () {
    return {
        name: 'world'
    }
  },

  render: function() {
    return <div>
        {this.state.name}
        <Name name="you"/>
    </div>;
  }
});

const Name = React.createClass({
    getDefaultProps: function () {
        return {
            text: 'Nice to meet you'
        }
    },
  render: function() {
    return <div>
        <p>{this.props.name}</p>
        <p>{this.props.text}</p>
    </div>
  }
});

ReactDOM.render(<Hello/>, document.getElementById('content'));