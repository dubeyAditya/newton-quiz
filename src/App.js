import React, { Component } from 'react';
import QuizForm from './QuizForm';
import Quiz from 'react-quiz-component';
import api from './api';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      submitted: false
    }
  }

  setResult = (values) => {
    api.add('quizList', values).then(() => {
      alert("Your Quiz Created Please reload to Perform new Quiz");
      this.setState({
        result: values,
        submitted: true
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.submitted
          ? <Quiz quiz={this.state.result} />
          : <QuizForm onSubmit={this.setResult} />
        }
      </div>
    );
  }
}

export default App;