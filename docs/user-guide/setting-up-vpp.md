
# Setting Up Vehicle Physics Pro

VPP is shipped in three different ways:

- **Unitypackage** files to be imported directly in Unity.
- **GIT repositories** that may reside in exiting Unity projects as GIT submodules.
- **[Asset Store Package](https://assetstore.unity.com/packages/tools/physics/vehicle-physics-pro-community-edition-153556)** (Community Edition only).

### Download and import VPP unitypackage

1. Login with your VPP credentials to download the .unitypackage file:

	- **[Professional Edition](https://edy.repositoryhosting.com/webdav/edy_vehicle-physics-pro-professional/)**
	- **[Enterprise Edition](https://edy.repositoryhosting.com/webdav/edy_vehicle-physics-pro/)**

2. Import the .unitypackage file into an Unity 3D project.

	- VPP is imported into the folder **Assets/Vehicle Physics Pro**. Feel free to move it to a
		different location.
	- Check out the **Readme PDF** file in that folder for an initial overview of VPP.

### Configure the Project Settings

It is recommended to use **Linear color space** (Project Settings > Player > Other Settings).

The subfolder **VPP Project Settings** provides specific .unitypackage files that may be imported
individually.

![Project Settings files](/img/user-guide/vpp-project-settings.png){: .clickview }

!!! Warning "&fa-warning:lg; Current Project Settings will be overriden"
	Each file overrides the project’s settings in the corresponding section. Ensure to have a backup
	or note down your values for combining them with the VPP settings.

Project Settings - Input
:	_Required_ for the keyboard input to work correctly (i.e. switch gears in the included demos).
	Alternatively, you could manually configure the input axes <kbd>Horizontal</kbd>, <kbd>Vertical</kbd>,
	<kbd>Fire2</kbd> and <kbd>Fire3</kbd> [as described here](/components/vehicle-input/#vpstandardinput).

Project Settings - Physics
:	Physics settings used in VPP. Note that importing this file overrides your project’s Layer
	Collision Matrix. You may restore your own collision matrix afterwards (VPP doesn't require
	any special collision matrix).

Project Settings - Quality
:	Enhances the visual quality of the shadows and textures in large scenarios.

Project Settings - Tags And Layers
:	VPP demos and examples use <kbd>User Layer 8</kbd> as **Vehicles** for visibility and reflection
	probes.	Note that this Vehicles layer is _not_ a requirement of VPP. Only the demos and examples
	use it.

!!! Warning "&fa-warning:lg; Unity 2019.3"
	A bug causes an error when importing the _Tags And Layers_ settings in Unity 2019.3. You may
	configure the vehicles layer manually instead:

	1. Go to Project Settings > Tags And Layers > Layers
	2. Name <kbd>User Layer 8</kbd> as **Vehicles**

&fa-thumbs-up:lg; You can now head to the [Getting Started](getting-started.md){: .alert-link }
section for start using Vehicle Physics Pro.
{: .alert .alert-success }

## Using the GIT repositories

Instead of importing the unitypackages you may clone the VPP repositories directly as submodules
in your project. This allows your project to stay up-to-date with the latest changes in VPP as
they're pushed to the repository.

First you have to configure your SSH keys in [your account in projects.edy.es](https://edy.repositoryhosting.com/users/my_profile#public_keys)
(login with your VPP credentials).

!!! Info "&fa-info-circle; GIT and SSH keys"
	You can learn about GIT and SSH keys in the [GitHub help](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).
	Once created, simply configure your SSH key in [your account in projects.edy.es](https://edy.repositoryhosting.com/users/my_profile#public_keys)
	instead of GitHub.

Then you may either:

- Clone the Unity project with the demos and example scenes already working.
- Clone the submodules into an existing Unity project to provide the VPP functionality only.

The GIT URLs for the Unity project and the submodules are listed here:

- **[Professional Edition](https://edy.repositoryhosting.com/trac/edy_vehicle-physics-pro-professional)**
- **[Enterprise Edition](https://edy.repositoryhosting.com/trac/edy_vehicle-physics-pro)**

!!! Warning "&fa-warning:lg; Continuous Integration systems"
	If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
	rate. 1-2 times per day is enough for VPP repositories (12 hours = 720 minutes = 43200 seconds).
