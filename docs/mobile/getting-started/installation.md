# Installation

## Initial Install

In order to start developing you will need git and node >=v10 installed on your
computer (node v14 does not seem to be working at this time, you can use [nvm](https://github.com/nvm-sh/nvm) to rollback
your node version). For many development tasks you will also need the Android SDK installed.

```sh
git clone https://github.com/digidem/mapeo-mobile.git
cd mapeo-mobile
npm install
```

## Storybook

[Storybook](https://storybook.js.org) is a tool for developing React UI
components in isolation. You can see how a component renders with different
props as inputs, and changes you make to the code will update in realtime
through the storybook UI. What you see in the Storybook UI is defined by
"stories" which are in the [`src/stories`](src/stories) folder.

### Storybook Web

**_Storybook web is fragile, it currently requires some code modifications for
everything to work correctly on web_**

The easiest way to get started without setting up your machine for mobile
development is to use Storybook web. It uses
[`react-native-web`](https://github.com/necolas/react-native-web) internally in
order to render react-native components in a browser. Note that layout and
colors do not appear exactly the same in the browser, and you may need to add
some additional styles to get things looking right. To start the storybook web
server:

```sh
npm run storybook-web
```

Your default browser should open with the Storybook interface. You can browse
different stories, and as you edit a component you will see your changes update
in real-time.

### Storybook Native

For a development environment that is closer to the actual app end-users will
see you can run storybook on a device or in the Android emulator. To install and
run the app in storybook mode on a device:

```sh
npm run android-storybook
```

You can edit components and write new stories and see how components on-screen
render in isolation.

Optionally you can also start a server that will give you a web interface to
control what you see on the mobile device:

```sh
adb reverse tcp:7007 tcp:7007
npm run storybook-native
```

You will probably need to reload the storybook mobile app for the web app to be
able to control the mobile app.

## Full App Development

### Pre-requisites

In order to develop the full app you will need the Android SDK installed and
specifically [21.4.7075529 of the NDK](https://developer.android.com/ndk/guides/) in order to build
nodejs-mobile for Android. Currently you will need to remove any later versions of NDK (e.g. >=v22) if you are using "NDK side-by-side" (which allows you to have multiple versions of NDK installed at the same time), because for some reason the build process ignores the Gradle preference for NDK version.

You may need to open your app's `/android` folder in Android Studio, so that it detects, downloads and cofigures requirements that might be missing, like the NDK and CMake to build the native code part of the project.

You can also set the environment variable `ANDROID_NDK_HOME`, as in this example:

```sh
export ANDROID_NDK_HOME=/Users/username/Library/Android/sdk/ndk-bundle
```

Mapeo Mobile does NOT work with Android OS version 11 (as of June 2020, version 11 is still in beta release)

### Testing Device

To use a real device, you will need to [enable USB
debugging](https://developer.android.com/studio/debug/dev-options) and connect
the phone to your computer with a USB cable. Enter `adb devices` in the terminal
to check that you can see the phone. You may need to unlock the phone screen and
say that you trust your computer in order for adb to connect.

You can also test Mapeo Mobile in an emulator. [Set up a virtual device in
Android Studio](https://developer.android.com/studio/run/managing-avds). Choose
`x86` as the `ABI`, since this will be much faster.

### Starting the dev version of Mapeo Mobile

Build translations with:

```sh
npm run build:translations
```

Connect your phone with USB, or start up the emulator. Then start the Javascript bundler:

```sh
npm start
```

In another terminal window build and run the
dev version of the app on your device:

```sh
npm run android
```

You can configure the app to reload whenever you make a change: shake the device
to bring up the developer menu, and select "Enable Live Reload". Whenever you
change the code the app should reload. Changes to any code in the `src/frontend`
folder will appear immediately after a reload. If you change anything in
`src/backend` you will need to re-run `npm run android` in order to see changes.
If you are tired of shaking the phone you can enter `npm run dev-menu` from your
computer.

`npm run android` does two things: starts "Metro bundler" in one window, and
then builds and installs the dev version of Mapeo on the connected device.
That might not work on all machines, so in order to start the Metro bundler on
its own (e.g. if you already have the app installed), use `npm start`.