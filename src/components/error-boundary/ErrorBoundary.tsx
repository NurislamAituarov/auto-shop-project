import { Component } from 'react';
import { Error } from './404';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
