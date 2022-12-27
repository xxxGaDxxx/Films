import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {DateSvg} from "../../../assets/svg/DateSvg";
import {TicketSvg} from "../../../assets/svg/TicketSvg";
import {TimeSvg} from "../../../assets/svg/TimeSvg";

type DateTimeType = {
  date: string
  time: string
}

export const DateTime = ({time, date}: DateTimeType) => {

  const timeLength = () => {
    const minutes = +time.slice(3)
    const hours = +time.slice(0, 2)
    return hours * 60 + minutes

  }
  timeLength()
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <DateSvg/>
        <Text style={styles.text}>{date}</Text>
      </View>

      <View style={styles.line}/>

      <View style={styles.box}>
        <TimeSvg/>
        <Text style={styles.text}>{timeLength()} Minutes</Text>
      </View>

      <View style={styles.line}/>

      <View style={styles.box}>
        <TicketSvg/>
        <Text style={styles.text}>Action</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: -20,
    justifyContent: "center",
    flexDirection: 'row',
  },
  box: {
    justifyContent: "center",
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: '#91919c',
    marginHorizontal: 10
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
    color: '#91919c',
  },

})
