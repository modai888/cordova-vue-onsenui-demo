<template>
    <div class="ons-carousel-support-scroll">
        <slot></slot>
    </div>
</template>

<script>
    import { $ons } from '../framework/onsenui'

    export default {
        name: "gs-ons-carousel-scroll",

        mounted() {
            this._gestureDetector = new $ons.GestureDetector(this.$el, { dragMinDistance: 1, dragLockToAxis: true });
            this.updateSwipable(true);
        },

        destroyed() {
            this.updateSwipable(false);
            this._gestureDetector && this._gestureDetector.dispose();
        },

        methods: {
            updateSwipable(shouldUpdate) {
                if ( this._gestureDetector ) {
                    const action = shouldUpdate ? 'on' : 'off';
                    this._gestureDetector[ action ]('drag swipe', this.onDrag);
                    this._gestureDetector[ action ]('dragstart', this.onDragStart);
                    this._gestureDetector[ action ]('dragend', this.onDragEnd);
                    // const action = shouldUpdate ? 'addEventListener' : 'removeEventListener';

                    // this.$el[ action ]('touchstart', this.onDragStart, false)
                }
            },

            isValidGesture(event) {
                return event.gesture !== undefined && (event.gesture.distance <= 15 || event.gesture.deltaTime <= 100)
            },

            onDragStart(event) {
                this._ignoreDrag = event.consumed || !this.isValidGesture(event);

                const gesture = event.gesture;
                // // 如果是canvas
                // if ( event.target.tagName === 'CANVAS' && event.type === 'touch' && !this._swiping ) {
                //     this._ignoreDrag = true;
                //     console.log('touch');
                //     this._events_ = this._events_ || [ event ];
                //     gesture.stopPropagation();
                //     gesture.preventDefault();
                //     this._event = event;
                // }
                if(event.target.tagName === 'CANVAS'){
                    event.preventDefault();
                    event.gesture.preventDefault();
                    this._events_ = this._events_ || [ event ];
                }

                if ( !this._ignoreDrag ) {
                    const direction = event.gesture.direction;

                    if ( direction === 'down' && this.$el.scrollTop > 0
                        || direction === 'up' && this.$el.scrollHeight > (this.$el.clientHeight + this.$el.scrollTop)
                    ) {
                        event.consumed = true;
                        event.stopPropagation();
                    }
                }
            },
            onDrag(event) {
                if(event.target.tagName === 'CANVAS'){
                    event.preventDefault();
                    event.gesture.preventDefault();
                }

                const gesture = event.gesture;
                //
                if ( event.target.tagName === 'CANVAS' && event.type === 'drag' && !this._swiping ) {
                    console.log('drag');
                    console.log(gesture.velocityX + ' ' + gesture.velocityY)
                    this._events_.push(event);
                    // gesture.stopPropagation();
                    // gesture.preventDefault();
                }

                // 如果是canvas
                if ( event.target.tagName === 'CANVAS' && event.type === 'swipe' ) {
                    console.log('swipe');
                    this._swiping = true;
                    // 触发原生dispatchEvent
                    while ( this._events_ && this._events_.length ) {
                        var ev = this._events_.shift();
                        ev && this.$el.dispatchEvent(ev.gesture.srcEvent);
                    }
                }
            },
            onDragEnd(event) {
                console.log('drag end');
                this._swiping = false;
                this._events = null;
            }
        }
    }
</script>

<style>
    .ons-carousel-support-scroll {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: auto;
    }
</style>