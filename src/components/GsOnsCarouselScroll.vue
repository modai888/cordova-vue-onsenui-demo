<template>
    <div class="ons-carousel-support-scroll" style="-webkit-overflow-scrolling: touch">
        <slot></slot>
    </div>
</template>

<script>
    import { $ons } from '../framework/onsenui'
    import BScroll from 'better-scroll'

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
                    this._gestureDetector[ action ]('dragstart drag dragend', this.onDrag);
                    // this.$el.addEventListener('touchstart', this.onTouch);
                    // this.$el.addEventListener('touchmove', this.onTouch);
                    // this.$el.addEventListener('touchend', this.onTouch);
                }
            },

            isValidGesture(event) {
                return event.gesture !== undefined && (event.gesture.distance <= 15 || event.gesture.deltaTime <= 100)
            },

            onDragStart(event) {
                this._ignoreDrag = event.consumed || !this.isValidGesture(event);
                // // 如果是canvas
                // if ( event.target.tagName === 'CANVAS' && event.type === 'touch' && !this._swiping ) {
                //     this._ignoreDrag = true;
                //     console.log('touch');
                //     this._events_ = this._events_ || [ event ];
                //     gesture.stopPropagation();
                //     gesture.preventDefault();
                //     this._event = event;
                // }
                if ( event.target.tagName === 'CANVAS' && !event.redispatched ) {
                    event.preventDefault();
                    event.stopPropagation();
                    // event.stopImmediatePropagation();
                    this._ignoreDrag = true;
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
                console.log('event: ' + event.type);

                let direction = event.gesture.direction;
                let ov = event.gesture.srcEvent;

                if ( event.type === 'touch' && !ov.redispatchedEvent ) {
                    // event.gesture.preventDefault();

                } else if ( event.type === 'dragstart' ) {
                    // 页面原生滚动
                    if ( direction === 'down' && this.$el.scrollTop > 0
                        || direction === 'up' && this.$el.scrollHeight > (this.$el.offsetHeight + this.$el.scrollTop)
                    ) {
                        event.consumed = true;
                    }
                }
                else if ( event.type === 'drag' ) {
                    if ( direction === 'down' && this.$el.scrollTop < 1
                        || direction === 'up' && this.$el.scrollHeight <= (this.$el.offsetHeight + this.$el.scrollTop)
                    ) {
                        event.gesture.preventDefault();
                    }
                }
            },

            onTouch(event) {
                console.log('event: ' + event.type);

                if ( event.type === 'touchstart' ) {
                    // 页面原生滚动
                    this._startTouch = event.touches[ 0 ];
                }
                else if ( event.type === 'touchmove' ) {
                    let touch = event.touches[ 0 ];
                    let direction = touch.clientY > this._startTouch.clientY ? 'down' : 'up';

                    if ( direction === 'down' ) {
                        if ( this.$el.scrollTop < 1 ) {
                            event.preventDefault();
                        } else {
                            event.stopPropagation();
                        }
                    } else if ( direction === 'up' ) {
                        if ( this.$el.scrollHeight <= (this.$el.offsetHeight + this.$el.scrollTop) ) {
                            event.preventDefault();
                        } else {
                            event.stopPropagation();
                        }
                    }

                } else {
                    // touch end
                }
            },

            _stripGesture(element) {
                while ( element && element !== this.$el ) {
                    if ( element.hasAttribute('gesture-strip') ) return true;
                    element = element.parentElement;
                }
                return false;
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

        -webkit-overflow-scrolling: touch
    }
</style>