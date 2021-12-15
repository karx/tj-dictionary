---
status: deployed
tags:
    - forcegraph
    - three.js
    - explore
    - Data Vizualization
    - Graph
    - Widget
vue-component: 
    - ForceGraphAlt
    - ForceGraphController
---
# Force graph widget

A forced graph is a 3d visualization of your thoughts and events. When you are exploring something like you are doing authentication on web applications, while doing that, you add some notes, search for something, perform any activity, etc. So all your events with each connected node were represented by the force graph widget.

A Force graph is like a sky view. There is nothing beyond that. It is a brief of everything that you did. You can also travel in this widget and take a look at what other people did, what did they search for, explore other user's thoughts.

The force graph widget is so heavy. Some systems can't handle it, So we came up with an alternative named "ForceGraphAlt".

## ForceGraphAlt

This alternative is a 2D frame of 3d visualization. You can travel in 3D but in a 2D frame(lower version).
To use "ForceGraphAlt", you will need a controller. Here comes the "ForceGraphController".

![falt](https://gitlab.com/edvanta/go-mad/uploads/b78a9f0dd78f846c7dba67a0f701846c/falt.png)

## ForceGraphController

It helps to control force graph, and it contains nodes(users, projects, and issues) and relationships(merge requests, GitLab issues, members, participated, etc.). Suppose you click on the merge request, the force graph widget will create a connection between the server, project, and contributors. Nodes are entities and the connection between nodes is a relationship.

You can also customize the size of the node to determine users.

![forcecontroller](https://gitlab.com/edvanta/go-mad/uploads/bd20e6d099b105d625de9dee9c91e563/forcecontroller.png)

## Future scope

- [ ] Access to publically available data.
