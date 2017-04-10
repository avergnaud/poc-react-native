import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,
  Button
} from 'react-native';

import type { ViewPagerScrollState } from 'ViewPagerAndroid';
import { Page1_Orientation } from './Page1_Orientation';
import { Page2_Apprentissage } from './Page2_Apprentissage';
import { Page3_AttentionEtCalcul } from './Page3_AttentionEtCalcul';
import { Page4_Rappel } from './Page4_Rappel';
import { Page5_Langage } from './Page5_Langage';
import { BoutonNavigation } from './BoutonNavigation';
import { BarreProgression } from './BarreProgression';

var PAGES = 5;

class MyProgressBar extends React.Component {
  render() {
    var fractionalPosition = (this.props.progress.position + this.props.progress.offset);
    var progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;
    return (
      <View style={[styles.progressBarContainer, {width: this.props.size}]}>
        <View style={[styles.progressBar, {width: progressBarSize}]}/>
      </View>
    );
  }
}

export class PagerNavigation extends Component {
  static title = '<ViewPagerAndroid>';
    static description = 'Container that allows to flip left and right between child views.';

    state = {
      page: 0,
      progress: {
        position: 0,
        offset: 0,
      },
    };

    onPageSelected = (e) => {
      this.setState({page: e.nativeEvent.position});
    };

    onPageScroll = (e) => {
      this.setState({progress: e.nativeEvent});
    };

    onPageScrollStateChanged = (state : ViewPagerScrollState) => {
      this.setState({scrollState: state});
    };

    move = (delta) => {
      var page = this.state.page + delta;
      this.go(page);
    };

    go = (page) => {
      this.viewPager.setPage(page);

      this.setState({page});
    };

    render() {
      var pages = [];
      pages.push(
        <View key={0} collapsable={false}>
          <Page1_Orientation />
        </View>
      );
      pages.push(
        <View key={1} collapsable={false}>
          <Page2_Apprentissage />
        </View>
      );
      pages.push(
        <View key={2} collapsable={false}>
          <Page3_AttentionEtCalcul />
        </View>
      );
      pages.push(
        <View key={3} collapsable={false}>
          <Page4_Rappel />
        </View>
      );
      pages.push(
        <View key={4} collapsable={false}>
          <Page5_Langage />
        </View>
      );
      var { page } = this.state;
      return (
        <View style={styles.container}>
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}
            scrollEnabled={true}
            onPageScroll={this.onPageScroll}
            onPageSelected={this.onPageSelected}
            onPageScrollStateChanged={this.onPageScrollStateChanged}
            pageMargin={10}
            ref={viewPager => { this.viewPager = viewPager; }}>
            {pages}
          </ViewPagerAndroid>

          <View style={styles.buttons}>
            <BoutonNavigation text="Précédent" enabled={page > 0} onPress={() => this.move(-1)}/>
            <BoutonNavigation text="Suivant" enabled={page < PAGES - 1} onPress={() => this.move(1)}/>
          </View>

          <View style={styles.progress}>
            <Text style={styles.progressPageText}>{page + 1} / {PAGES}</Text>
            <BarreProgression
              size={200}
              progress={this.state.progress}
              pages={PAGES}
            />
            {/* AdroidProgressBar ? */}
          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
    progress: {
      flexDirection: 'row',
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
  button: {
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    justifyContent: 'center',
    width: 130,
    height: 40
  },
  myButtonText: {
    fontSize: 18,
    color: 'white'
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  progressPageText: {
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: 'black'
  },
  scrollStateText: {
    color: '#99d1b7',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 200,
    padding: 20,
  },
  viewPager: {
    flex: 1,
  },
});
