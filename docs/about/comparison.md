## Comparing VPP with other vehicle kits

Taking the correct decisions in advance can save you huge amounts of time and money. Consider these
topics before adopting any vehicle physics kit in your own project:

&fa-question-circle:lg; Got any questions? Feel free to [contact me](mailto:edy@vehiclephysics.com) and I'll
be happy to help you.
{: .alert .alert-success }

[TOC]

### Usability and coherency

**Vehicle Physics Pro is designed with coherency in mind**. The code is well structured in scripts
and components. It's easy to intuitively understand the role of each script and component:

- A single [VPVehicleController](/components/vehicle-controller) script provides the entire
	vehicle physics and dynamics (axles, engine, gearbox, etc.)
- The component [VPWheelCollider](/components/wheel-collider) implements the wheel entity,
	the suspension settings and draws the wheel gizmo.
- A set of add-on components can be **optionally** added to the vehicle for providing extra
	features: [input](/components/vehicle-input),
	[telemetry](/components/vehicle-telemetry),
	[ground materials](/components/ground-materials),
	[cameras](/components/camera-controller),
	[audio, visual effects, etc](/components/vehicle-addons).

VPP is nicely structured and the parameters are centralized at several levels: scene-wide,
vehicle-wide, etc. Whenever you need to modify anything you will have to modify it only once at the
location you expect to find it at.

### Extension possibilities

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

### Integration into existing projects

**Vehicle Physics Pro has been conceived and designed as Editor Extension**, making it
straightforward and harmless to include into existing projects:

- No external dependencies, no naming conflicts (uses the namespace _VehiclePhysics_).
- Unity menu integration (Component > Vehicle Physics).
- Editor inspectors adhere to Unity's standards for usability and coherency.
- Well structured and commented C# code.

### Physically realistic and accurate

**Vehicle Physics Pro is consolidated on the base of a solid vehicle dynamics model**. The design
of the core dynamics is physically accurate, so it accounts for all the expected and unexpected
behaviors of the vehicles.

Fun example: I hadn't ever heard of [driveline windup](https://en.wikipedia.org/wiki/Driveline_windup)
until I observed in the VPP Telemetry that heavy AWD vehicles and locked differentials used to
accumulate static torques in the wheels. It looked like a bug at first, but then I got informed and
realized that the cause was the Driveline Windup effect.

### Documentation and support

**Vehicle Physics Pro dedicates this site for all the documentation in a comprehensive and coherent
structure, which gets updates regularly.** The use of responsive design allows browsing the pages
comfortably even on mobile devices.

- The documentation site is [hosted at GitHub](https://github.com/EdyJ/vehicle-physics-docs). I update
	and modify the docs frequently for keeping them up to date with the latest developments. Also, I'm
	open to additions, fixes and collaborations.
- A dedicated [Support Q&A Site](https://support.vehiclephysics.com) is available for users to ask
	questions and access to answers publicly.
- Additionally, I provide additional paid services at hourly rates, either remotely or on-location.
	Check out the [rates and terms for Additional Services here](/about/licensing/#additional-services).

### Performance

The number of [integration substeps](/advanced/misc-topics-explained#solver-numeric-integration)
in the VPP solver can be configured per-vehicle. This means that you could have the Unity physics
engine working at the default 50Hz, but the main vehicle could perform its calculations at, for
example, 400Hz by specifying 8 substeps.

Code and components are efficiently structured and managed as well:

- No GC allocations.
- No messages sent between scripts at runtime (SendMessage).
- GetComponent, if required, is called only once on component initialization.

Additionally, **Vehicle Physics Pro has been tested with physic rates as low as 16 Hz (physics time
step of 0.06) without noticeable adverse effects.** This means that you can reduce the performance
impact of the entire Unity physics engine without affecting the vehicle's behavior.

### Source code, updates and platform support

**Vehicle Physics Pro is 100% standard C# Unity code compatible with ALL platforms, present and
future, supported by Unity 3D**.

The Community and Professional licenses provide a portion of the source code of VPP (the core
vehicle dynamics part) compiled as cross-platform .NET DLL assembly, also seamlessly compatible
with all target platforms in Unity.

In addition, [Enterprise licensees](/about/licensing) obtain direct access to the full source code
via GIT repository, the same I use for developing Vehicle Physics Pro. You can use continuous
integration systems for keeping your project up to date with the latest revision without having to
wait for Asset Store updates.

### Comparing VPP with Edy's Vehicle Physics

[Edy's Vehicle Physics](http://www.edy.es/dev/vehicle-physics/) (**EVP**, available [at the Asset Store](https://www.assetstore.unity3d.com/#/content/403))
and Vehicle Physics Pro (**VPP**) are two completely different products targeting different needs.

- **EVP** provides a very simple vehicle controller where the actual _behavior_ or the vehicle is
configured directly with a few parameters: how much can it steer, how much can it drift, how much
accelerates, brakes, etc. EVP is targeted to arcade and semi-arcade vehicles requiring physically
realistic behaviors, but the most important features being the gameplay and the handling of the
vehicle. Think in games like **Grand Theft Auto (GTA)** and **Just Cause**.

- **VPP** implements a fully realistic and complete simulation model of a real-world vehicle. In VPP
all components of the vehicle are configured using real-world parameters: engine, clutch,
transmission, differential etc. The behavior and handling of the vehicle depend on the configured
parameters of all these components. Same setup and tunning techniques as in real vehicles are used
in VPP. Think in simulators like **Gran Turismo** or **Project Cars**.
