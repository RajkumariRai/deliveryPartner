import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {button} from '../CommonStyles/Index';
import RejectOrderDailog from './RejectOrderDailog';

const OrderAcceptReject = props => {
  const {params} = props.route;
  const [active, setActive] = useState(2);
  const [rejectDailog, setRejectDailog] = useState(false);

  const acceptHandle = () => {
    setActive(2);
  };
  const rejectHandle = () => {
    setActive(1);
    setRejectDailog(true);
  };
  const rejectClose = () => {
    setRejectDailog(false);
  };
  const StartOrderHandle = () => {
    props.navigation.push('MapLocation');
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.orderAccpectMainView}>
          <View style={button.commonBackgroundColor}>
            <Text style={styles.orderIdcenter}>ORD123456789</Text>
          </View>
          <View style={{padding: 20}}>
            <View>
              <Text style={[styles.labelColor, button.commonColor]}>Order</Text>
              <View style={styles.borderColorTotalcount}>
                <View style={styles.borderbottomfororder}>
                  {/* map section */}
                  <View>
                    <View style={styles.flexSpace}>
                      <Text style={styles.boxinnerColor}>Deal 1</Text>
                      <Text style={styles.boxinnerColor}>350</Text>
                    </View>
                    <View style={styles.flexSpace}>
                      <Text style={styles.boxinnerColor}>burger</Text>
                      <Text style={styles.boxinnerColor}>70</Text>
                    </View>
                    <View style={styles.flexSpace}>
                      <Text style={styles.boxinnerColor}>7up regular 25ml</Text>
                      <Text style={styles.boxinnerColor}>60</Text>
                    </View>
                    <View style={styles.flexSpace}>
                      <Text style={styles.boxinnerColor}>Delivery charge</Text>
                      <Text style={styles.boxinnerColor}>40</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.flexSpace, {paddingTop: 5}]}>
                  <Text style={styles.totalamountBold}>Total</Text>
                  <Text style={styles.totalamountBold}>520</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={[styles.labelColor, button.commonColor]}>
                Location
              </Text>
              <View style={styles.borderColorTotalcount}>
                <Text style={styles.boxinnerColor}>
                  Location : 11/B Vshu surat 45345345
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.labelColor, button.commonColor]}>
                Customer
              </Text>
              <View style={styles.borderColorTotalcount}>
                <Text style={styles.boxinnerColor}>Name : Vishal Mistry</Text>
                <Text style={styles.boxinnerColor}>
                  Phone : +91 435345345353
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.labelColor, button.commonColor]}>
                Payment
              </Text>
              <View style={styles.borderColorTotalcount}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.boxinnerColor}>Payment</Text>
                  <Text style={[styles.boxinnerColor, {marginLeft: '20%'}]}>
                    Online
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.timeHeadling}>Time :</Text>
              <Text style={styles.timeValueColor}>11:30 AM</Text>
            </View>

            {!params && (
              <View style={[button.commonSpaceBetween, {paddingTop: 10}]}>
                <TouchableOpacity
                  onPress={() => {
                    rejectHandle();
                  }}>
                  <View
                    style={
                      active == 1
                        ? button.commonActiveButtonHeight
                        : button.commonInactiveButtonHeight
                    }>
                    <Text
                      style={
                        active == 1
                          ? button.commonActiveTextDeco
                          : button.commonInactiveTextDeco
                      }>
                      Reject
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    acceptHandle();
                  }}>
                  <View
                    style={
                      active == 2
                        ? button.commonActiveButtonHeight
                        : button.commonInactiveButtonHeight
                    }>
                    <Text
                      style={
                        active == 2
                          ? button.commonActiveTextDeco
                          : button.commonInactiveTextDeco
                      }>
                      Accept
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            {params === 'Active' && (
              <View style={{paddingTop: 10, alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    StartOrderHandle();
                  }}>
                  <View style={button.commonActiveButtonHeight}>
                    <Text style={button.commonActiveTextDeco}>Start</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      {rejectDailog && (
        <RejectOrderDailog open={rejectHandle} close={rejectClose} />
      )}
    </View>
  );
};

export default OrderAcceptReject;

const styles = StyleSheet.create({
  orderAccpectMainView: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  orderIdcenter: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    paddingBottom: 5,
    paddingTop: 5,
  },
  labelColor: {
    fontSize: 15,
    fontWeight: '500',
  },
  borderColorTotalcount: {
    borderColor: 'rgb(211, 211, 211)',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 5,
    padding: 10,
  },
  boxinnerColor: {
    color: '#333',
    fontSize: 13,
    fontWeight: '500',
  },
  borderbottomfororder: {
    borderBottomColor: 'rgb(211, 211, 211)',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  totalamountBold: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timeHeadling: {
    color: '#333',
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  timeValueColor: {
    color: '#333',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inactiveButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    fontWeight: '700',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
