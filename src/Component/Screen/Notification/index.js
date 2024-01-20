import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '../../../Styles/spacing';
import colors from '../../../Utility/colors';
import {height, textScale} from '../../../Styles/responsiveStyles';
import {Images} from '../../../Utility/imagePath';

const NotificationScreen = () => {
  const [tabSection, setTabSection] = useState(0);
  return (
    <SafeAreaView>
      <View
        style={{marginTop: spacing.MARGIN_10, marginLeft: spacing.MARGIN_12}}>
        <Text
          style={{
            color: colors.black,
            fontSize: textScale(20),
            fontWeight: 'bold',
          }}>
          Activity
        </Text>
      </View>
      <View>
        <ScrollView horizontal style={{marginTop: spacing.MARGIN_10}}>
          <TouchableOpacity
            style={{
              width: spacing.WIDTH_105,
              height: spacing.HEIGHT_40,
              borderRadius: spacing.RADIUS_10,
              borderWidth: 1,
              marginLeft: spacing.MARGIN_18,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                tabSection == 0 ? colors.black : colors.transparent,
            }}
            onPress={() => {
              setTabSection(0);
            }}>
            <Text
              style={{
                color: tabSection == 0 ? colors.white : colors.black,
                fontSize: textScale(14),
                fontWeight: '800',
              }}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: spacing.WIDTH_105,
              height: spacing.HEIGHT_40,
              borderRadius: spacing.RADIUS_10,
              borderWidth: 1,
              marginLeft: spacing.MARGIN_18,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                tabSection == 1 ? colors.black : colors.transparent,
            }}
            onPress={() => {
              setTabSection(1);
            }}>
            <Text
              style={{
                color: colors.black,
                fontSize: textScale(14),
                fontWeight: '800',
                color: tabSection == 1 ? colors.white : colors.black,
              }}>
              Replies
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: spacing.WIDTH_105,
              height: spacing.HEIGHT_40,
              borderRadius: spacing.RADIUS_10,
              borderWidth: 1,
              marginLeft: spacing.MARGIN_18,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                tabSection == 2 ? colors.black : colors.transparent,
            }}
            onPress={() => {
              setTabSection(2);
            }}>
            <Text
              style={{
                color: colors.black,
                fontSize: textScale(14),
                fontWeight: '800',
                color: tabSection == 2 ? colors.white : colors.black,
              }}>
              Mention
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: spacing.WIDTH_105,
              height: spacing.HEIGHT_40,
              borderRadius: spacing.RADIUS_10,
              borderWidth: 1,
              marginLeft: spacing.MARGIN_18,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor:
                tabSection == 3 ? colors.black : colors.transparent,
            }}
            onPress={() => {
              setTabSection(3);
            }}>
            <Text
              style={{
                color: colors.black,
                fontSize: textScale(14),
                fontWeight: '800',
                color: tabSection == 3 ? colors.white : colors.black,
              }}>
              Verified
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <FlatList
        contentContainerStyle={{marginTop: spacing.MARGIN_30}}
        data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
        renderItem={() => {
          return (
            <View
              style={{
                width: '100%',
                height: spacing.HEIGHT_64,
                paddingLeft: spacing.PADDING_20,
                paddingRight: spacing.PADDING_20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Images.IMG_PROFILE}
                  style={{
                    width: spacing.WIDTH_40,
                    height: spacing.HEIGHT_40,
                    borderRadius: spacing.RADIUS_12,
                    opacity: 0.6,
                  }}
                />
                <View style={{marginLeft: spacing.MARGIN_20}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: colors.black, fontWeight: '700'}}>
                      pintujha15
                    </Text>
                    <Text
                      style={{
                        color: colors.black,
                        marginLeft: spacing.MARGIN_10,
                        fontWeight: '400',
                      }}>
                      10h
                    </Text>
                  </View>
                  <Text style={{color: colors.grey500, fontWeight: '700'}}>
                    followed you
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: spacing.WIDTH_90,
                  height: spacing.HEIGHT_38,
                  borderWidth: 0.6,
                  borderRadius: spacing.RADIUS_6,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: colors.black}}>follow</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
