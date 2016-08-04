const Hello = React.createClass({
    getInitialState: function () {
        return {
            name: '1234'
        }
    },
    change: function () {
        this.setState({
            name: 'chenqiuling'
        })
    },
    test: function (test) {
        this.setState({
            name: test
        })
    },
    render: function () {
        return <div>
            Hello
            <Name name={this.state.name} change={this.change} onTest={this.test}/>
        </div>;
    }
});

const Name = React.createClass({
    change: function () {
        this.props.change();
    },
    test: function () {
        const test = $("input[name=test]:checked").val();
        this.props.onTest(test);
    },
    render: function () {
        return <div>
            {this.props.name}
            <br/>
            <input type="radio" name="test" value="test"/>
            <button onClick={this.test}>test</button>
            <button onClick={this.change}>CQL</button>

        </div>;
    }
});


ReactDOM.render(<Hello/>, document.getElementById('content'));