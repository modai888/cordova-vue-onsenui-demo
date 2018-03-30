import Vue from 'vue'
import StackNavigator from '../navigation/StackNavigator';

import Home from '../components/HomePage.vue'
import SocialBuzz from '../components/SocialBuzz.vue'

export default StackNavigator({
    Home,
    SocialBuzz
}, {
    root: "Home"
});
