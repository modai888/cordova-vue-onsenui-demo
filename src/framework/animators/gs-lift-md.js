import $ons from 'vue-onsenui/esm'
const { animit } = $ons;

// md-lift
const gsLiftMD = $ons.elements.Navigator.animators[ 'lift-md' ].extend({
    duration: 0.55,
    push(enterPage, leavePage, callback) {
        this.backgroundMask.remove();
        leavePage.parentNode.insertBefore(this.backgroundMask, leavePage);

        const unblock = this.block(enterPage);

        const maskClear = animit(this.backgroundMask)
            .saveStyle()
            .queue({
                css: {
                    opacity: 0
                },
                duration: 0
            })
            .wait(this.delay)
            .queue({
                css: {
                    opacity: 1
                },
                duration: this.duration,
                timing: this.timing
            })
            .restoreStyle()
            .queue(done => {
                this.backgroundMask.remove();
                done();
            });

        animit.runAll(
            maskClear,

            animit(enterPage)
                .saveStyle()
                .queue({
                    css: {
                        transform: 'translate3D(0, 100%, 0)'
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
                .restoreStyle()
                .queue(done => {
                    unblock();
                    callback();
                    done();
                }),

            animit(leavePage)
                .queue({
                    css: {
                        opacity: 1.0
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'scale(0.98)',
                        opacity: 0.4
                    },
                    duration: this.duration,
                    timing: this.timing
                })
        );

    },

    pop(enterPage, leavePage, callback) {
        this.backgroundMask.remove();
        enterPage.parentNode.insertBefore(this.backgroundMask, enterPage);

        const unblock = this.block(enterPage);

        animit.runAll(
            animit(this.backgroundMask)
                .wait(this.delay + this.duration)
                .queue(done => {
                    this.backgroundMask.remove();
                    done();
                }),

            animit(enterPage)
                .queue({
                    css: {
                        transform: 'translate3D(0, 0, 0) scale(0.96)',
                        opacity: 0.4
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(0, 0, 0)',
                        opacity: 1.0
                    },
                    duration: this.duration,
                    timing: this.timing
                })
                .queue(done => {
                    unblock();
                    callback();
                    done();
                }),

            animit(leavePage)
                .queue({
                    css: {
                        transform: 'translate3D(0, 0, 0)'
                    },
                    duration: 0
                })
                .wait(this.delay)
                .queue({
                    css: {
                        transform: 'translate3D(0, 100%, 0)'
                    },
                    duration: this.duration,
                    timing: this.timing
                })
        );
    }
});

const install = () => {
    $ons.elements.Navigator.registerAnimator('gs-lift-md', gsLiftMD);
};

export default {
    name: 'gs-lift-md',
    animator: gsLiftMD,
    install
}