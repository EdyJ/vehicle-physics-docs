
# Setting Up Vehicle Physics Pro

VPP may be downloaded as:

- **Unitypackage** file to be imported directly in Unity.
- **GIT repositories** that may reside in existing Unity projects as GIT submodules.
- **[Asset Store Package](https://assetstore.unity.com/packages/tools/physics/vehicle-physics-pro-community-edition-153556)** (Free Community Edition).

When upgrading VPP, check the [Changelog](/about/changelog) for Release Notes and upgrade guides on the newer versions.

If switching between VPP editions (i.e. from Professional to Enterprise), then check out [Switch Between VPP Editions](https://vehiclephysics.com/advanced/switch-between-vpp-editions/).

### Supported Unity versions

- **LTS releases** in 20XX versions (from Unity 2019 LTS)
- **Stable LTS releases** in generational versions (Unity 6.3+, 7.3+, ...)

Vehicle Physics Pro may work in other Unity versions, but we can only provide official support on these versions.

### Download and import VPP unitypackage

1. Download the .unitypackage file. Professional and Enterprise editions require an active [VPP subscription](/about/licensing/).

	- **[Community Edition](https://assetstore.unity.com/packages/tools/physics/vehicle-physics-pro-community-edition-153556)**
	{: .spacer }
	- **[Professional Edition](https://vehiclephysics.repositoryhosting.com/webdav/vehiclephysics_vehicle-physics-pro-professional/)**
	{: .spacer }
	- **[Enterprise Edition](https://vehiclephysics.repositoryhosting.com/webdav/vehiclephysics_vehicle-physics-pro/)**
	{: .spacer }

2. Import the package into an Unity 3D project.

	- VPP is imported into the folder **Assets/Vehicle Physics Pro**. Feel free to move it to a
		different location.
	- Check out the **Readme PDF** file in that folder for an initial overview of VPP.

### Configure the Project Settings

It is recommended to use **Linear color space** (Project Settings > Player > Other Settings).

The subfolder **VPP Project Settings** provides specific .unitypackage files that may be imported
individually to configure specific project sections.

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

	&fa-exclamation-circle:lg; **WARNING:** Don't configure _Solver Type_ = _Temporal Gauss Seidel (TGS)_ in
	the physics settings as this causes weird issues in vehicles. Always configure _Solver Type_ =
	_Projected Gauss Seidel (PGS)_.
	{: .alert .alert-danger }

Project Settings - Quality
:	Enhances the visual quality of the shadows and textures in large scenarios.

Project Settings - Tags And Layers
:	VPP demos and examples use <kbd>User Layer 8</kbd> as **Vehicles** for visibility and reflection
	probes.	Note that this Vehicles layer is _not_ a requirement of VPP. Only the demos and examples
	use it.

&fa-thumbs-up:lg; You can now head to the [Getting Started](/user-guide/getting-started/){: .alert-link }
section for start using Vehicle Physics Pro.
{: .alert .alert-success }

## Using the GIT repositories

Instead of importing the unitypackages you may clone the VPP repositories directly as submodules
in your project. This allows your project to stay up-to-date with the latest changes in VPP as
they're pushed to the repository. Accessing the repositories requires an active [VPP subscription](/about/licensing/).

- **[Professional Edition repositories](https://vehiclephysics.repositoryhosting.com/trac/vehiclephysics_vehicle-physics-pro-professional)**
	{ .spacer }
- **[Enterprise Edition repositories](https://vehiclephysics.repositoryhosting.com/trac/vehiclephysics_vehicle-physics-pro)**
	{ .spacer }

First you have to configure your SSH keys in [your account in vehiclephysics.repositoryhosting.com](https://vehiclephysics.repositoryhosting.com/users/my_profile#public_keys)
(login with your VPP credentials).

!!! Info "&fa-info-circle; GIT and SSH keys"
	You can learn about GIT and SSH keys in the [GitHub help](https://help.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).
	Once created, simply configure your SSH key in [your account in vehiclephysics.repositoryhosting.com](https://vehiclephysics.repositoryhosting.com/users/my_profile#public_keys)
	instead of GitHub.

Then you may either:

- Clone the Unity project with the demos and example scenes already working.
- Clone the submodules into an existing Unity project to provide the VPP functionality only.

!!! Warning "&fa-warning:lg; Continuous Integration systems"
	If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
	rate. 1-2 times per day is enough to keep the VPP repositories updated (12 hours = 720 minutes
	= 43200 seconds).
