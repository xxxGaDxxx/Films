import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {getFilmsCategories} from "../../bll/reducers/categoriesFilmsReducers";
import {useAppDispatch} from "../hooks/storHooks";

type GroupBtnType = {
  titleBtn: string[]
}

export const GroupBtn = ({titleBtn}: GroupBtnType) => {
  const [btnActive, setBtnActive] = useState(titleBtn[0])

  const dispatch = useAppDispatch()

  const styleTitleBtn = (value: string) => {
    return btnActive === value ? [styles.buttonText, styles.btnActive] : styles.buttonText
  }

  useEffect(() => {
    dispatch(getFilmsCategories(btnActive))
  }, [btnActive])

  return (
    <View style={styles.containerButton}>

      {titleBtn.map((title, index) => {
        return <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => {
            setBtnActive(title)
          }}
        >
          <Text
            style={styleTitleBtn(title)}>{title}
          </Text>
        </TouchableOpacity>
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: "row",
    justifyContent: "center"
  },

  button: {
    position: "relative",
    marginBottom: 15,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fdfdfd',
    marginHorizontal: 5,
    marginBottom: 5
  },

  btnActive: {
    paddingBottom: 5,
    borderBottomWidth: 4,
    borderBottomColor: '#3a3f46'
  },
})

