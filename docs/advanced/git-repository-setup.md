# GIT Repository Setup

Professional and Enterprise licenses include updates via GIT repositories. Repositories allow to
include specific parts of VPP in your projects and keep them updated.

You may use your
credentials for browsing the repositories here:

[http://projects.edy.es/login](http://projects.edy.es/login)

##### Professional Edition

- **Vehicle Physics Pro - Professional**: Unity project with the SDK and examples. Requires the
	submodules below to be located in the corresponding folders under `Assets/Vehicle Physics Pro`.
- **Vehicle Physics Pro SDK**: submodule with the VPP SDK files only.
- **Vehicle Physics Sample Assets**: submodule with a set of assets and resources for prototyping and tests.

##### Enterprise Edition

- **Vehicle Physics Pro - Enterprise**: Unity project with source code, examples, development
	resources, etc. Requires the submodules below to be located in the corresponding folders under
	`Assets/Core`.
- **Common Tools Core**: submodule with common tools and utility scripts.
- **Vehicle Physics Core**: submodule with the vehicle physics simulation scripts and components.
- **Vehicle Physics Sample Assets**: submodule with a set of assets and resources for prototyping and tests.
- **Vehicle Physics Specialized Assets**: submodule with specialized vehicle support (excavators, loaders, caterpillars, etc).

!!! Info "Importing the Blender 3D models"
	Some 3D objects in the repositories are in Blender format (.blend). These models require Blender
	installed to be imported properly in Unity. [Blender site](http://blender.org)

### 1. Configure the SSH public key

The submodules are accessed via ssh, so it's highly recommend to set up the ssh public key in your
account. Otherwise, you would need to modify the .submodules file for http access.

1.	Generate the ssh keys. Follow the steps 1 to 3 at GitHub's guide ["Generating a new SSH key"](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

2.	Add the ssh **public key** to [your account](http://projects.edy.es/users/my_profile#public_keys).

3.	Test your connection. Open Git Bash, then enter:

		:::text
		$ ssh -T git@projects.edy.es

	The first time you will receive a warning. Reply _Yes_. You should then see this:

		:::text
		Welcome to Repository Hosting's Git Server. You have been successfully authenticated.
		However you cannot connect directly with SSH, you must use the 'git' command.

	Your connection via SSH is now correct. Proceed to the next step, cloning the VPP project.

### 2. Clone the VPP sandbox project

- **Professional Edition**<br>
	`ssh://git@projects.edy.es/edy/vehicle-physics-pro-professional.git`

- **Enterprise Edition**<br>
	`ssh://git@projects.edy.es/edy/vehicle-physics-pro.git`

You can find the URLs for all repositories and submodules at the [projects site](http://projects.edy.es).

1.	Open Git Bash.

2.	_cd_ to a folder of your choice, then enter:

		:::text
		$ git clone --depth=1 <repository-url>

	The repository will be created in a with the name of the repository.

3. 	Fetch and update the submodules:

		:::text
		$ cd <just-created-repository-path>
		$ git submodule update --init --recursive

3.	Now you can open the project with Unity.

### 3. Maintenance & updates

##### Updating to the latest revision

This is also necessary after checking out any branch or revision in the main repository.

	:::text
	$ git pull --recurse-submodules
	$ git submodule update --init --recursive

##### Continuous Integration systems

If you're using a CI system such as TeamCity, ensure to set the refresh interval to a reasonable
rate. 1-2 times per day is enough for VPP repositories (12 hours = 720 minutes = 43200 seconds).

##### Downloading as ZIP files

Alternatively to you may download the repositories as zipped archives. [Log in](http://projects.edy.es/login)
at your account and open the repository's GitWeb URL:

![VPP Repository Links](/img/advanced/vpp-download-zip-source-repo-links.png){: .clickview .img-small }

Then click the first **zip** link for downloading the source code from the latest snapshot:

![VPP Download ZIP Source](/img/advanced/vpp-download-zip-source.png){: .clickview .img-small }

The VPP Unity projects require the submodules to be downloaded and placed in the corresponding
folders under `Assets/Vehicle Physics Pro` (Professional) or `Assets/Core` (Enterprise).

# Migrating projects between source code and SDK

The SDK version of Vehicle Physics Pro is deployed as a multi-platform managed DLL assembly. The
references to the VPP components differ from the source code version. Switching between source code
and SDK requires the Unity projects to be configured to use the proper component references.

&fa-warning:lg; Please follow these instructions carefully. I've tested the procedure extensively,
but migrating the project is a delicate operation that modifies the internal references in your
project files (.unity, .prefab and .asset) and might render your project unusable!
{: .alert .alert-warning }

### Prerequisites

- **Asset Serialization** mode must be configured as **Force Text** in your Unity project (Edit >
	Project Settings > Editor > Asset Serialization).
- Ensure you can revert the Assets folder to its current state either via backup or VCS.

### From source code to SDK DLL

You should have access to these repositories:

- **Vehicle Physics Pro SDK**: submodule with the managed DLL distribution of VPP.
- **Vehicle Physics Sample Assets**: submodule with a set of assets and resources for prototyping
	and tests.

Instructions:

1. Ensure the **Asset Serialization** mode is configured as **Force Text** in your project.

	Edit > Project Settings > Editor > Asset Serialization

2. Update VPP in your project to the latest version of the source code files.

	Test your project and resolve any issues that may arise here, especially if your project was
	using an old VPP snapshot.

	See: [Vehicle Physics Pro November 2017 Update](http://www.edy.es/dev/2017/11/vehicle-physics-pro-november-2017-update/)

3. Remove these VPP submodules or folders:

	- Common Tools Core
	- Vehicle Physics Core

	You might need to restart Unity for removing the Plugins folder in Vehicle Physics Core

	See: [How to remove a GIT submodule](http://www.edy.es/dev/docs/git-advanced-cookbook/)

4. Clone or copy the repository **Vehicle Physics Pro SDK** to your project.

	For now on I'll assume this repository is located at Assets/Vehicle Physics Pro/Sdk

	Now your project will show missing references to the VPP components.

	If Unity shows errors on duplicated definitions or already used GUIDs it means that some VPP
	source code files weren't properly removed in the step 3. Ensure to remove them, then restore
	any changes made in the SDK repository (_git reset_, or copy it again).
	{: .alert .alert-warning }

5. If your project uses the repository **Vehicle Physics Sample Assets** ensure to check out or
	copy the **master-sdk** branch.

6. Enable the project migration tool:

	- Open the script Assets/Vehicle Physics Pro/Sdk/Editor/**DllProjectUtility.cs** in your code editor.
	- The script is commented. Uncomment it.
	- Comment the macro DEBUG_MODE for immediate effect, or leave it uncommented for a first test run.
		No files are changed with DEBUG_MODE active.

7. If the SDK repository is not located at **Assets/Vehicle Physics Pro/Sdk**, edit the
	DllProjectUtility.cs file and modify the paths for _dllPath_ and _sdkPath_.

8. Run the project migration tool from the Unity menu: Tools > Vehicle Physics > **Install SDK DLL**

	Once the process is completed the references to VPP components will be restored and the project
	will work normally.

9. Comment or revert the changes to the DllProjectUtility.cs file for preventing conflicts the
	next time the repository is updated.

### From SDK DLL to source code

You should have access to these source code repositories:

- **Common Tools Core**: submodule with common tools and utility scripts.
- **Vehicle Physics Core**: submodule with the vehicle physics simulation scripts and components.
- **Vehicle Physics Sample Assets**: submodule with a set of assets and resources for prototyping
	and tests.

Instructions:

1.	Ensure the **Asset Serialization** mode is configured as **Force Text** in your project.

	Edit > Project Settings > Editor > Asset Serialization

2.	Update VPP in your project to the latest version of the SDK.

	Test your project and resolve any issues that may arise here, especially if your project was
	using an old VPP SDK snapshot.

3.	Remove these files and folders (and only these) from the folder where the repository **Vehicle
	Physics Pro SDK** is located (Assets/Vehicle Physics Pro/Sdk by default):

	- VehiclePhysics.dll
	- Editor/VehiclePhysics_Editor.dll
	- Fonts folder
	- Plugins folder (you might need to restart Unity for removing this folder)

	Do not confuse VehiclePhysics.dll with the VehiclePhysics.txt file next to it. Check out the
	status bar to verify that you're removing the correct file.

	Now your project will show missing references to the VPP components.

4. Clone or copy these repositories in your project:

	- **Common Tools Core**
	- **Vehicle Physics Core**

	If Unity shows errors on duplicated definitions or already used GUIDs it means that some VPP
	SDK files weren't properly removed in the step 3. Ensure to remove them, then restore
	any changes made in these VPP repositories (_git reset_, or copy them again).
	{: .alert .alert-warning }

5. If your project uses the repository **Vehicle Physics Sample Assets** ensure to check out or
	copy the **master** branch.

6. Enable the project migration tool:

	- Open the script **DllProjectUtility.cs** in your code editor (located at Assets/Vehicle Physics Pro/Sdk/Editor/
		by default)
	- The script is commented. Uncomment it.
	- Comment the macro DEBUG_MODE for immediate effect, or leave it uncommented for a first test run.
		No files are changed with DEBUG_MODE active.

7. If the SDK repository is not located at **Assets/Vehicle Physics Pro/Sdk**, edit the
	DllProjectUtility.cs file and modify the paths for _dllPath_ and _sdkPath_.

8. Run the project migration tool from the Unity menu: Tools > Vehicle Physics > **Uninstall SDK DLL**

	Once the process is completed the references to VPP components will be restored and the project
	will work normally.

9. Remove the **Vehicle Physics Pro SDK** submodule or folder completely.

	See: [How to remove a GIT submodule](http://www.edy.es/dev/docs/git-advanced-cookbook/)

10. Comment or revert the changes to the DllProjectUtility.cs file for preventing conflicts the
	next time the repository is updated.


