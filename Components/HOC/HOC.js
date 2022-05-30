import React, {Component, Fragment} from 'react';
import Header from './Header';
import {View} from 'react-native';
import BottomNavigationStack from './BottomNavigationStack';

const HOC = WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Fragment>
          <View style={{flex: 1}}>
            <Header {...this.props} />
            <BottomNavigationStack {...this.props} />

            <WrappedComponent {...this.props} />
          </View>
        </Fragment>
      );
    }
  };
};

export default HOC;
