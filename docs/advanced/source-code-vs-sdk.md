# Source Code vs. SDK editions

Vehicle Physics Pro is available in two fashions:

- **Source Code:** Complete C# source code. Enterprise license tier.
- **SDK edition:** Multi-platform managed DLL assembly. Professional and lower license tiers.

The references to the VPP components and scripts differ between editions. Switching a project between
source code and SDK requires modifying certain files in the Unity project (.unity, .prefab and
.asset) to use the proper component references.

!!! Warning "&fa-warning:lg; Migrating projects between source code and SDK"

	Please follow these instructions carefully. I've tested the procedure extensively,
	but migrating the project is a delicate operation that modifies the internal references in the
	Unity files (**.unity**, **.prefab**, **.asset**) and might render your project unusable!

### Prerequisites

- **Asset Serialization** mode must be configured as **Force Text** in your Unity project (**Edit >
	Project Settings > Editor > Asset Serialization**).
- Ensure you can revert the Assets folder to its current state either via **backup** or **VCS**.

### From source code to SDK DLL

Your project uses the VPP source code (Common Tools Core, Vehicle Physics Core, etc) and you want to
switch to the SDK DLL edition.

You should have access to these repositories:

- **Vehicle Physics Pro SDK**: submodule with the managed DLL distribution of VPP.
- **Vehicle Physics Sample Assets**: submodule with a set of assets and resources for prototyping
	and tests.

#### Instructions

1. Ensure the **Asset Serialization** mode is configured as **Force Text** in your project.

	**Edit > Project Settings > Editor > Asset Serialization**

2. Update VPP in your project to the latest version of the source code files.

	Test your project and resolve any issues that may arise here, especially if your project was
	using an old VPP snapshot (in that case see [Vehicle Physics Pro November 2017 Update](http://www.edy.es/dev/2017/11/vehicle-physics-pro-november-2017-update/)).

3. Remove these VPP submodules or folders:

	- Common Tools Core
	- Vehicle Physics Core

	You might need to restart Unity for removing the Plugins folder in Vehicle Physics Core.

	See: [How to remove a GIT submodule](http://www.edy.es/dev/docs/git-advanced-cookbook/)

4. Clone or copy the repository **Vehicle Physics Pro SDK** to your project.

	For now on I'll assume this repository is located at `Assets/Vehicle Physics Pro/Sdk`

	Now your project will show missing references to the VPP components.

	&fa-warning:lg; If Unity shows errors on duplicated definitions or already used GUIDs it means
	that some VPP source code files weren't properly removed in the step 3. Ensure to remove them,
	then restore any changes made in the SDK repository (_git reset_, or copy it again).
	{: .alert .alert-warning }

5. If your project uses the repository **Vehicle Physics Sample Assets** ensure to check out or
	copy the **master-sdk** branch.

6. Enable the project migration tool:

	- Open the script **Assets/Vehicle Physics Pro/Sdk/Editor/DllProjectUtility.cs** in your code editor.
	- The script is commented. Uncomment it.
	- Comment the macro DEBUG_MODE for immediate effect, or leave it uncommented for a first test run.
		No files are changed with DEBUG_MODE active.
	- If the SDK repository is not located at `Assets/Vehicle Physics Pro/Sdk`, edit the
		DllProjectUtility.cs file and modify the paths for _dllPath_ and _sdkPath_.

7. Run the project migration tool from the Unity menu: **Tools > Vehicle Physics > Install SDK DLL**

	Once the process is completed the references to VPP components will be restored and the project
	will work normally.

8. Revert the changes to the DllProjectUtility.cs file for preventing conflicts the next time the
	repository is updated.

### From SDK DLL to source code

Your project uses the VPP SDK edition (Vehicle Physics Pro SDK) and you want to switch to the Source
Code edition.

You should have access to these source code repositories:

- **Common Tools Core**: submodule with common tools and utility scripts.
- **Vehicle Physics Core**: submodule with the vehicle physics simulation scripts and components.
- **Vehicle Physics Sample Assets**: submodule with a set of assets and resources for prototyping
	and tests.

#### Instructions

1.	Ensure the **Asset Serialization** mode is configured as **Force Text** in your project.

	**Edit > Project Settings > Editor > Asset Serialization**

2.	Update VPP in your project to the latest version of the SDK.

	Test your project and resolve any issues that may arise here, especially if your project was
	using an old VPP SDK snapshot.

3.	Remove these files and folders (and only these) from the folder where the repository **Vehicle
	Physics Pro SDK** is located (`Assets/Vehicle Physics Pro/Sdk` by default):

	- VehiclePhysics.dll
	- Editor/VehiclePhysics_Editor.dll
	- Fonts folder
	- Plugins folder (you might need to restart Unity for removing this folder)

	Do not confuse `VehiclePhysics.dll` with the `VehiclePhysics.txt` file next to it. Check out the
	status bar to verify that you're removing the **.dll** file only.

	Now your project will show missing references to the VPP components.

4. Clone or copy these repositories in your project:

	- **Common Tools Core**
	- **Vehicle Physics Core**

	&fa-warning:lg; If Unity shows errors on duplicated definitions or already used GUIDs it means
	that some VPP SDK files weren't properly removed in the step 3. Ensure to remove them, then
	revert any changes made to the files in Common Tools Core or Vehicle Physics Core (_git reset_,
	or copy them again).
	{: .alert .alert-warning }

5. If your project uses the repository **Vehicle Physics Sample Assets** ensure to check out or
	copy the **master** branch.

6. Enable the project migration tool:

	- Open the script **DllProjectUtility.cs** in your code editor (located at `Assets/Vehicle Physics Pro/Sdk/Editor`
		by default)
	- The script is commented. Uncomment it.
	- Comment the macro DEBUG_MODE for immediate effect, or leave it uncommented for a first test run.
		No files are changed with DEBUG_MODE active.
	- If the SDK repository is not located at `Assets/Vehicle Physics Pro/Sdk`, edit the
		DllProjectUtility.cs file and modify the paths for _dllPath_ and _sdkPath_.

7. Run the project migration tool from the Unity menu: **Tools > Vehicle Physics > Uninstall SDK DLL**

	Once the process is completed the references to VPP components will be restored and the project
	will work normally.

8. Remove the **Vehicle Physics Pro SDK** submodule or folder completely.

	See: [How to remove a GIT submodule](http://www.edy.es/dev/docs/git-advanced-cookbook/)


