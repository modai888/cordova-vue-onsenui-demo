fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios release
```
fastlane ios release
```
----- 编译打包ios
### ios ios_dev_cert
```
fastlane ios ios_dev_cert
```
----- cordova ios 开发环境 -- 初始化证书
### ios ios_dev_sigh
```
fastlane ios ios_dev_sigh
```

### ios ios_dev
```
fastlane ios ios_dev
```
----- cordova ios 开发环境打包
### ios ios_release
```
fastlane ios ios_release
```
----- cordova ios 生产环境打包

----

## Android
### android android_dev
```
fastlane android android_dev
```
----- cordova android 测试环境打包
### android android_release
```
fastlane android android_release
```
----- cordova android 生产环境打包
### android dev
```
fastlane android dev
```


----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
