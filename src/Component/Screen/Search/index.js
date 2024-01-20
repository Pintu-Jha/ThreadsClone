import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {textScale} from '../../../Styles/responsiveStyles';
import colors from '../../../Utility/colors';
import {spacing} from '../../../Styles/spacing';
import {Images} from '../../../Utility/imagePath';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: textScale(30),
          fontWeight: '700',
          color: colors.black,
          marginLeft: spacing.MARGIN_14,
        }}>
        Search
      </Text>
      <View
        style={{
          width: '95%',
          height: spacing.HEIGHT_52,
          backgroundColor: colors.grey300,
          alignSelf: 'center',
          borderRadius: spacing.RADIUS_14,
          marginTop: spacing.MARGIN_10,
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: spacing.PADDING_10,
        }}>
        <Image
          source={Images.IMG_SEARCH}
          style={{
            width: spacing.HEIGHT_34,
            height: spacing.HEIGHT_34,
            tintColor: colors.grey500,
          }}
        />
        <Text style={{fontSize:textScale(16),fontWeight:"600",marginLeft:spacing.MARGIN_10,color:colors.grey600}}>search</Text>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
