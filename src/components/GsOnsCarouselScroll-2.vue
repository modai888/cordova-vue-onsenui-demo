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
            // this.$el.addEventListener('touchstart', this.onTouchStart);
            // this.$el.addEventListener('touchmove', this.onTouchMove);
            // this.$el.addEventListener('touchend', this.onTouchEnd);
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
                    // this._gestureDetector[ action ]('drag swipe', this.onDrag);
                    this._gestureDetector[ action ]('dragstart', this.onDragStart);
                    // this._gestureDetector[ action ]('dragend', this.onDragEnd);
                    // const action = shouldUpdate ? 'addEventListener' : 'removeEventListener';

                    // this.$el[ action ]('touchstart', this.onDragStart, false)

                    this._gestureDetector[ action ]('touch', this.onGesture);
                    this._gestureDetector[ action ]('swipe drag', this.onGesture);
                }
            },

            isValidGesture(event) {
                return event.gesture !== undefined && (event.gesture.distance <= 15 || event.gesture.deltaTime <= 100)
            },
            redispatchedEvent(event) {
                let nev = new event.constructor(event.type, event);
                nev.redispatched = true;
                return nev;
            },

            onGesture(event) {
                console.log('detector: ' + event.type);
                let gesture = event.gesture;

                if ( event.target.tagName === 'CANVAS' && event.type === 'touch' && !event.redispatched ) {
                    gesture.preventDefault();
                    gesture.stopPropagation();
                    this._ignoreDrag = true;

                    this._events_ = [ event.gesture.srcEvent ];
                }

                if ( event.target.tagName === 'CANVAS' && event.type === 'swipe' ) {
                    this._events_.push(event.gesture.srcEvent);
                    console.log(this._events_);

                    // let v = gesture.velocityY * gesture.deltaTime; // (Math.abs(gesture.deltaY) / gesture.deltaTime) + (gesture.velocityY * gesture.deltaTime) / 2;
                    let getDist = function (t) {
                        return gesture.velocityY * t / 2 //v * t - gesture.velocityY * t * t / 2;
                    }

                    let start = new Date().getTime(), st = 0;
                    let that = this;
                    let scroll = function scroll() {
                        requestAnimationFrame(() => {
                            let dt = (new Date().getTime() - start) / 4;
                            let s = getDist(dt);
                            if ( s > Math.abs(gesture.deltaY) ) {
                                return;
                            }

                            if ( gesture.direction === 'up' ) {
                                that.$el.scrollTop += getDist(dt) - st;
                            } else {
                                that.$el.scrollTop -= getDist(dt) - st;
                            }

                            st = getDist(dt);

                            scroll();
                        })
                    }

                    scroll();

                    // setTimeout(() => {
                    //     let g = event.gesture;
                    //     let direction = g.deltaY > 0 ? 'down' : "up";
                    //
                    //     while ( this._events_.length ) {
                    //         let ev = this._events_.shift();
                    //         if ( ev ) {
                    //             ev = this.redispatchedEvent(ev);
                    //             // this.$el.dispatchEvent(ev);
                    //         }
                    //
                    //         let dist = 0, time = 0;
                    //         if ( this._events_.length && this._events_[ 0 ].touches.length ) {
                    //             time = ev.timeStamp - this._events_[ 0 ].timeStamp;
                    //             console.log(time);
                    //             dist = ev.touches[ 0 ].clientY - this._events_[ 0 ].touches[ 0 ].clientY;
                    //         }
                    //
                    //         let len = Math.ceil(time / 16.667);
                    //         let dt = Math.ceil(dist / len);
                    //         while ( len ) {
                    //             requestAnimationFrame(() => {
                    //                 this.$el.scrollTop += dt
                    //             })
                    //             len--;
                    //         }
                    //
                    //     }
                    // }, 0);
                }

                if ( event.target.tagName === 'CANVAS' && event.type === 'drag' ) {
                    this._events_.push(event.gesture.srcEvent);
                }
            },

            // onTouchStart(event) {
            //     console.log('native: ' + event.type)
            //     event.preventDefault();
            //     // event.stopPropagation();
            //     event.stopImmediatePropagation();
            // },
            // onTouchMove(event) {
            //     console.log('native: ' + event.type)
            //     event.preventDefault();
            //     // event.stopPropagation();
            //     event.stopImmediatePropagation();
            // },
            // onTouchEnd(event) {
            //     console.log('native: ' + event.type)
            //     event.preventDefault();
            //     // event.stopPropagation();
            //     event.stopImmediatePropagation();
            // },

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
            // onDrag(event) {
            //     if ( event.target.tagName === 'CANVAS' ) {
            //         event.preventDefault();
            //         event.gesture.preventDefault();
            //     }
            //
            //     const gesture = event.gesture;
            //     //
            //     if ( event.target.tagName === 'CANVAS' && event.type === 'drag' && !this._swiping ) {
            //         console.log('drag');
            //         console.log(gesture.velocityX + ' ' + gesture.velocityY)
            //         this._events_.push(event);
            //         // gesture.stopPropagation();
            //         // gesture.preventDefault();
            //     }
            //
            //     // 如果是canvas
            //     if ( event.target.tagName === 'CANVAS' && event.type === 'swipe' ) {
            //         console.log('swipe');
            //         this._swiping = true;
            //         // 触发原生dispatchEvent
            //         while ( this._events_ && this._events_.length ) {
            //             var ev = this._events_.shift();
            //             ev && this.$el.dispatchEvent(ev.gesture.srcEvent);
            //         }
            //     }
            // },
            // onDragEnd(event) {
            //     console.log('drag end');
            //     this._swiping = false;
            //     this._events = null;
            // }
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