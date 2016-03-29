## Comparing VPP with other vehicle kits

Taking the correct decisions in advance can save you huge amounts of time and money. Consider these
topics before adopting any vehicle physics kit in your own project:

&fa-question-circle:lg; Got any questions? Feel free to [contact me](mailto:edy@vehiclephysics.com) and I'll
be happy to help you.
{: .alert .alert-success }

[TOC]

#### Usability and coherency

_How easy to use, easy to understand, and intuitive are other packages?_

Some kits expose a single component with everything inside it. Others artificially split the
features into an excessive number of components, requiring each single change to be traversed around
a lot of components and instances. In some extreme cases, I've seen some kits exposing in a single
wheel all possible parameters and settings individually, including audio, visual effects, materials,
etc. A single change on any of these must be done in _all_ wheels from _all_ vehicles present in the
scene for the change to be coherent.

**Vehicle Physics Pro is designed with coherency in mind**. The code is well structured in scripts
and components. It's easy to intuitively understand the role of each script and component:

- A single [VPVehicleController](/components/vehicle-controller) script provides the entire
	vehicle physics and dynamics (axles, engine, gearbox, etc.)

- The component [VPWheelCollider](/components/wheel-collider) implements the wheel entity,
	the suspension settings and draws the wheel gizmo.

- A set of add-on components can be **optionally** added to the vehicle for providing extra
	features: [input](/components/vehicle-input),
	[debug](/components/vehicle-debug),
	[ground materials](/components/ground-materials),
	[cameras](/components/camera-controller),
	[audio, visual effects, etc](/components/vehicle-addons).

VPP is nicely structured and the parameters are centralized at several levels: scene-wide,
vehicle-wide, etc. Whenever you need to modify anything you will have to modify it only once at the
location you expect to find it at.

#### Extension possibilities

_How easy is to add new features or customize the vehicles for adapting them to your project?_

Some kits are built on a monolithic script that are very hard to understand, modify or customize.
Others are so badly structured that the code is spread on dozens of arbitrary scripts and components,
becoming very difficult to understand, use, and extend.

**Vehicle Physics Pro is designed to be easily extensible and adaptable at several levels:**

- You can [write custom component add-ons](/advanced/custom-addons) as standard Unity
	components for adding new features or integrating the vehicles with your project.

- You can [design and implement custom vehicles](/advanced/custom-vehicles) if the provided
	vehicle controller doesn't fit your needs.

- You can [write custom functionality blocks](/advanced/custom-blocks) and combine them with
	the included blocks (engines, gears, other parts...) if you need simulating vehicle parts not
	provided in the VPP kit.

- You can [write your own ground material manager](/components/ground-materials) if you want
	to manage the ground materials in your own way (i.e. weather, changing track conditions...).

#### Integration into existing projects

_Can the vehicle physics kit be easy and harmlessly used in an existing project?_

