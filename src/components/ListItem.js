import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AgreeButton, CardSectionCol } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
  }

  onButtonPress() {
    let { name, phone, uid } = this.props.employee;
    phone++;

    firebase.database().ref(`/employees/${uid}`)
      .set({ name, phone });
  }

  render() {
    const { name, phone } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSectionCol>
            <Text style={styles.titleStyle}>
              {name}
            </Text>

            <AgreeButton text="Agree" onPress={this.onButtonPress.bind(this)} />

            <Text style={styles.titleStyle}>
              {`Agree Num: ${phone}`}
            </Text>

          </CardSectionCol>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
    lineHeight: 40,
  },

  countStyle: {
    fontSize: 15,
    paddingLeft: 15,
  }
};

export default ListItem;
