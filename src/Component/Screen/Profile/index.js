import {View, Text, SafeAreaView, Image, TouchableOpacity,FlatList} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '../../../Styles/spacing';
import {Images} from '../../../Utility/imagePath';
import colors from '../../../Utility/colors';
import {textScale} from '../../../Styles/responsiveStyles';

const ProfileScreen = () => {
  const [tab, SetTab] = useState(0);
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
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: spacing.HEIGHT_50,
          paddingLeft: spacing.PADDING_16,
          paddingTop: spacing.PADDING_18,
          paddingRight: spacing.PADDING_16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={Images.IMG_GLOBLE}
            style={{
              width: spacing.HEIGHT_34,
              height: spacing.HEIGHT_34,
              tintColor: colors.grey800,
            }}
          />
        </TouchableOpacity>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={Images.IMG_INSTA}
              style={{
                width: spacing.HEIGHT_34,
                height: spacing.HEIGHT_34,
                tintColor: colors.black,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Images.IMG_MENUBAR}
              style={{
                width: spacing.HEIGHT_34,
                height: spacing.HEIGHT_34,
                marginLeft: spacing.MARGIN_12,
                tintColor: colors.black,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: spacing.MARGIN_20,
          alignItems: 'center',
          marginRight: spacing.MARGIN_20,
        }}>
        <View
          style={{
            paddingLeft: spacing.PADDING_20,
          }}>
          <Text
            style={{
              fontSize: textScale(20),
              color: colors.black,
              fontWeight: 'bold',
            }}>
            Pintu Jha
          </Text>
          <Text
            style={{
              fontSize: textScale(14),
              color: colors.black,
              fontWeight: '600',
            }}>
            pintujha15
          </Text>
        </View>
        <View>
          <Image
            source={Images.IMG_USEPROFILE}
            style={{
              width: spacing.HEIGHT_78,
              height: spacing.HEIGHT_78,
              borderRadius: spacing.RADIUS_38,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: spacing.MARGIN_28,
          marginTop: spacing.MARGIN_16,
          marginRight: spacing.MARGIN_18,
          alignItems: 'center',
        }}>
        <Image
          source={Images.IMG_PROFILE}
          style={{
            width: spacing.HEIGHT_28,
            height: spacing.HEIGHT_28,
            marginLeft: -10,
            backgroundColor: colors.white,
            borderRadius: spacing.RADIUS_12,
          }}
        />
        <Image
          source={Images.IMG_PROFILE}
          style={{
            width: spacing.HEIGHT_28,
            height: spacing.HEIGHT_28,
            marginLeft: -10,
            backgroundColor: colors.white,
            borderRadius: spacing.RADIUS_12,
          }}
        />
        <Image
          source={Images.IMG_PROFILE}
          style={{
            width: spacing.HEIGHT_28,
            height: spacing.HEIGHT_28,
            marginLeft: -10,
            backgroundColor: colors.white,
            borderRadius: spacing.RADIUS_12,
          }}
        />
        <Text
          style={{
            marginLeft: spacing.MARGIN_16,
            fontSize: textScale(12),
            color: colors.grey500,
          }}>
          2 followers
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          marginTop: spacing.MARGIN_20,
        }}>
        <TouchableOpacity
          style={{
            width: '40%',
            height: spacing.HEIGHT_50,
            borderWidth: 1,
            borderRadius: spacing.RADIUS_10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: colors.grey800, fontWeight: '700'}}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '40%',
            height: spacing.HEIGHT_50,
            borderWidth: 1,
            borderRadius: spacing.RADIUS_10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: colors.grey800, fontWeight: '700'}}>
            Share Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          height: spacing.HEIGHT_50,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: spacing.MARGIN_20,
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: spacing.HEIGHT_50,
            borderRadius: spacing.RADIUS_10,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: tab == 0 ? 1 : 0,
          }}
          onPress={() => {
            SetTab(0);
          }}>
          <Text
            style={{
              color: tab == 0 ? colors.grey800 : colors.grey600,
              fontWeight: '700',
            }}>
            Threads
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: spacing.HEIGHT_50,
            borderRadius: spacing.RADIUS_10,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: tab == 1 ? 1 : 0,
          }}
          onPress={() => {
            SetTab(1);
          }}>
          <Text
            style={{
              color: tab == 1 ? colors.grey900 : colors.grey600,
              fontWeight: '700',
            }}>
            Replies
          </Text>
        </TouchableOpacity>
      </View>
      {tab == 0 ? (
        <View style={{marginBottom:spacing.MARGIN_28}}>
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
                <View style={{marginTop: spacing.MARGIN_10,marginLeft:spacing.MARGIN_18, width: '80%'}}>
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
          );
        }}
      />
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: spacing.MARGIN_30,
          }}>
          <Text style={{fontSize: textScale(10), fontWeight: 'bold',color:colors.grey800}}>
            you haven't posted any replies yet.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProfileScreen;
