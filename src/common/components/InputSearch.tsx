import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from "react-native";
import {useDebounce} from "../hooks/useDebounce";
import {api, FilmsItemsTypeFilms} from "../../api/api";
import {SearchSvg} from "../../assets/svg/SearchSvg";
import {PADDING, WIDTH} from "../../constants/constants";

type InputSearchType = {
  setFilmsItem: (value: FilmsItemsTypeFilms[]) => void
}

const TIME_WAIT = 700;

export const InputSearch = ({setFilmsItem}: InputSearchType) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const debounceText = useDebounce<string>(searchValue, TIME_WAIT);

  useEffect(() => {
    if (searchValue.length) {
      api.getFilmsSearch(debounceText)
        .then((res) => {
          setFilmsItem(res.data.films)
        })
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
