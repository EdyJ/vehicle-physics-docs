# Features

Vehicle Physics Pro is an **advanced vehicle simulation kit**. Good knowledge of vehicle mechanics, car
tuning and real-world set-up techniques is highly recommended. Configuring vehicles in VPP is easy,
but setting them up with realistic specifications is almost as difficult as in real vehicles.

&fa-info-circle:lg; If your project requires semi-arcade or gameplay-based vehicle simulation (e.g.
as in GTA, Just Cause, Dying Light ...) you may consider [Edy's Vehicle Physics](https://assetstore.unity.com/packages/tools/physics/edy-s-vehicle-physics-403 "Edy's Vehicle Physics in the Unity Asset Store"){: .alert-link target="_blank" }
instead.
{: .alert .alert-info }

&fa-warning:lg; Some features are available in specific VPP editions only. Check out the
[Licensing section](/about/licensing){: .alert-link } for details.
{: .alert .alert-warning }

#### Vehicle dynamics

- Engine: torque curve, brake torque, fuel consumption, stall
- Electric motor: torque curve, brake curve, regenerative braking
- Clutch: lock ratio, disc friction, clutch slip
- Torque Converter with locking curve
- AWD (all-wheel-drive), RWD (rear-wheel-drive), FWD (front-wheel-drive)
- Automatic Transmission with P-R-N-D and Manual modes
- Manual Transmission with optional Auto-Shift
- Gearbox: Multiple forward and reverse gear ratios
- Differentials: Open, Locked (spool), LSD (limited slip), Torsen
- Torque Splitter (i.e. Quattro transmissions)
- Brakes: front, rear, neutral, handbrake, retarder
- Steering: Ackerman, TOE, multiple steering axles
- Tire Friction: Flat, Lineal, Smooth, Parametric, Pacejka
- Suspension: spring rate, damper rate, anti-roll bars
- Powertrain efficiency ratio
- Collider-independent vehicle inertia
- Lateral tire deflection
- Wheel rolling friction
- Multi-point aerodynamic drag and downforce

#### Driving assists

- Steering assists: auto max grip, auto counter-steer
- Speed Limiter
- Cruise Control
- ABS (Anti-lock Braking System)
- TCS (Traction Control System)
- ESC (Electronic Stability Control)
- ASR (Anti-Spin Regulation)

#### Extensions

- Visual effects: steering wheel, lights, dashboard, head motion, blow shadow
- Audio effects: engine, transmission, suspension bumps, tire skid, wind
- Input: Unity standard, wheel devices (DirectInput), XBox gamepad
- Diagnostics: telemetry, graphic telemetry, suspension charts, export data to CSV
- Replay: record, play forwards/backwards, jump to time, flashback, save to file
- Camera controller: first person, attached, follow, orbit, fixed
- Motion platforms: DBox, Simtools, CxC
- Race track utilities: timing, auto-brake zones, limited speed zones
- Vehicle Toolkit component with commonly used tools, procedures and data
- Visual and/or physical damage on impacts
- Procedurally generated speed and rpm gauges

#### Ground materials

- Grip and drag per wheel
- Ground marks: skid marks, wheel trails
- Wheel particle effects: smoke, dust
- Rumble effects: step, saw, triangle, perlin

#### Advanced

- Electric vehicles, single or multiple motors, regenerative braking
- Advanced suspension dampers: bump/rebound, slow/fast
- Dynamic suspension that automatically preserves the ride height
- Variable-rate suspension springs
- Cargo simulation, solid and liquid
- Articulated and multi-body vehicles
- Tracked vehicles (caterpillars)
- Hydraulic articulations: excavators, stabilizers, cranes, etc
- Two-wheeled vehicles (experimental)
- OBD-II inspired protocol ([Data Bus](/advanced/databus-reference)) for communication with vehicles

#### Automation and autonomous vehicles

- Robust, highly efficient spline component
- PID-based target chasing
- Waypoint-based autonomous driving
- Framework for automated test (e.g. acceleration time, braking distance)
- Vehicle state snapshot record and restore

#### Vehicle model

- Physically accurate vehicle dynamics model
- Each vehicle part (_block_) is simulated in connection with others
- Physical torque connection between parts, from engine to wheels
- Advanced tire friction model providing static, adherent and sliding forces
- All expected and unexpected effects are simulated. Examples:

	- [Driveline windup](https://en.wikipedia.org/wiki/Driveline_windup "Wikipedia: Driveline Windup"){: target="_blank" }
		may be observed in locked differentials as static torques.
	- Under certain conditions a drive wheel could rotate backwards in open differentials.
	- A stalled engine could be restarted without using the ignition key if the vehicle gains enough
		speed: Press clutch / Engage gear / Release clutch.

#### Customization

- Up to 10 axles (20 wheels) in standard vehicles
- Unlimited wheels per vehicle in custom vehicles
- [Custom add-ons](/advanced/custom-addons) for external features (e.g. custom gearbox logic)
- [Custom vehicles](/advanced/custom-vehicles) and configurations (e.g. number and type of motors)
- [Custom _Blocks_](/advanced/custom-blocks) or internal vehicle parts (e.g. custom differential type)
- [Custom ground materials](/components/ground-materials/#vpgroundmaterialmanagercs) by overriding
	the provided ground material manager
- Custom automated tests for measuring vehicle specifications
- Customization examples provided: input logic, custom handling, simple vehicle controllers, turbo charger ...

#### Performance

- Mobile and low-end systems supported
- Efficient, scalable design
- Supports physics update rates as low as 16 Hz (0.06 timestep)
- Dynamics Solver exposes [_substeps_](/advanced/misc-topics-explained/#solver-numeric-integration) per-vehicle for any update rate: 50, 400, 1000, 2000 Hz

#### Integration

- Standard Unity components and workflows
- Fully working examples and demo scenes provided
- Unity menu integration (Component > Vehicle Physics)
- Coherent and detailed inspectors
- Well structured and commented C# code
- No external dependencies
- All Unity platforms supported

#### Support

- Extensive and detailed online documentation (this site)
- [Customer support](/about/support) provided directly from the developer
- [Professional Services](/about/support/#professional-services) available on-demand at hourly rates
- Dedicated [Support Q&A site](https://support.vehiclephysics.com "Vehicle Physics Pro Q&A"){: target="_blank" }
- Updates delivered by GIT repositories and Unitypackages.
- In continuous development since 2010 ([changelog](/about/changelog))

# Application examples

&fa-warning:lg; Most of the 3D models shown here belong to third party customers and are **not**
included in Vehicle Physics Pro.
{: .alert .alert-warning }

Racing games and simulators
:	Configure and fine-tune the vehicles applying real-world techniques and tricks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5RC4Rc-TbEk" frameborder="0" allowfullscreen></iframe>

Training simulators
:	Apply the specifications of real vehicles to Vehicle Physics Pro and build a simulator for
	training drivers. [Example: Truck simulator](https://twitter.com/VehiclePhysics/status/705806025266434048)

Studying / researching
:	Design unbiased experiments by reproducing the same tests under different conditions and
	configurations. [Example: ABS vs. no-ABS test](https://www.youtube.com/watch?v=t0NFt3d-jbg)

Learning and Teaching
:	Learn how real vehicles and internal parts work: basics, requirements, behaviors, side-effects,
	configuration techniques, performance tips...

<iframe width="560" height="315" src="https://www.youtube.com/embed/PT5YMWqCLJc" frameborder="0" allowfullscreen></iframe>

Prototyping
:	Experiment with any crazy idea you may have: two engines, one per front-rear axle? Sure!
	Observe the behavior and all the side effects.

# Feature examples

&fa-warning:lg; Most of the 3D models shown here belong to third party customers and are **not**
included in Vehicle Physics Pro.
{: .alert .alert-warning }

Multi-body vehicles
:	A vehicle may be composed of several rigidbodies, each one with several wheels attached.
	Articulations between rigidbodies are implemented with the VPVehicleJoint component.

	<iframe width="560" height="315" src="https://www.youtube.com/embed/G29A1ezRMb0" frameborder="0" allowfullscreen></iframe>

Dynamic suspension
:	The suspension of a group of wheels is dynamically adjusted to adapt to the supported weight
	keeping a constant ride height. Tractor trucks use this kind of suspension implemented as air
	bags.

	Example: when the truck starts in the video below (~sec 30) the rear wheels increase their
	suspension stiffness to adapt to the trailer's weight.

	<iframe width="560" height="315" src="https://www.youtube.com/embed/d4IE3-Vrr78" frameborder="0" allowfullscreen></iframe>

Liquid & solid cargo
:	The liquid cargo component simulates a fluid sloshing in a closed tank. The solid cargo
	component allows to easily simulate a solid cargo: position in the vehicle, volume occupied,
	weight...

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		![Vehicle Physics Pro - Liquid Cargo component](/img/about/vpp-liquid-cargo.jpg "Liquid cargo component"){: .clickview }
		![Vehicle Physics Pro - Solid Cargo component](/img/about/vpp-solid-cargo.jpg "Solid cargo component"){: .clickview }
	</div>

Specialized vehicle support
:	Special custom vehicle controllers are provided for electric vehicles, two-wheeled vehicles
	(experimental), tracked	vehicles, bulldozer, and diesel-electric vehicles.

	<div class="imagegallery" sm="1" md="2" lg="3" style="display:none">
		![Vehicle Physics Pro - Motorbike controller (experimental)](/img/about/vpp-motorbike-controller.jpg "Motorbike controller (experimental)"){: .clickview }
		![Vehicle Physics Pro - Tracked vehicle controller](/img/about/vpp-tracked-vehicle-controller.jpg "Tracked vehicle controller"){: .clickview }
		![Vehicle Physics Pro - Bulldozer controller](/img/about/vpp-bulldozer-controller.jpg "Bulldozer controller"){: .clickview }
	</div>

Articulated vehicles support
:	VPP provides add-on components for controlling hydraulic mechanisms such as steering, booms,
	buckets, etc. found in typical machinery.

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		![Vehicle Physics Pro - Wheel Loader controller](/img/about/vpp-wheel-loader-control.jpg "Articulated wheel loader"){: .clickview }
		![Vehicle Physics Pro - Excavator controller](/img/about/vpp-excavator-control.jpg "Tracked excavator with diesel dumper in the background"){: .clickview }
	</div>

### Framework for autonomous vehicles

Target chasing and autonomous driving
:	VPP provides "Follow target" components that controls throttle, brake and steering for reaching
	or following a static or moving target within the configured conditions. A robust and highly
	efficient spline component is also included. Waypoint systems, road lanes, and AI algorithms may
	be implemented on top of these components.

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		![Vehicle Physics Pro - Target chaser component](/img/about/vpp-target-chaser.jpg "Target chaser component"){: .clickview }
		![Vehicle Physics Pro - Self-drive component](/img/about/vpp-self-drive.jpg "Self-drive component"){: .clickview }
	</div>

Automated test framework
:	A base class VPAutomatedTestBase provides an easy to use API for implementing automated and
	repeatable tests. Acceleration and braking tests are already provided.

	<div class="imagegallery" sm="1" md="2" lg="2" style="display:none">
		![Vehicle Physics Pro - Acceleration test](/img/about/vpp-acceleration-test.jpg "Acceleration test"){: .clickview }
		![Vehicle Physics Pro - Acceleration test](/img/about/vpp-braking-test.jpg "Braking test"){: .clickview }
	</div>

	The complete telemetry data of each test may be recorded and exported to CSV for further
	analysis via VPTelemetryExporter component.

State snapshots
:	The complete state of the vehicle may be recorded, then restored any number of times. This
	provides the same precise initial conditions in repeatable tests.



