
## Vehicle Physics Pro

---

Vehicle Physics Pro is an advanced vehicle simulation kit providing fully realistic and accurate
vehicle physics in [Unity 3D](http://unity3d.com).


Stay tunned! Follow **[@VehiclePhysics](https://twitter.com/VehiclePhysics)** on Twitter for the
latest news and announcements.

!!! warning "&fa-warning:lg; Project under development"

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

&fa-check; Skidmarks, smoke, tire trails
{: .roadmap }

&fa-check; Vehicle audio: engine, turbo, impacts, tire skid...
{: .roadmap }

&fa-check; Minor bug fixes and code polishing
{: .roadmap }

&fa-check; Scenes and vehicles for tests
{: .roadmap }

&fa-gear:spin; **Enter the Beta stage!**
{: .roadmap .wip }

Anisotropic tire friction
{: .roadmap .todo }

Documentation
{: .roadmap .todo }

**First release!**
{: .roadmap .todo }

Additional components
{: .roadmap .todo }


---

### Features

Modular implementation

:	Vehicle blocks are independent units with inputs and/or outputs that can be connected in
	any combination. Any vehicle setup can be emulated by arranging and connecting blocks.
	Package includes standard vehicle blocks such as engine, clutch, gearbox, differential,
	torque splitter, and more.

Advanced AAA+ vehicle physics simulation

:	Built around a physics solver providing accurate results for all vehicle types and setups.
	The precision of the numeric results depends on the integration steps only.

Advanced wheel and tire friction simulation

:	Provides accurate friction values in all situations. All torques acting in the wheel are
	properly combined resulting in accurate tire forces and correctly calculated wheel spin rate.

Realistic and coherent

: 	The underlying concept is a custom vehicle simulation model based on essential physics facts:
	forces, torques and frictions. This model is easier to understand and simpler to calculate than
	the commonly used models, yet providing physically accurate and realistic results.

### Licensing

&fa-warning:lg; License versions, terms, content and pricing are _not_ definitive. Anything may change
during the development stage.
{: .alert .alert-warning }

&fa-info-circle:lg; The Professional License add-on is available now for [Early Access](early-access.md) (Alpha and
Beta) for **$290** without requiring the Standard license. This offer will be lifted after the
first version has been published at the Unity Asset Store. Contact me at [edytado@gmail.com](mailto:edytado@gmail.com)
for more information.
{: .alert .alert-info }

Free edition (To Be Announced)

:	Free edition contains the [Vehicle Controller](components/vehicle-controller.md) component
	supporting a single vehicle per scene. Will be available at the Asset Store for free.

Standard license (To Be Announced)

:	Will be available at the Unity Asset Store. Includes the Vehicle Physics components,
	development API and several pre-configured vehicles. _This product requires a license per seat._

Professional license add-on

:	A power-up to the Standard license providing access to the latest updates via GIT repository,
	fully commented C# source code, premium vehicles, and direct support via Skype and Telegram.

Enterprise license

:	Covers unlimited developers from a single studio providing Professional level access and
	includes Expert Assistance the first 30 days.

	This license is suitable for commercial entities with annual gross revenues (based on prior
	fiscal year) of US\$100,000 or more, or that have raised funds (including but not limited to
	crowdfunding) in excess of US\$100,000 during the most recently completed fiscal year, or
	non-commercial entities with a total annual budget in excess of US\$100,000 for the entire
	non-commercial entity.

Expert Assistance

:	Let me take a close look at your project and I'll propose solutions to your specific issues
	with vehicles. I can also configure your vehicles to match your project's specifications.
	[Ask me](mailto:edytado@gmail.com) me for a quote.


#### Compare editions

| Features | <center>Free</center> | <center>Standard</center> | <center>Professional</center> | <center>Enterprise</center> |
|----------|:----:|:--------:|:------------:|:----:|
Full-featured [Vehicle Controller](components/vehicle-controller.md) component	| &fa-check;	| &fa-check;	| &fa-check; | &fa-check;	|
Example scenes and vehicles		 						| &fa-check; | &fa-check; | &fa-check; | &fa-check; |
Unlimited simultaneous vehicles on each scene			|	| &fa-check; | &fa-check; | &fa-check;	|
Advanced pre-configured vehicles (APC, sport car...)	|	| &fa-check; | &fa-check; | &fa-check;	|
Support for custom vehicles and components 				|	| &fa-check; | &fa-check; | &fa-check;	|
Mobile touch-based controller							|	| &fa-check; | &fa-check; | &fa-check;	|
Email support											|	| &fa-check;	| &fa-check;	| &fa-check;	|
Full source code										|	|	| &fa-check; | &fa-check;	|
Access to the GIT repository							|	|	| &fa-check;	| &fa-check;	|
Exclusive high-quality scenes and vehicles				|	|	| &fa-check; | &fa-check;	|
Direct support via Skype / Telegram						|	| 	| &fa-check;	| &fa-check;	|
Priority support and consultancy services				|	| 	| 	| &fa-check;	|
License covers unlimited developers (single studio)		|	| 	|	| &fa-check;	|
May be licensed by companies with anual revenue / funds / budget in excess of US\$100,000	|	| 	|	| &fa-check;	|
30 days of Expert Assistance							|	|	|	| &fa-check;	|
Flat license for all other present and future Vehicle Physics products<br>([Edy's Vehicle Physics](http://www.edy.es/dev/vehicle-physics/))|	| 	| 	| &fa-check;	|
**Price**												| Free | $160 | <del>\$480</del> **$290** | **$4800** |

> Notes:
>
> - _Free, Standard and Professional licenses may not be licensed by any commercial or
> non-commercial entity with annual gross revenues, funds (including crowfunding), or total annual
> budget in excess of US\$100,000._
>
> - _Professional license is an add-on to the Standard license._
>
> - _Licenses may be upgraded anytime by paying the price difference._

### Comparison with Edy's Vehicle Physics

[Edy's Vehicle Physics](http://www.edy.es/dev/vehicle-physics/) (**EVP**, available [at the Asset Store](https://www.assetstore.unity3d.com/#/content/403))
is a simple vehicle physics simulation model focused on the ease of configuring the vehicles.
Provides fairly _realistic-looking_ vehicle behaviours targeted for arcade and
gameplay-based games (GTA style).

Vehicle Physics Pro (**VPP**) is a strictly realistic vehicle physics simulation engine. Includes an
advanced tire friction model and a full-featured drivetrain simulation providing all the realistic
effects you expect from actual vehicles. All parameters have a correspondence with real physics, so
real world parameters have an accurate result in the simulation. The reactions of the vehicle under
each situation are configured in a physically realistic way according to its setup.

I find the vehicle in EVP more stable
:	EVP already implements the driving aids (TC, ABS, ESP) while these are not available in VPP yet.
	You can try disabling the driving aids in the Vehicle Controller in EVP.

	Also, EVP uses a flat friction model which is very forgiving. A similar model is also available
	in VPP (the "Constant" friction curve). You might find the vehicle in VPP more stable using this
	model.

Which product is better for performance on mobile low-mid end?
:	Both products have roughly the same performance at their default settings. In VPP the
	requirements might get increased depending on the specific settings of each vehicle
	(integration substeps, number of blocks in the powertrain, etc). In EVP the performance
	depends on the total number of wheels in the scene.

	The controller example at [Creating Custom Vehicles](advanced/custom-vehicles.md) may be used
	for ensuring the most performance out of the VPP simulation.

### Download & setup

To Be Announced.
