// onsenui css
import './onsenui-theme.css'

// global onsen object
import $ons from 'vue-onsenui/esm'

export { $ons }

import VOnsToolbar from 'vue-onsenui/esm/components/VOnsToolbar';
import VOnsBottomToolbar from 'vue-onsenui/esm/components/VOnsBottomToolbar';
import VOnsToolbarButton from 'vue-onsenui/esm/components/VOnsToolbarButton';
// import VOnsAlertDialogButton from 'vue-onsenui/esm/components/VOnsAlertDialogButton';
import VOnsButton from 'vue-onsenui/esm/components/VOnsButton';
import VOnsIcon from 'vue-onsenui/esm/components/VOnsIcon';
// import VOnsCard from 'vue-onsenui/esm/components/VOnsCard';
import VOnsList from 'vue-onsenui/esm/components/VOnsList';
import VOnsListItem from 'vue-onsenui/esm/components/VOnsListItem';
import VOnsListTitle from 'vue-onsenui/esm/components/VOnsListTitle';
import VOnsListHeader from 'vue-onsenui/esm/components/VOnsListHeader';
// import VOnsRipple from 'vue-onsenui/esm/components/VOnsRipple';
// import VOnsRow from 'vue-onsenui/esm/components/VOnsRow';
// import VOnsCol from 'vue-onsenui/esm/components/VOnsCol';
// import VOnsProgressBar from 'vue-onsenui/esm/components/VOnsProgressBar';
// import VOnsProgressCircular from 'vue-onsenui/esm/components/VOnsProgressCircular';
import VOnsSplitterMask from 'vue-onsenui/esm/components/VOnsSplitterMask';
import VOnsSplitterContent from 'vue-onsenui/esm/components/VOnsSplitterContent';
import VOnsSplitterSide from 'vue-onsenui/esm/components/VOnsSplitterSide';
import VOnsSplitter from 'vue-onsenui/esm/components/VOnsSplitter';
// import VOnsSwitch from 'vue-onsenui/esm/components/VOnsSwitch';
// import VOnsCheckbox from 'vue-onsenui/esm/components/VOnsCheckbox';
// import VOnsInput from 'vue-onsenui/esm/components/VOnsInput';
// import VOnsSearchInput from 'vue-onsenui/esm/components/VOnsSearchInput';
// import VOnsRange from 'vue-onsenui/esm/components/VOnsRange';
import VOnsRadio from 'vue-onsenui/esm/components/VOnsRadio';
// import VOnsFab from 'vue-onsenui/esm/components/VOnsFab';
// import VOnsSpeedDialItem from 'vue-onsenui/esm/components/VOnsSpeedDialItem';
// import VOnsDialog from 'vue-onsenui/esm/components/VOnsDialog';
// import VOnsActionSheet from 'vue-onsenui/esm/components/VOnsActionSheet';
// import VOnsActionSheetButton from 'vue-onsenui/esm/components/VOnsActionSheetButton';
// import VOnsModal from 'vue-onsenui/esm/components/VOnsModal';
// import VOnsToast from 'vue-onsenui/esm/components/VOnsToast';
// import VOnsPopover from 'vue-onsenui/esm/components/VOnsPopover';
// import VOnsAlertDialog from 'vue-onsenui/esm/components/VOnsAlertDialog';
// import VOnsSpeedDial from 'vue-onsenui/esm/components/VOnsSpeedDial';
import VOnsCarousel from 'vue-onsenui/esm/components/VOnsCarousel';
import VOnsCarouselItem from 'vue-onsenui/esm/components/VOnsCarouselItem';
import VOnsTab from 'vue-onsenui/esm/components/VOnsTab';
import VOnsTabbar from 'vue-onsenui/esm/components/VOnsTabbar';
import VOnsBackButton from 'vue-onsenui/esm/components/VOnsBackButton';
import VOnsNavigator from 'vue-onsenui/esm/components/VOnsNavigator';

// import VOnsLazyRepeat from 'vue-onsenui/esm/components/VOnsLazyRepeat';
// import VOnsSelect from 'vue-onsenui/esm/components/VOnsSelect';
// import VOnsSegment from 'vue-onsenui/esm/components/VOnsSegment';
// import VOnsPullHook from 'vue-onsenui/esm/components/VOnsPullHook';
import VOnsPage from 'vue-onsenui/esm/components/VOnsPage';

import animators from './animators'

const install = function (Vue) {
    if ( install.installed ) return;

    Vue.use($ons);
    Vue.component(VOnsPage.name, VOnsPage);
    Vue.component(VOnsNavigator.name, VOnsNavigator);
    Vue.component(VOnsBackButton.name, VOnsBackButton);
    Vue.component(VOnsBottomToolbar.name, VOnsBottomToolbar);
    Vue.component(VOnsToolbar.name, VOnsToolbar);
    Vue.component(VOnsSplitter.name, VOnsSplitter);
    Vue.component(VOnsSplitterContent.name, VOnsSplitterContent);
    Vue.component(VOnsSplitterSide.name, VOnsSplitterSide);
    Vue.component(VOnsSplitterMask.name, VOnsSplitterMask);
    Vue.component(VOnsButton.name, VOnsButton);
    Vue.component(VOnsToolbarButton.name, VOnsToolbarButton);
    Vue.component(VOnsIcon.name, VOnsIcon);
    // List
    Vue.component(VOnsList.name, VOnsList);
    Vue.component(VOnsListItem.name, VOnsListItem);
    Vue.component(VOnsListHeader.name, VOnsListHeader);
    Vue.component(VOnsListTitle.name, VOnsListTitle);

    // tab
    Vue.component(VOnsTab.name, VOnsTab);
    Vue.component(VOnsTabbar.name, VOnsTabbar);

    // carousal
    Vue.component(VOnsCarousel.name, VOnsCarousel);
    Vue.component(VOnsCarouselItem.name, VOnsCarouselItem);

    // forms
    Vue.component(VOnsRadio.name, VOnsRadio);

    // 重写部分动画
    animators.forEach((animator) => {
        animator.install();
    });

    // //
    // Vue.mixin({
    //     mounted(){
    //         if ( this.$el.tagName !== "ONS-PAGE" ) return;
    //
    //         var pre = this.$el.previousSibling;
    //         while ( pre ) {
    //             if ( pre.tagName === "ONS-PAGE" ) {
    //                 this.$el.style.visibility = 'hidden';
    //                 return;
    //             }
    //
    //             pre = pre.previousSibling;
    //         }
    //     }
    // })
};

export default {
    install,
    VOnsPage
}
