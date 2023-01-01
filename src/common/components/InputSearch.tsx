import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {useDebounce} from "../hooks/useDebounce";
import {SearchSvg} from "../../assets/svg/SearchSvg";
import {PADDING, WIDTH} from "../../constants/constants";
import {useAppDispatch} from "../hooks/storHooks";
import {getSearchFilms, resetStateSearchFilms} from "../../bll/reducers/searchFilmsReducers";


const TIME_WAIT = 300;

export const InputSearch = () => {

  const [searchValue, setSearchValue] = useState<string>('');


  const dispatch = useAppDispatch()

  const debounceText = useDebounce<string>(searchValue, TIME_WAIT);


  useEffect(() => {
    dispatch(getSearchFilms(searchValue))
    if (!searchValue.length) {
      console.log(2222)
      dispatch(resetStateSearchFilms())
    }
  }, [debounceText]);


  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#66676c'}
        onChangeText={setSearchValue}
        placeholder="Search"
        value={searchValue}
      />
      <SearchSvg style={styles.svg}/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    height: 42,
    borderRadius: 15,
    color: '#fdfdfd',
    paddingLeft: 25,
    paddingRight: 40,
    backgroundColor: '#3a3f46',
    marginVertical: 10,
  },
  svg: {
    top: -40,
    right: -WIDTH + PADDING + 55
  }

})
