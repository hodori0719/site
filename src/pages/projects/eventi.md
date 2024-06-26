The built-in events feature in Discord is only suitable for large communities, where only apex moderators are allowed to create events, or for small communities, where individual users can be entrusted with all permissions. For medium-sized communities, where individual members should be able to engage in community administration but cannot necessary be trusted with permissions, the feature fails. Eventi adds the necessary features to the built-in Events feature in Discord to support more granular moderation of the events feature, as well as adding QOL features to make it more than a server-wide reminder system.

## Features

**Create events through slash command**

- Allows users to create events with a simple slash command `\newevent`, removing the need for manual role assignment for permissions
- Allows users to create, edit, and delete their own events only, allowing delegation of event moderation to a designated moderator role similar to messages

**Event organizers**

- Allows assignment of event organizers on a event-by-event basis so that multiple people can manage the same event with `\addorganizer`

**Event threads**

- Automatically spins up threads for every event for easy and organized concurrent planning of multiple events

**GCal integration**

- Automatically syncs server events to a server Google calendar

## Roadmap
**Mass DM**

- Allows event organizers to DM all participants of an event through Eventi

**Event timers**

- Alerts event participants at a set interval before the event like a calendar
