
## Vehicle Physics Pro

Vehicle Physics Pro is a comprehensive vehicle simulation library designed and conceived from
scratch for providing an accurate and fully customizable vehicle physics.

Vehicle Physics Pro is currently available as editor add-on for the development tool Unity 3D.

#### Features

Fully flexible modular component system
:	Vehicle components are independent units with inputs and/or outputs that can be connected in
	any combination. Any vehicle setup can be emulated by arranging and connecting components.
	Package includes standard vehicle components such as engine, clutch, gearbox, differentials,
	torque splitter, and more.

AAA+ vehicle physics simulation model
:	Built around a physics solver providing accurate results for all vehicle types and setups.
	The precision of the numeric results depends on the integration steps only.

State-of-the-art wheel and tire friction simulation
:	Provides accurate friction values under any situation. All torques acting in the wheel are
	properly combined resulting in accurate tire forces and correctly calculated wheel spin rate.

### Licensing

Standard license (TBA)
:	Will be available at the Unity Asset Store for $100. Provides the Vehicle Physics components
	and development API.

Professional license add-on
:	Available now for early access (Alpha and Beta) for $200. Provides access to the latest
	updates via GIT repository, fully commented C# source code and exclusive content. Contact me
	at [edytado@gmail.com](mailto:edytado@gmail.com) for more information.

### Download & setup

#### Asset Store package

To Be Announced.

#### Repository access (Professional license only)

!!! warning "&fa-warning; **Alpha stage**"

	Please have in mind that:

	- Some components are yet to be completed and/or will be significantly modified.
	- The `VPVehicleController` component is under development and expected to receive important
	changes.
	- Repository contains code and scenes from past development iterations. It will be cleaned
	up for the beta stage.
	- Documentation is being written so many parts are still missing. Documented features may be
	described in a different way than they work right now. They're expected to work as described
	in future development updates.

	Feedback requested on:

	- Usage, workflow, integration in current projects
	- Class and member naming
	- Simulation: components, settings, behavior.

	Feedback on documentation:

	- Things you would want to learn, know about, or are not fully understood.
	- Typo and grammar fixes

&fa-warning; **The project is actually being developed in <u>Unity 4</u>**. There is a very serious
bug at the WheelCollider in Unity 5 (beta 19 when writing this) that turns the vehicles unstable
above certain speed (~100 Km/h or 60 mph). The project will be upgraded to Unity 5 as soon as this
bug is resolved.
{: .alert .alert-warning }

As professional licensee you should have received credentials for accessing the repositories. You
can browse them at [projects.edy.es](http://projects.edy.es).

- **Vehicle Physics Pro** is my actual Unity project as sandbox for development. It contains all
the evolutions of the vehicle physics scripts since I started researching my own tire model.
- **Common Tools core** is a submodule with common tools and scripts. Goes to "Assets/Core/Common Tools core" in the Unity project..
- **Vehicle Physics core** is the submodule that actually contains the latest vehicle physics
scripts. Goes to "Assets/Core/Vehicle Physics core" in the Unity project.

##### Setup instructions:

1.	Clone the **Vehicle Physics Pro** repository locally.

		> git clone ssh://git@projects.edy.es/edy/vehicle-physics-pro.git

2.	Check out the **wip** branch (_master_ branch is an obsolete iteration)

		> cd vehicle-physics-pro
		> git checkout wip

3. 	Fetch and update the submodules:

		> git submodule update --init --recursive

	Folders with submodules are then properly populated.

Now you can open the project at the folder vehicle-physics-pro with Unity.



## FAQ


