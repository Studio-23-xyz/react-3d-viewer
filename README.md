# Open-React-3d-Viewer

A 3d viewer for your React app.

- No react 3d library needed.
- Simple control process.

# tl;dr

- Install by executing npm install open-react-3d-viewer or yarn add open-react-3d-viewer.
- Import by adding import Visualaizer from 'open-react-3d-viewer/dist/Visualaizer'.
- Use by adding `<Visualaizer /> ` . use `controlVisualaizer` prop for getting new values'


# Demo

Live demo is available.

[Online demo](https://studio-23-xyz.github.io/react-3d-viewer/) 

# Getting started

## Installation
Add Open-React-3d-Viewer to your project by executing 
> npm install open-react-3d-viewer 

or 
> yarn add open-react-3d-viewer.


## Usage

Here's an example of basic usage:

``` JS
import React, { useState } from 'react';
import Visualaizer from 'open-react-3d-viewer/dist/Visualaizer';

function MyApp() {
 const [controlVisualaizer, setControlVisualaizer] = useState({
			rotationSpeed: 10,
		});

  return (
    <div>
      <Visualaizer
			controlVisualaizer={controlVisualaizer}
			setControlVisualaizer={setControlVisualaizer}
		/>
    </div>
  );
}

```

## Custom styling
Custom styling added automatically when you install the package


# User guide

| State Object Value name | Description | Default value | Example Values|
| ----------- | ----------- | ----------- | ----------- |
| enableRotation | For enable or disable rotation | true | false |
| rotationSpeed | its change rotation speed | 10 | -10 or 20 |
| rotationTopLimit | For change rotation top angle view | 1 | 1 to 32 |
| rotationBottomLimit | For change rotation bottom angle view | 2 | 1 to 32 |
| zoomEnable | For enable or disable zoom | true | false |
| zoomInLimit | For how mouch zoom in  | 30 | 10 to unlimited |
| zoomOutLimit | For how mouch zoom out | 9 | 1 to 10 |
| background | For background change | { value: '#0dcaf0', type: 'plainBackground' } | { value: 'red', type: 'plainBackground' } |
| loading | For loading animation | true | false |
| model | For Change model | '' | { url:  glb/gltf/fbx/obj model url, extension: glb/gltf/fbx/obj } |


## <a name="sponsors"></a>Sponsors

The following companies, organizations, and individuals support Messenger-23's ongoing maintenance and development.

<p><a href="https://brainstation-23.com/"><img src="https://brainstation-23.com/wp-content/uploads/2019/02/BS-Logo-Blue_Hr.svg" alt="Automattic" height="undefined"></a></p>



