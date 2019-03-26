
# Setting Up Vehicle Physics Pro

Welcome to Vehicle Physics Pro (VPP)! The most complete, accurate and realistic vehicle physics kit
available for Unity 3D.

VPP is delivered as an example Unity 3D project which uses a set of submodules. The example Unity 3D
project may be used as sandbox for testing and learning VPP, or even as a startup template. The
submodules may also be included in existing projects directly. See [Repository Reference](#repository-reference)
below for details and dependencies.

All projects and submodules are hosted at [projects.edy.es](http://projects.edy.es) as **GIT
repositories**. The credentials for accessing the repositories are sent to you after purchasing the
license. You may either clone the repositories via GIT or [download them as ZIP files](#downloading-as-zip-files).

!!! Info "Importing the Blender 3D models"
	Some 3D objects in the repositories are in Blender format (.blend). These models require Blender
	installed (free) to be imported properly in Unity. [Blender site](http://blender.org)

## Cloning the repositories via GIT

Requires GIT installed. I use [Git Extensions](https://gitextensions.github.io), an all-in-one setup
that installs GIT, tools and a handy UI.

#### 1. Configure the SSH public key

This is strongly recommended. Once configured, access to VPP repositories is pretty straightforward.

1.	Open Git Bash. If you've installed [Git Extensions](https://gitextensions.github.io), just
	right-click any folder and select "Git Bash".

2.	Generate the ssh keys. Paste the text below, substituting in your email address:

		$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

3.	When you're prompted to "Enter a file in which to save the key", press Enter. This accepts the
	default file location.

4.	Upload the ssh **public key** (`id_rsa.pub`) to [your account in projects.edy.es](http://projects.edy.es/users/my_profile#public_keys).

5.	Test your connection. Enter:

		$ ssh -T git@projects.edy.es

	The first time you will receive a warning. Reply _Yes_. You should then see this:
	<pre><code class="nohighlight">Welcome to Repository Hosting's Git Server. You have been successfully authenticated.
	However you cannot connect directly with SSH, you must use the 'git' command.</code></pre>

	Your connection via SSH is now correct. Proceed to the next step, cloning the VPP project.

#### 2. Clone the VPP example project

1.	Open Git Bash, then _cd_ to a folder where you want the project to be cloned into. If you've
	installed [Git Extensions](https://gitextensions.github.io), just right-click the folder of
	your choice and select "Git Bash".

2.	Clone the repository and submodules. Type or paste each line (without the _$_) in Git Bash
	pressing Enter after each one:

	**_Professional Edition:_**

		$ git clone ssh://git@projects.edy.es/edy/vehicle-physics-pro-professional.git
		$ cd vehicle-physics-pro-professional
		$ git submodule update --init --recursive

	**_Enterprise Edition:_**

		$ git clone --depth=1 ssh://git@projects.edy.es/edy/vehicle-physics-pro.git
		$ cd vehicle-physics-pro
		$ git submodule update --init --recursive

	The repository will be created in a folder with the name of the repository.

3.	Now you can open the project in Unity 3D. Proceed to [Getting Started](getting-started.md) for
	a quick walkthrough.

#### 3. Update to the most recent version

Fetch the most recent updates to the example project.

1.	Open Git Bash, then _cd_ to the folder where the Untiy project is located. If you've installed
	[Git Extensions](https://gitextensions.github.io), just right-click the folder and select "Git
	Bash".

2.	Fetch and update the repositories. Type or paste each line (without the _$_) in Git Bash
	pressing Enter after each one:

		$ git pull --recurse-submodules
		$ git submodule update --init --recursive

!!! Warning "Continuous Integration systems"
	If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
	rate. 1-2 times per day is enough for VPP repositories (12 hours = 720 minutes = 43200 seconds).

## Downloading as ZIP files

1.	Download and unzip the Unity 3D project for your VPP edition. Open the repository log below,
	then click the topmost **zip** link for downloading the latest zip snapshot:

	**[Professional Edition](http://projects.edy.es/git/edy/vehicle-physics-pro-professional.git/shortlog/refs/heads/master?js=1)** &nbsp; | &nbsp; **[Enterprise Edition](http://projects.edy.es/git/edy/vehicle-physics-pro.git/shortlog/refs/heads/master?js=1)**

2.	Repeat the process for each submodule below. Unzip each one to the specified location in the
	project:

	Professional Edition submodules | Folder
	--------------------------------|---------
	[Vehicle Physics Pro SDK](http://projects.edy.es/git/edy/vehicle-physics-pro-sdk.git/shortlog/refs/heads/master?js=1) | `Assets/Vehicle Physics Pro/Sdk`
	[Vehicle Physics Sample Assets](http://projects.edy.es/git/edy/vehicle-physics-sample-assets.git/shortlog/refs/heads/master-sdk?js=1) (`master-sdk` branch) | `Assets/Vehicle Physics Pro/Sample Assets`

	Enterprise Edition submodules   | Folder
	--------------------------------|---------
	[Common Tools Core](http://projects.edy.es/git/edy/common-tools-core.git/shortlog/refs/heads/master?js=1) | `Assets/Vehicle Physics Pro/Core/Common Tools Core`
	[Vehicle Physics Core](http://projects.edy.es/git/edy/vehicle-physics-core.git/shortlog/refs/heads/master?js=1) | `Assets/Vehicle Physics Pro/Core/Vehicle Physics Core`
	[Vehicle Physics Sample Assets](http://projects.edy.es/git/edy/vehicle-physics-sample-assets.git/shortlog/refs/heads/master?js=1) (`master` branch) | `Assets/Vehicle Physics Pro/Core/Vehicle Physics Sample Assets`
	[Vehicle&nbsp;Physics&nbsp;Specialized&nbsp;Assets](http://projects.edy.es/git/edy/vehicle-physics-specialized-assets.git/shortlog/refs/heads/master?js=1) | `Assets/Vehicle Physics Pro/Core/Vehicle Physics Specialized Assets`

3.	Now you can open the project in Unity 3D. Proceed to [Getting Started](getting-started.md) for
	a quick walkthrough.

## Using VPP in existing projects

Simply include the VPP repositories as folders or GIT submodules under the Assets folder in your
Unity project. See the [Repository Reference](#repository-reference) below for GIT URLs and
requirements.

#### Professional Edition

The repository **Vehicle Physics Pro SDK** contains everything needed to run VPP vehicles.
Additionally, you may include _Vehicle Physics Sample Assets_ (`master-sdk` branch) for quick
prototyping.

#### Enterprise Edition

Enterprise Edition requires **Common Tools Core** and **Vehicle Physics Core** to run VPP vehicles.
Additionally, you may include _Vehicle Physics Sample Assets_ for quick prototyping. The repository
_Vehicle Physics Specialized Assets_ includes utility scripts to run specialized vehicles such as
excavators, caterpillars, dumpers, etc.

## Repository reference

### Professional Edition

![VPP Professional Edition repositories](/img/user-guide/vpp-repository-professional.png)

Repository      |  URLs  | Description
----------------|--------|----------------
**[Vehicle&nbsp;Physics&nbsp;Pro&nbsp;-&nbsp;Professional](http://projects.edy.es/trac/edy_vehicle-physics-pro-professional)** | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-pro-professional.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-pro-professional.git/shortlog/refs/heads/master?js=1) | Example project for Unity 3D with development assets and example scenes.<br><br>**_Note:_** The ZIP snapshot doesn't include the submodules. Downloading as ZIP requires the submodules below to be downloaded separately and placed in the corresponding folders under `Assets/Vehicle Physics Pro`.
[Vehicle Physics Pro SDK](http://projects.edy.es/trac/edy_vehicle-physics-pro-sdk) | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-pro-sdk.git)<br>[GIT&#8209;HTTP](http://projects.edy.es/git/edy/vehicle-physics-pro-sdk.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-pro-sdk.git/shortlog/refs/heads/master?js=1) | Submodule with the Vehicle Physics Pro SDK files.<br>This repo contains everything needed to run VPP in existing projects. |
[Vehicle Physics Sample Assets](http://projects.edy.es/trac/edy_vehicle-physics-sample-assets) | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-sample-assets.git)<br>[GIT&#8209;HTTP](http://projects.edy.es/git/edy/vehicle-physics-sample-assets.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-sample-assets.git/shortlog/refs/heads/master-sdk?js=1) | Submodule with a set of assets and resources for prototyping and tests.<br>Requires Vehicle Physics Pro SDK.<br><br>**_Important:_** check-out or download the `master-sdk` branch instead of master for this repo to work with the VPP SDK files. |

### Enterprise Edition

![VPP Enterprise Edition repositories](/img/user-guide/vpp-repository-enterprise.png)

Repository      |  URLs  | Description
----------------|--------|----------------
**[Vehicle&nbsp;Physics&nbsp;Pro&nbsp;-&nbsp;Enterprise](http://projects.edy.es/trac/edy_vehicle-physics-pro)** | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-pro.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-pro.git/shortlog/refs/heads/master?js=1) | Example project for Unity 3D with source code, examples, development resources, etc.<br><br>**_Note:_** The ZIP snapshot doesn't include the submodules. Downloading as ZIP requires the submodules below to be downloaded separately and placed in the corresponding folders under `Assets/Core`.
[Common Tools Core](http://projects.edy.es/trac/edy_common-tools-core) | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/common-tools-core.git)<br>[GIT&#8209;HTTP](http://projects.edy.es/git/edy/common-tools-core.git)<br>[ZIP](http://projects.edy.es/git/edy/common-tools-core.git/shortlog/refs/heads/master?js=1) | Submodule with common tools and utility scripts.
[Vehicle Physics Core](http://projects.edy.es/trac/edy_vehicle-physics-core) | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-core.git)<br>[GIT&#8209;HTTP](http://projects.edy.es/git/edy/vehicle-physics-core.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-core.git/shortlog/refs/heads/master?js=1) | Submodule with the vehicle physics simulation scripts and components.<br>Requires Common Tools Core.<br>This repo together with Common Tools Core is everything needed to run VPP in existing projects.
[Vehicle Physics Sample Assets](http://projects.edy.es/trac/edy_vehicle-physics-sample-assets) | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-sample-assets.git)<br>[GIT&#8209;HTTP](http://projects.edy.es/git/edy/vehicle-physics-sample-assets.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-sample-assets.git/shortlog/refs/heads/master?js=1) | Submodule with a set of assets and resources for prototyping and tests.<br>Requires Common Tools Core and Vehicle Physics Core.
[Vehicle&nbsp;Physics&nbsp;Specialized&nbsp;Assets](http://projects.edy.es/trac/edy_vehicle-physics-specialized-assets) | [GIT&#8209;SSH](ssh://git@projects.edy.es/edy/vehicle-physics-specialized-assets.git)<br>[GIT&#8209;HTTP](http://projects.edy.es/git/edy/vehicle-physics-specialized-assets.git)<br>[ZIP](http://projects.edy.es/git/edy/vehicle-physics-specialized-assets.git/shortlog/refs/heads/master?js=1) | Submodule with specialized vehicle support (excavators, loaders, caterpillars, etc).<br>Requires Common Tools Core and Vehicle Physics Core.
