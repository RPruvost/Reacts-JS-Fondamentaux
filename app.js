class App extends React.Component {
   state = {
    input: "",
    comments: []
   }
addComment = (event) => {
    event.preventDefault();
    let newComment = [...this.state.comments, this.state.input]

    this.setState({
        comment: newComment
    })
}
    render() {
        return (
            <div className="app">
                <p>Say something</p>
                <input type="text" placeholder="Your Name" className="form"/>
                <textarea placeholder="Your Comment"/>
                <button>Comment</button>
            </div>
        );
    }
}




ReactDOM.render(<App/>, document.querySelector('#app'));