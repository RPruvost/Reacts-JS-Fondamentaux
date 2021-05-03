class App extends React.Component {
    state = {
        name: null,
        message: null,
        comments: []
    }

    sendName = event => {
        this.setState({
            name: event.target.value
        })
    }

    sendMessage = event => {
        this.setState({
            message: event.target.value
        })
    }

    sendSubmit = event => {
        event.preventDefault();
        this.setState({
            comments: this.state.comments.concat(this.state.name,this.state.message)
        })
        console.log(this.state,this.state.comments)
    }

    render() {
        return (
                <form onSubmit={this.sendSubmit}>
                    <p>Say something</p>
                    <label></label>
                    <input type="text" id="name" placeholder="Your Name" onChange={this.sendName} />
                    <label></label>
                    <textarea type="text" id="message" placeholder="Your Comment" onChange={this.sendMessage} />
                    <button>Envoyer</button>
                </form>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"));