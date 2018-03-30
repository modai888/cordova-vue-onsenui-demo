export default {
    data() {
        return {
            _restoreSwipeable: false
        }
    },
    inject: [ 'navigator' ],

    mounted() {
        if ( this.navigator && this.navigator.$el.hasAttribute('swipeable') ) {
            this._restoreSwipeable = true;
            this.navigator.$el.removeAttribute('swipeable');
        }
    },

    beforeDestroy() {
        if ( this.navigator && this._restoreSwipeable ) {
            this.navigator.$el.setAttribute('swipeable', true);
        }
    }
}