---
sidebar_position: 2
---

# Join a Project

A user can join a project using:

* [A QR Code](#qr-code)
* [A Link] ()

## General Architecture for joining a project:
PA = Project Admin <br>
PJ = Project Joiner

PA will navigate to settings/project config, and press "Add User Button".

This will make a call to the backend using INSERT API HERE

## QR Code
[Original PR](https://github.com/digidem/mapeo-mobile/pull/637)

QR code is generated using [React Native QR Code SVG](https://github.com/awesomejerry/react-native-qrcode-svg).

- General architecture:
  - `ProjectInviteContext`: holds state + handlers for dealing with invites. this sits **outside** the app container so that it's globally available to all screens.

  - `useProjectInviteListener`: basic hook to react to changes in the invites state that comes from the `ProjectInviteContext`. Its purpose is to be used in specific screens with access to the `navigation` prop so that navigation events can be triggered e.g. a new invite has been received while in a screen within the map view, let's navigate to the `ProjectInviteModal` screen. In this PR, we use this in the following places:
    - bottom tab navigator for the main app, since that's persisted throughout the whole app, which is a good candidate for listening to this kind of change
    - join project via qr code and send join request screens 
  - `ProjectInviteModal`: standalone modal component that sits at the top stack navigator alongside the "app" stack, displaying relevant invite information and actions.

