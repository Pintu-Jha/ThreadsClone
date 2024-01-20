import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../../../Utility/imagePath';
import {spacing} from '../../../Styles/spacing';
import {Color} from '../../../Utility';
import colors from '../../../Utility/colors';
import {textScale} from '../../../Styles/responsiveStyles';
import VirtualizedView from '../../Common/VirtualizedView';

const demoData = [
  {
    image: require('../../../Assests/Image/car-1.jpg'),
  },
  {
    image: require('../../../Assests/Image/car-2.jpg'),
  },
  {
    image: require('../../../Assests/Image/car-3.jpg'),
  },
  {
    image: require('../../../Assests/Image/car-4.jpg'),
  },
  {
    image: require('../../../Assests/Image/car-5.jpg'),
  },
  {
    image: require('../../../Assests/Image/car-6.jpg'),
  },
  {
    image: require('../../../Assests/Image/car-1.jpg'),
  },
];

const HomeScreen = () => {
  return (
    <VirtualizedView>
      <Image
        source={Images.IMG_LOGO}
        style={{
          width: spacing.HEIGHT_56,
          height: spacing.HEIGHT_56,
          alignSelf: 'center',
        }}
      />
      <FlatList
        data={demoData}
        renderItem={({item, index}) => {
          return (
            <View style={{width: '100%', height: spacing.HEIGHT_300}}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingLeft: spacing.PADDING_20,
                  paddingRight: spacing.PADDING_20,
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <View>
                    <Image
                      source={Images.IMG_PROFILE}
                      style={{
                        width: spacing.HEIGHT_50,
                        height: spacing.HEIGHT_50,
                        opacity: 0.6,
                      }}
                    />
                    <Image
                      source={Images.IMG_FOLLOW}
                      style={{
                        width: spacing.HEIGHT_18,
                        height: spacing.HEIGHT_18,
                        position: 'absolute',
                        right: 2,
                        bottom: 0,
                        backgroundColor: colors.white,
                        borderRadius: spacing.RADIUS_12,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      marginTop: spacing.MARGIN_4,
                      marginLeft: spacing.MARGIN_12,
                    }}>
                    <Text
                      style={{
                        fontSize: textScale(15),
                        color: colors.black,
                        fontWeight: '600',
                      }}>
                      userName
                    </Text>
                    <Text
                      style={{
                        fontSize: textScale(12),
                        fontWeight: '600',
                        color: colors.grey500,
                      }}>
                      Demo caption for threads
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: colors.grey500}}>50m</Text>
                  <TouchableOpacity style={{marginLeft: spacing.MARGIN_10}}>
                    <Image
                      source={Images.IMG_OPTION}
                      style={{
                        width: spacing.HEIGHT_16,
                        height: spacing.HEIGHT_16,
                        transform: [{rotate: '90deg'}],
                        tintColor: colors.black,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    width: spacing.WIDTH_2,
                    height: spacing.HEIGHT_240,
                    opacity: 0.2,
                    backgroundColor: colors.grey600,
                    marginLeft: spacing.MARGIN_44,
                  }}></View>
                <View style={{marginTop: spacing.MARGIN_10, width: '80%'}}>
                  <Image
                    source={item.image}
                    style={{
                      width: '100%',
                      height: spacing.HEIGHT_165,
                      marginLeft: spacing.MARGIN_18,
                      borderRadius: spacing.RADIUS_12,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: spacing.MARGIN_8,
                      paddingLeft: spacing.PADDING_18,
                    }}>
                    <Image
                      source={Images.IMG_NOTIFICATION}
                      style={{
                        width: spacing.HEIGHT_24,
                        height: spacing.HEIGHT_24,
                        tintColor: colors.black,
                        marginLeft: spacing.MARGIN_4,
                      }}
                    />
                    <Image
                      source={Images.IMG_MESSAGE}
                      style={{
                        width: spacing.HEIGHT_24,
                        height: spacing.HEIGHT_24,
                        tintColor: colors.black,
                        marginLeft: spacing.MARGIN_8,
                      }}
                    />
                    <Image
                      source={Images.IMG_REPEAT}
                      style={{
                        width: spacing.HEIGHT_24,
                        height: spacing.HEIGHT_24,
                        tintColor: colors.black,
                        marginLeft: spacing.MARGIN_8,
                      }}
                    />
                    <Image
                      source={Images.IMG_SEND}
                      style={{
                        width: spacing.HEIGHT_24,
                        height: spacing.HEIGHT_24,
                        tintColor: colors.black,
                        marginLeft: spacing.MARGIN_8,
                      }}
                    />
                  </View>
                  <View style={{flexDirection:"row",paddingLeft:spacing.PADDING_18,marginTop:spacing.MARGIN_4}}>
                    <Text style={{color:colors.grey800,fontWeight:"600",marginLeft:spacing.MARGIN_4}}>100 replies</Text>
                    <Text style={{color:colors.grey800,fontWeight:"600",marginLeft:spacing.MARGIN_4}}>1508 liks</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </VirtualizedView>
  );
};

export default HomeScreen;
