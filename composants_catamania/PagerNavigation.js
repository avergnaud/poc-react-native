import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ViewPagerAndroid,
  Button,
  Dimensions
} from 'react-native';
import type { ViewPagerScrollState } from 'ViewPagerAndroid';
import { Page1_Orientation } from './Page1_Orientation';
import { Page2_Apprentissage } from './Page2_Apprentissage';
import { Page3_AttentionEtCalcul } from './Page3_AttentionEtCalcul';
import { Page4_Rappel } from './Page4_Rappel';
import { Page5_Langage } from './Page5_Langage';
import { BoutonNavigation } from './common/BoutonNavigation';
import { BarreProgression } from './common/BarreProgression';
import { normalize } from './common/Scaling'

/*
Point d'entrée dans l'application - affichage de pages dans un pager
*/
export class PagerNavigation extends Component {

    state = {
      /* page courante */
      page: 0,
      /* progression dans le pager */
      progress: {
        position: 0
      },
    };

    /* méthodes appelées par le ViewPagerAndroid */
    onPageSelected = (e) => {
      this.setState({page: e.nativeEvent.position});
    };
    onPageScroll = (e) => {
      this.setState({progress: e.nativeEvent});
    };
    onPageScrollStateChanged = (state : ViewPagerScrollState) => {
      this.setState({scrollState: state});
    };

    /* appelé par le BoutonNavigation */
    move = (delta) => {
      var page = this.state.page + delta;
      this.viewPager.setPage(page);
      this.setState({page});
    };

    /*
    Affichage du composant
    */
    render() {
      const PAGES = 5;
      let pages = [];

      /* 5 pages dans le pager */
      pages.push(<View key={0} collapsable={false}><Page1_Orientation /></View>);
      pages.push(<View key={1} collapsable={false}><Page2_Apprentissage /></View>);
      pages.push(<View key={2} collapsable={false}><Page3_AttentionEtCalcul /></View>);
      pages.push(<View key={3} collapsable={false}><Page4_Rappel /></View>);
      pages.push(<View key={4} collapsable={false}><Page5_Langage /></View>);

      let { page } = this.state;
      return (
        <View style={styles.containerGlobal}>
          {/* Le pager */}
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

          {/* Boutons de navigation */}
          <View style={styles.buttons}>
            <BoutonNavigation text="Précédent" enabled={page > 0} onPress={() => this.move(-1)}/>
            <BoutonNavigation text="Suivant" enabled={page < PAGES - 1} onPress={() => this.move(1)}/>
          </View>

          {/* Barre de progression */}
          <View style={styles.progress}>
            <Text style={styles.progressPageText}>{page + 1} / {PAGES}</Text>
            <BarreProgression
              size={normalize(400)}
              pageCourante={page + 1}
              pages={PAGES}
            />
          </View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: normalize(60),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
    progress: {
      flexDirection: 'row',
      height: normalize(60),
      alignItems: 'center',
      justifyContent: 'center',
    },
  myButtonText: {
    fontSize: normalize(18),
    color: 'white'
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  progressPageText: {
    fontSize: normalize(18),
  },
  scrollStateText: {
    color: '#99d1b7',
  },
  containerGlobal: {
    flex: 1,
    backgroundColor: 'white',
    padding: normalize(50),
  },
  viewPager: {
    flex: 1,
  },
});
