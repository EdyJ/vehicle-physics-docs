# Switch Between VPP Editions

This guide describes how to migrate an existing Unity project from an edition of Vehicle Physics Pro to a different edition.

- Community
- Professional
- Enterprise

The Enterprise edition of Vehicle Physics Pro includes full source code, while the Professional and Community editions provide a pre-compiled DLL with the VPP components. As a result, changing the VPP edition in a project requires upgrading the project files and metadata to use the components from the new edition. All existing VPP settings, prefabs, etc., are preserved.

!!! Warning "&fa-warning:lg;Ensure you have a backup or VCS snapshot of the Assets folder"

	Upgrading the project modifies the internal references in the Unity files. If something goes wrong,
	you should be able to revert the project to its exact previous state and restart the process.

**Asset Serialization** must be configured to **Force Text** in your Unity project (Edit >
	Project Settings > Editor > Asset Serialization).

### 1. Replace the VPP Files with the New Edition

1. Delete the folder containing the current VPP edition. This is typically the "Vehicle Physics Pro" folder in the Assets directory.

2. Import the package with the new VPP edition. This will create a new "Vehicle Physics Pro" folder in Assets.

If the project uses GIT repositories and submodules, use GIT to replace the folders and/or submodules with the repositories of the new VPP edition.

At this point, the VPP components will show "missing script" warnings in the Unity editor.

### 2. Enable the SDK Upgrade Tool

1. Search for the file `SDKUpgradeTool.cs` in the Project window and open it in your script editor.

2. **SDKUpgradeTool.cs** is disabled by default with `#if false` at the top of the file. Modify this line to `#if true` and save the script. Optionally, you can enable debug mode by uncommenting the line with `#define DEBUG_MODE`.

&fa-info-circle; If the "Vehicle Physics Pro" folder is located in a subfolder within the Assets folder (rather than directly in the root), edit the script and modify the `upgraderPath` property to reflect the correct location.
{: .alert .alert-info }

### 3. Run the SDK Upgrade Tool

The SDK Upgrade Tool adds new menu entries under **Tools > Vehicle Physics > SDK Upgrade Tool**.

![SDK Upgrade Tool menus](/img/advanced/vpp-sdk-upgrade-tool-menus.png){: .clickview }

Choose the option that fits your upgrade path based on the old and new VPP editions in the project, then click **Upgrade**.

![SDK Upgrade Tool dialog](/img/advanced/vpp-sdk-upgrade-tool-dialog.png){: .clickview }

Once the process is completed, the VPP components will work correctly again, now using the new VPP edition. All scenes, prefabs, component settings, etc., will be preserved.

### 4. Disable the SDK Upgrade Tool

Edit `SDKUpgradeTool.cs` and modify the line `#if true` back to the default `#if false`. Save the file.

The menu entries will be removed, preventing the tool from being used by mistake.
