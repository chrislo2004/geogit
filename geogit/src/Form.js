import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: ''
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log('submit clicked ', event)
    this.setState({...this.state, location: ''})
    //call api here

  }

  handleOnChange = (event) => {
    this.setState({
      ...this.state,
      location: event.target.value
    }) // DO NOT MUTATE STATE DIRECTY!!!

  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Github ID:
            <input
              type="text"
              name="githubID"
              onChange={this.handleOnChange}
              value={this.state.githubID}
             />
          <br/>
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              onChange={this.handleOnChange}
              value={this.state.location}
             />
          </label>
          <br/><input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default Form;
