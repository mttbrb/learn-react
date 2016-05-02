import React, {Component} from 'react';
import styles from './App.css';

class App extends Component{
  render() {
    var place="World!";
    
    return (
      <div className={styles.root}>
        <h1>Hello {place}</h1>
      </div>
    );
  }
}

export default App