Some vehicle physic kits come as _Complete Project_ or _Project Template_. Those kits are typically
someone's sandbox project for adding things, performing experiments and recording videos. But
they're _not_ designed to be easily integrated into existing projects. First, you would have to
create a new project for importing the kit (otherwise it would override your own project's settings).
Then you would have to export (!) the vehicles and scripts from the new project to .unitypackage
files, and finally import them into your own project. In the end, you'll have a bunch of prefabs and
a ton of integration work ahead.

**Vehicle Physics Pro has been conceived and designed as Editor Extension**, making it
straightforward and harmless to include into existing projects:

- No external dependencies, no naming conflicts (namespaces are used).
- Unity menu integration (Component > Vehicle Physics).
- Editor inspectors adhere to Unity's standards for usability and coherency.
- Well structured and commented C# code.

#### Physically realistic and accurate

**Vehicle Physics Pro is consolidated on the base of a solid vehicle dynamics model**. There are no
guesses, no arbitrary assumptions. The core design is physically accurate, so it accounts for all
the expected and unexpected behaviors of the vehicles.

An example: do you know what [driveline windup](https://en.wikipedia.org/wiki/Driveline_windup) is?
I hadn't heard of that until I observed the effect myself in VPP while testing the simulation with
heavy AWD vehicles.

#### Performance

_Which are the performance requirements of the package?_

The requirements give a clue on the quality of the code and the design. Saying _"it takes 1,4% cpu
usage, which is very low and surely it works on mobile"_ means nothing. Some packages even require
you to configure Unity Physics to work at 100Hz or more (default is 50Hz). This effectively
doubles the cpu impact for _all_ the physics. But it's justified? I think that denotes a bad
and unoptimized design.

**Vehicle Physics Pro has been tested with physic rates as low as 16 Hz (physics time step of 0.06)
without noticeable adverse effects.** This means that you can reduce the performance impact of the
entire Unity physics engine without affecting the vehicle's behavior.

In addition, the [integration substeps](/advanced/misc-topics-explained#solver-numeric-integration)
at the VPP solver can be configured per-vehicle. This means that you could have the Unity physics
engine working at the default 50Hz, but the main vehicle could perform its calculations at 400Hz
(8 substeps).

Code and components are efficiently structured and managed as well:

- No GC allocations.
- No messages sent between scripts at runtime.
- GetComponent, if required, is called only once on startup.

#### Documentation

Some kits provide a monolithic PDF, or a forum page, or even a Facebook page or video tutorials as
entire documentation.

**Vehicle Physics Pro dedicates this site for all the documentation in a comprehensive and coherent
structure, which gets updates regularly.** The use of responsive design allows browsing the pages
comfortably even on mobile devices.

Take a look around. The site is even [hosted at GitHub](https://github.com/EdyJ/vehicle-physics-docs).
I update and modify the docs frequently for keeping them up to date with the latest developments in
VPP. Also, I'm open to additions, fixes and collaborations.

When someone ask me about a topic requiring a detailed reply, I typically add the reply also to the
documentation for everyone wondering the same topic. Check out [Miscellaneous Topics Explained](/advanced/misc-topics-explained).

#### Source code, updates and platform support

_Is the source code provided? How to get updates? Does it support all platforms?_

Some kits provide their entire code as DLL. Others even provide _Windows only_ or platform-specific
native (!!) DLLs.

**Vehicle Physics Pro is 100% standard C# Unity code compatible with ALL platforms, present and
future, supported by Unity 3D**.

In addition, [Professional and Enterprise licensees](licensing) obtain direct access to the full
source code via GIT repository, the same I use for developing Vehicle Physics Pro. You can use
continuous integration systems for keeping your project up to date with the latest revision without
having to wait for Asset Store updates.

Enterprise licensees also receive credentials for the project's Redmine tracking system, so they
can open tickets for bugs and requests directly.

The Free and Standard licenses provide a portion of the source code of VPP (the inner vehicle
dynamics part) as cross-platform .NET DLL assembly, still seamlessly compatible with all platforms.

## Comparing with Edy's Vehicle Physics

[Edy's Vehicle Physics](http://www.edy.es/dev/vehicle-physics/) (**EVP**, available [at the Asset Store](https://www.assetstore.unity3d.com/#/content/403))
and Vehicle Physics Pro (**VPP**) are two completely different products targeting different needs.

- **EVP** provides a very simple vehicle controller where the actual _behavior_ or the vehicle is
configured directly with a few parameters: how much can it steer, how much can it drift, how much
accelerates, brakes, etc. EVP is targeted to arcade vehicles requiring physically realistic
behaviors, but the most important features being the gameplay and the handling of the vehicle.

- **VPP** implements a fully realistic and complete simulation model of a real-world vehicle. In VPP
all components of the vehicle are configured: engine, clutch, transmission, differential etc. The
behavior and handling of the vehicle depend on the configured parameters of all these components.
Same setup and tunning techniques as in real vehicles are used in VPP.

The parameters configured in VPP have a correspondence with the real world. You might get the
specifications of a real vehicle and set them up in VPP for simulating that vehicle.

#### Which one is better, EVP or VPP?

They are different products targeting different needs. They cannot be compared in so simple
terms. Each product may be better depending on the type of project they will be used at.

For example, games like **Grand Theft Auto (GTA)** or **Just Cause** best fit with EVP, as vehicles
are an accessory within the game. On the other hand, racing simulators in the style of **Gran Turismo**
or **Project Cars** best fit with VPP, as they simulate real-world vehicles in the a realistic way.

#### I find the vehicle in EVP more stable

EVP already implements driving aids (TC, ABS, ESP) while these are not available in VPP yet.

Also, EVP uses a flat friction model which is very forgiving. A similar model is also available
in VPP (the "Constant" friction curve). You might find the vehicle in VPP more stable using this
model.

#### Which product is better for performance on mobile low-mid end?

Both products have roughly the same performance at their default settings.

- In VPP the requirements might get increased depending on the specific settings of each vehicle
	(integration substeps, number of blocks in the powertrain, etc).
- In EVP the performance depends on the total number of wheels in the scene and the optimization
	settings per-vehicle.

The controller example at [Creating Custom Vehicles](/advanced/custom-vehicles) may be used
for getting the most performance out of the VPP simulation.
