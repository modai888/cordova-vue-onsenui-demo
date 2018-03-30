import $ons from 'vue-onsenui/esm'
const { animit } = $ons;

// slide-md
const gsNavigatorMenuSlide = $ons.elements.Navigator.animators[ 'slide-md' ].extend({
    duration: 0.55,
    blackMaskOpacity: 0.8,
    push(enterPage, leavePage, callback) {
        this.backgroundMask.remove();
        const unblock = this.block(enterPage);

        animit.runAll(
            animit(enterPage)
                // .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(100%, 0px, 0px)'
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(0px, 0px, 0px)',
                    },
                    duration: this.duration,
                    timing: this.timing
                }),
                // .restoreStyle(),

            animit(leavePage)
                // .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1.0
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(-100%, 0px, 0px)',
                        opacity: 0.99  // bugfix: 原生的slide-md动画在ios设备上有问题，可通过加上这一个进行hack
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                // .restoreStyle()
                .wait(0.2)
                .queue(done => {
                    unblock();
                    callback();
                    done();
                })
        );
    },

    pop(enterPage, leavePage, callback) {
        this.backgroundMask.remove();
        const unblock = this.block(enterPage);

        animit.runAll(
            animit(enterPage)
                // .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(-100%, 0px, 0px)',
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(0px, 0px, 0px)'
                    },
                    duration: this.duration,
                    timing: this.timing
                }),
                // .restoreStyle(),

            animit(leavePage)
                .queue({
                    css: {
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1.0
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(100%, 0px, 0px)',
                        opacity: 0.99
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .wait(0.2)
                .queue(done => {
                    unblock();
                    callback();
                    done();
                })
        );
    }
});

const install = () => {
    $ons.elements.Navigator.registerAnimator('gs-navigatormenu-slide', gsNavigatorMenuSlide);
};

export default {
    name: 'gs-navigatormenu-slide',
    animator: gsNavigatorMenuSlide,
    install
}
