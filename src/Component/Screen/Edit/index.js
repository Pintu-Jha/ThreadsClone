import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import {spacing} from '../../../Styles/spacing';
import colors from '../../../Utility/colors';
import {textScale} from '../../../Styles/responsiveStyles';
import {Images} from '../../../Utility/imagePath';

const EditScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: spacing.HEIGHT_64,
          borderBottomWidth: 0.5,
          borderBlockColor: colors.grey600,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: spacing.PADDING_8,
          paddingRight: spacing.PADDING_30,
        }}>
        <Text
          style={{
            color: colors.black,
            fontSize: textScale(14),
            fontWeight: '700',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Cancel
        </Text>
        <Text
          style={{
            color: colors.black,
            fontSize: textScale(16),
            fontWeight: 'bold',
          }}>
          New Threads
        </Text>
        <Text></Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: spacing.MARGIN_10,
          paddingLeft: spacing.PADDING_16,
          alignItems: 'center',
        }}>
        <Image
          source={Images.IMG_USEPROFILE}
          style={{
            width: spacing.WIDTH_60,
            height: spacing.HEIGHT_60,
            borderRadius: spacing.RADIUS_30,
          }}
        />
        <View style={{width: '100%'}}>
          <Text
            style={{
              color: colors.black,
              fontSize: textScale(12),
              fontWeight: '600',
              marginLeft: spacing.MARGIN_10,
            }}>
            pintujha15
          </Text>
          <TextInput
            placeholder="start the thread..."
            placeholderTextColor={colors.grey500}
            style={{
              marginLeft: spacing.MARGIN_10,
              fontSize: textScale(12),
              padding: 0,
            }}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: spacing.WIDTH_2,
            height: spacing.HEIGHT_80,
            opacity: 0.2,
            backgroundColor: colors.grey600,
            marginLeft: spacing.MARGIN_44,
            marginTop:spacing.MARGIN_6
          }}></View>
        <Image
          source={Images.IMG_ATTACH}
          style={{
            width: spacing.WIDTH_28,
            height: spacing.HEIGHT_28,
            marginTop: spacing.MARGIN_12,
            opacity: 0.6,
            marginLeft: spacing.MARGIN_40,
          }}
        />
      </View>
      <View  style={{
          flexDirection: 'row',
          marginTop: spacing.MARGIN_4,
          marginLeft: spacing.MARGIN_30,
          alignItems: 'center',
        }}>
      <Image
          source={Images.IMG_USEPROFILE}
          style={{
            width: spacing.WIDTH_30,
            height: spacing.HEIGHT_30,
            borderRadius: spacing.RADIUS_30,
            opacity:0.5
          }}
        />
        <Text style={{color:colors.grey400,marginLeft:spacing.MARGIN_26}}>Add to thread</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          position: 'absolute',
          bottom: 25,
          justifyContent: 'space-between',
          paddingLeft: spacing.PADDING_12,
          paddingRight: spacing.PADDING_12,
        }}>
        <Text style={{color: colors.grey500, fontSize: textScale(12)}}>
          Anyone can reply
        </Text>
        <Text
          style={{
            color: colors.blue800,
            fontSize: textScale(12),
            fontWeight: 'bold',
          }}>
          Post
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
