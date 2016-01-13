
## Vehicle Physics Pro

---

Vehicle Physics Pro is an advanced vehicle simulation kit providing fully realistic and accurate
vehicle physics in [Unity 3D](http://unity3d.com).


Stay tunned! Follow **[@VehiclePhysics](https://twitter.com/VehiclePhysics)** on Twitter for the
latest news and announcements.

!!! warning "&fa-warning:lg; Project under development"

	The project status is **Beta**. This documentation is work in progress. [Early Access](early-access.md)
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

&fa-check; Driveline and axle setup
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

&fa-gear:spin; Documentation
{: .roadmap .wip }

Replay system
{: .roadmap .todo }

Advanced graphic telemetry
{: .roadmap .todo }

**First release!**
{: .roadmap .todo }

Anisotropic tire friction
{: .roadmap .todo }

Generic wheel controller support
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

[Learn more](overview)