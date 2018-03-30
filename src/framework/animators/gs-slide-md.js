import $ons from 'vue-onsenui/esm'

const { animit } = $ons;

// slide-md
const gsSlideMD = $ons.elements.Navigator.animators[ 'slide-md' ].extend({
    duration: 0.5,
    blackMaskOpacity: 0.6,

    push(enterPage, leavePage, callback) {
        // enterPage.style.visibility = 'hidden';
        this.backgroundMask.remove();
        leavePage.parentElement.insertBefore(this.backgroundMask, leavePage.nextSibling);

        const unblock = this.block(enterPage);

        animit.runAll(
            animit(enterPage)
                .queue(done => {
                    // enterPage.style.visibility = '';
                    done();
                })
                .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(100%, 0, 0)'
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(0, 0, 0)',
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .restoreStyle(),

            animit(this.backgroundMask)
                .saveStyle()
                .queue({
                    opacity: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        opacity: this.blackMaskOpacity
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .restoreStyle()
                .queue(done => {
                    this.backgroundMask.remove();
                    done();
                }),

            animit(leavePage)
                .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(0, 0, 0)'
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(-25%, 0px, 0px)',
                        // opacity: 0.99  // bugfix: 原生的slide-md动画在ios设备上有问题，可通过加上这一个进行hack
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .restoreStyle()
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
        enterPage.parentNode.insertBefore(this.backgroundMask, enterPage.nextSibling);

        const unblock = this.block(enterPage);

        animit.runAll(
            animit(leavePage)
                .queue({
                    css: {
                        transform: 'translate3D(0px, 0px, 0px)'
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(100%, 0px, 0px)'
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .wait(this.delay)
                .queue(done => {
                    unblock();
                    callback();
                    done();
                }),

            animit(this.backgroundMask)
                .saveStyle()
                .queue({
                    css: {
                        opacity: this.blackMaskOpacity,
                    },
                    duration: 0,
                })
                .wait(this.delay)
                .queue({
                    css: {
                        opacity: 0
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .restoreStyle()
                .queue(done => {
                    this.backgroundMask.remove();
                    done();
                }),

            animit(enterPage)
                .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(-25%, 0px, 0px)',
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
                })
                .restoreStyle()
        );
    }
});

const install = () => {
    $ons.elements.Navigator.registerAnimator('gs-slide-md', gsSlideMD);
};

export default {
    name: 'gs-slide-md',
    animator: gsSlideMD,
    install
}
