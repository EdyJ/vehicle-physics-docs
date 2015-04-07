
## Vehicle Physics Pro

---

A comprehensive vehicle simulation library designed and conceived from scratch for providing
fully accurate and customizable vehicle physics. Vehicle Physics Pro is available as editor add-on
for [Unity 3D](http://unity3d.com).

Check out an early preview [here](http://www.edy.es/dev/2014/11/early-preview-of-vehicle-physics-pro/).

Play the latest Web Demo scene [here](early-access.md#sandbox-scene).

Stay tunned! Follow **[@VehiclePhysics](https://twitter.com/VehiclePhysics)** on Twitter for the
latest news and announcements.

!!! warning "&fa-warning; Project under development"

	The project status is **Alpha**. This documentation is work in progress. [Early Access](early-access.md)
	to the project's repository is available with the [Professional License](index.md#licensing) (see below).

[![Vehicle Physics Pro Alpha Sandbox scene](img/vehicle-physics-pro-alpha-sandbox-02.jpg){: .img-medium }](early-access.md#sandbox-scene)

#### Development roadmap

&fa-check; Base: Tire friction, solver, modular torque model
{: .roadmap }

&fa-check; Differential
{: .roadmap }

&fa-check; Steering, Brakes
{: .roadmap }

&fa-check; Engine + clutch
{: .roadmap }

&fa-check; Gearbox
{: .roadmap }

&fa-check; Transmission and axle setup
{: .roadmap }

&fa-check; Repository clean up and upgrade to Unity 5
{: .roadmap }

&fa-gear:spin; Scenes and vehicles for tests
{: .roadmap .wip }

**Enter the Beta stage!**
{: .roadmap .todo }

Anisotropic tire friction
{: .roadmap .todo }

Skidmarks and smoke
{: .roadmap .todo }

Additional components
{: .roadmap .todo }

Documentation
{: .roadmap .todo }

---

### Features

Fully flexible modular component system

:	Vehicle components are independent units with inputs and/or outputs that can be connected in
	any combination. Any vehicle setup can be emulated by arranging and connecting components.
	Package includes standard vehicle components such as engine, clutch, gearbox, differential,
	torque splitter, and more.

AAA+ vehicle physics simulation

:	Built around a physics solver providing accurate results for all vehicle types and setups.
	The precision of the numeric results depends on the integration steps only.

State-of-the-art wheel and tire friction simulation

:	Provides accurate friction values in all situations. All torques acting in the wheel are
	properly combined resulting in accurate tire forces and correctly calculated wheel spin rate.

Realistic and coherent

: 	The underlying concept is a custom vehicle simulation model based on essential physics facts:
	forces, torques and frictions. This model is easier to understand and simpler to calculate than
	the commonly used models, yet providing physically accurate and realistic results.

Unity 5: All problems in the WheelCollider are fixed

:	- Suspension works as expected, including correct reactions to changes in mass and springs.
	- Real-world units are used everywhere (N/m for springs, Ns/m for dampers) with physically
	realistic effects.
	- Rotation of the wheel component and/or any of its ancestors is fully supported.
	- Camber and its effects are supported.

### Licensing

&fa-warning; License versions, terms, content and pricing are _not_ definitive. Anything may change
for the package launch.
{: .alert .alert-warning }

Free edition (To Be Announced)

:	Free edition contains the [Vehicle Controller](components/vehicle-controller.md) component
	supporting a single vehicle per scene. Will be available at the Asset Store for free.

Standard license (To Be Announced)

:	Will be available at the Unity Asset Store for $100. Includes the Vehicle Physics components,
	development API and examples.

	_This product requires a license per seat._

Professional license add-on

:	A power-up to the Standard license providing access to the latest updates via GIT repository,
	fully commented C# source code and direct support via Skype.

	The Professional License add-on is available now for [Early Access](early-access.md) (Alpha and
	Beta) for **$200** per seat without requiring the Standard license. This offer will be lifted after the
	first version has been published at the Unity Asset Store. Contact me at [edytado@gmail.com](mailto:edytado@gmail.com)
	for more information.
	{: .alert .alert-info }

Site license

:	Covers unlimited developers from a single studio providing Professional level access. Priced
	$2000 - the equivalent to 1 Professional + 18 Standard licenses. Includes 5 hours of expert
	assistance.

Paid expert assistance

:	Let me take a close look at your project and I'll propose solutions to your specific issues
	with vehicles. I can also configure your vehicles to match your project's specifications. [Ask me](mailto:edytado@gmail.com)
	me for a quote.


#### Compare editions

| Features | <center>Free</center> | <center>Standard</center> | <center>Professional</center> | <center>Site</center> |
|----------|:----:|:--------:|:------------:|:----:|
Full-featured [Vehicle Controller](components/vehicle-controller.md) component	| &fa-check;	| &fa-check;	| &fa-check; | &fa-check;	|
Example scenes and tutorials	 						| &fa-check;	| &fa-check;	| &fa-check; | &fa-check;	|
Unlimited simultaneous vehicles on each scene			|	| &fa-check; | &fa-check; | &fa-check;	|
Advanced example vehicles (APC, sport car...)			|	| &fa-check;	| &fa-check;	| &fa-check;	|
Support for custom vehicles and components 				|	| &fa-check; | &fa-check; | &fa-check;	|
Additional vehicles and components with source code		|	| &fa-check; | &fa-check; | &fa-check;	|
Controller for mobile devices			 				|	| &fa-check; | &fa-check; | &fa-check;	|
Email support											|	| &fa-check;	| &fa-check;	| &fa-check;	|
Full source code										|	|	| &fa-check; | &fa-check;	|
Access to the GIT repository							|	|	| &fa-check;	| &fa-check;	|
Exclusive content and examples							|	|	| &fa-check; | &fa-check;	|
Direct support via Skype / Telegram						|	| 	| &fa-check;	| &fa-check;	|
License covers unlimited developers (single studio)		|	| 	|	| &fa-check;	|
Expert assistance										|	|	|	| &fa-check;<sup>1</sup>	|
**Price**												| **Free** | **$100** | **+$200** <sup>2</sup> | **$2000** |

<sup>1</sup> _Site license includes 5 hours of expert assistance._

<sup>2</sup> _Professional license is an add-on to the Standard license._

### Comparison with Edy's Vehicle Physics

[Edy's Vehicle Physics](http://www.edy.es/dev/vehicle-physics/) (**EVP**, available [at the Asset Store](https://www.assetstore.unity3d.com/#/content/403))
is a simple vehicle physics simulation model focused on the ease of configuring the vehicle's
behavior. Provides fairly _realistic-looking_ vehicle reactions targeted for arcade and
gameplay-based games (GTA style).

Vehicle Physics Pro (**VPP**) is a strictly realistic vehicle physics simulation engine. Includes a
custom tire friction model and a full-featured drivetrain simulation providing all the realistic
effects you expect from actual vehicles. All parameters have a correspondence with real physics, so
real world parameters have an accurate result in the simulation. The reactions of the vehicle under
each situation are configured in a physically realistic way according to the configuration of the
vehicle's components.

I find the vehicle in EVP more stable
:	EVP already implements the driving aids (TC, ABS, ESP) while these are not available in VPP yet.
	You can try disabling the driving aids in the Vehicle Controller in EVP.

	Also, EVP uses a flat friction model which is very forgiving. A similar model is also available
	in VPP (the "Constant" friction curve). You might find the vehicle in VPP more stable using this
	model.

Which product is better for performance on mobile low-mid end?
:	Both products have roughly the same performance at their default settings. In VPP the
	requirements might get increased depending on the specific settings of each vehicle
	(integration substeps, number of components in the transmission, etc). In EVP the performance
	depends on the total number of wheels in the scene.

	I plan to include an absolutely simple Vehicle Controller component in VPP as part of the
	documentation for [Creating Custom Vehicles](advanced/custom-vehicles.md). This example could be
	used also for ensuring the most performance out of the VPP simulation.

### Download & setup

To Be Announced.

---